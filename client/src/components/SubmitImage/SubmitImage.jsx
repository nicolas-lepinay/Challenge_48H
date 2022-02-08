// 🌌 React :
import { useContext, useRef, useState } from "react";

// 🦸‍♀️ User Context :
import { UserContext } from "../../context/UserContext";

// 💅🏻 Styled components :
import { Container, Wrapper, Top, HR, Bottom, Options, Option, SVG, Button, YoutubeInput } from './SubmitImage.styled';

// 🅰️ Axios :
import axios from "axios";

function SubmitImage() {

  const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;

  const { user, setUser } = useContext(UserContext);        // Utilisateur loggé
  const [image, setImage] = useState(null);                 // Fichier (image) sélectionné par l'utilisateur
  const [video, setVideo] = useState(null);                 // Fichier (vidéo) sélectionné par l'utilisateur
  const [showYoutube, setShowYoutube] = useState(false);

  const title = useRef();                                    // Titre du média
  const youtubeRef = useRef();                               // URL de la vidéo Youtube

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

  // Download d'une vidéo Youtube :
  const downloadYoutube = async (e) => {
    e.preventDefault();
    const URL = youtubeRef.current.value;
    console.log(URL);
    const date = new Date(Date.now()).toISOString().replaceAll(':', '-'); // 2022-12-25T18-30-00.000Z
    const filename = date + "_" + user._id;

    // Upload du fichier sur le serveur :
    try {
        await axios.post(`/youtube_download?url=${URL}`, { filename: filename } )
    } catch (err) {
        console.log(err)
    }
    // Ajout du média dans la BDD :
    var newMedia = {
        userId: user._id,
        type: 'video',
        file: filename + '.mp4',
        title: title.current.value,
    }
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
                        onChange={ (e) => { setImage(e.target.files[0]); setVideo(null); setShowYoutube(false) }}
                        />
                  </Option>

                  <Option htmlFor="file-video">
                      <SVG src={`${ASSETS}/icons/media-video.svg`} title="Choisir une vidéo"/>
                      <input 
                        id="file-video" 
                        type="file" 
                        accept=".mp4, .avi" 
                        onChange={ (e) => { setVideo(e.target.files[0]); setImage(null); setShowYoutube(false) }}
                        />
                  </Option>

                  <Option onClick={() => { setShowYoutube(!showYoutube); setVideo(null); setImage(null) } }>
                        <SVG src={`${ASSETS}/icons/media-youtube.svg`} style={{width: '80px'}}title="Télécharger une vidéo Youtube"/>
                  </Option>
              </Options>
              <Button type="submit" disabled={image || video ? false : true}>Ajouter</Button>
          </Bottom>

          {showYoutube &&
            <>
                <HR/>
                <form onSubmit={downloadYoutube} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <YoutubeInput type="text" placeholder="Entrez l'URL d'une vidéo Youtube..." ref={youtubeRef} />
                    <Button type="submit" className="youtube-submit">Télécharger</Button>
                </form>
            </>
            }

      </Wrapper>
  </Container>
  );
}

export default SubmitImage;
