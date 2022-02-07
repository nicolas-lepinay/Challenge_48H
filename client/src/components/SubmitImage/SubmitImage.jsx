// React :
import { useContext, useRef, useState } from "react";

// User Context :
import { UserContext } from "../../context/UserContext";

// Styled components :
import { Container, Wrapper, Top, HR, Bottom, Options, Option, SVG, Button } from './SubmitImage.styled';

// Axios :
import axios from "axios";

function SubmitImage() {

  const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;

  const { user, setUser } = useContext(UserContext);    // Utilisateur loggé
  const [file, setFile] = useState(null);               // Fichier sélectionné par l'utilisateur
  const title = useRef();                               // Titre du média

  // Upload d'une image :
  const submitHandler = async (e) => {
    e.preventDefault();
    var newMedia = {
        userId: user._id,
        type: "image",
        title: title.current.value,
    }

    const formData = new FormData();
    const date = new Date(Date.now()).toISOString().replaceAll(':', '-'); // 2022-12-25T18-30-00.000Z
    
    const fileName = date + "_" + file.name;
    formData.append("name", fileName);
    formData.append("file", file);
    newMedia.file = fileName;

    // Upload du fichier sur le serveur :
    try {
        await axios.post("/uploadImage", formData)
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
                      <SVG src={`${ASSETS}/icons/media-image.svg`} title="Parcourir"/>
                      <input 
                        id="file" 
                        type="file" 
                        accept=".png, .jpg, .jpeg, .gif, .webp" 
                        onChange={ (e) => setFile(e.target.files[0])}
                        />
                  </Option>
              </Options>
              <Button type="submit">Ajouter</Button>
          </Bottom>
      </Wrapper>
  </Container>
  );
}

export default SubmitImage;
