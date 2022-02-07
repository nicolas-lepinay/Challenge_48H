import React from 'react';

// Styled components :
import { Container, Content, Image, Info, Actions, Icon } from './SingleMedia.styled';

// Axios :
import axios from "axios";

function SingleMedia({ media }) {

    const MEDIA = process.env.REACT_APP_PUBLIC_MEDIA_FOLDER;
    const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;

    const deleteMedia = async () => {
        try {
            const res = await axios.delete(`/media?id=${media?._id}`);
            window.location.reload();
        } catch(err) {
            console.log(err);
            alert("Une erreur s'est produite lors de la tentative de suppression.")
        }
    }

    const broadcast = async () => {

    }

  return (
    <Container>
        <Content>
            <Image src={`${MEDIA}/${media?.type}/${media?.file}`} />
            <Info>{media?.title || 'Sans titre'}</Info>
        </Content>
        <Actions>

            <Icon
                src={`${ASSETS}/icons/media-broadcast.svg`}
                onClick={deleteMedia}
                title="Diffuser ce média"
            />

            <Icon
                src={`${ASSETS}/icons/media-delete.svg`}
                onClick={broadcast}
                title="Êtes-vous sûr(e) de vouloir supprimer ce média ?"
            />
        </Actions>
    </Container>
  );
}

export default SingleMedia;
