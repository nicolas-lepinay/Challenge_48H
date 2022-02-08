// 🌌 React :
import { useContext, useRef, useState } from "react";

// 🦸‍♀️ User Context :
import { UserContext } from "../../context/UserContext";

// 💅🏻 Styled components :
import { Container, Wrapper, Top, HR, Bottom, Options, Option, SVG, Button } from './SubmitImage.styled';

// 🅰️ Axios :
import axios from "axios";

function SubmitImage() {

  const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;

  const { user, setUser } = useContext(UserContext);    // Utilisateur loggé
  const [image, setImage] = useState(null);               // Fichier (image) sélectionné par l'utilisateur
  const [video, setVideo] = useState(null);               // Fichier (vidéo) sélectionné par l'utilisateur

  const title = useRef();                               // Titre du média

  // Upload d'un fichier (image ou vidéo) :
  const submitHandler = async (e) => {
    e.preventDefault();
    var newMedia = {
        userId: user._id,
        title: title.current.value,
    }

    image && (newMedia.type = 'image');
    video && (newMedia.type = 'video');

    const formData = new FormData();
    const date = new Date(Date.now()).toISOString().replaceAll(':', '-'); // 2022-12-25T18-30-00.000Z
    
    const fileName = date + "_" + (image?.name || video?.name);
    formData.append("name", fileName);
    formData.append("file", image || video);
    newMedia.file = fileName;

    // Upload du fichier sur le serveur :
    try {
        image ? 
        await axios.post("/upload/image", formData)
        : 
        await axios.post("/upload/video", formData)
    } catch (err) {
        console.log(err)
    }
    
    // Ajout du média dans la BDD :
    try {
        await axios.post("/media", newMedia);
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <Container>
      <Wrapper>
          <Top>
              <input placeholder={`Donnez un titre à votre média...`} ref={title} />
          </Top>

          <HR/>
          
          <Bottom onSubmit={submitHandler}>
              <Options>
                  <Option htmlFor="file">
                      <SVG src={`${ASSETS}/icons/media-image.svg`} title="Choisir une image"/>
                      <input 
                        id="file" 
                        type="file" 
                        accept=".png, .jpg, .jpeg, .gif, .webp" 
                        onChange={ (e) => { setImage(e.target.files[0]); setVideo(null) }}
                        />
                  </Option>

                  <Option htmlFor="file-video">
                      <SVG src={`${ASSETS}/icons/media-video.svg`} title="Choisir une vidéo"/>
                      <input 
                        id="file-video" 
                        type="file" 
                        accept=".mp4, .avi" 
                        onChange={ (e) => { setVideo(e.target.files[0]); setImage(null) }}
                        />
                  </Option>
              </Options>
              <Button type="submit" disabled={image || video ? false : true}>Ajouter</Button>
          </Bottom>
      </Wrapper>
  </Container>
  );
}

export default SubmitImage;
