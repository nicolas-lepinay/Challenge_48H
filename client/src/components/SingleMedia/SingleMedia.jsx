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
        try {
            await axios.put(`/media/${media?._id}/broadcast`);
            window.location.reload();
        } catch(err) {
            console.log(err);
            alert("Une erreur s'est produite lors du processus de diffusion.")
        }
    }

  return (
    <Container className={media?.isBeingBroadcast ? "broadcast" : ""} >
        <Content>
            {media?.type === 'image' && <Image src={`${MEDIA}/${media?.type}/${media?.file}`} />}
            {media?.type === 'video' && <Image src={`${ASSETS}/video_thumbnail.png`} />}
            <div style={{display: "flex", flexDirection: "column", gap: "0.7rem"}}>
                <Info>{media?.title || 'Sans titre'}</Info>
                <Info style={{fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px'}}>{media?.type}</Info>
            </div>
        </Content>
        <Actions>

            <div className="wrapper" onClick={broadcast} > 
                <Icon src={`${ASSETS}/icons/media-broadcast.svg`} className={media?.isBeingBroadcast ? "broadcast" : ""} />
                <div className="tooltip">{media?.isBeingBroadcast ? "Arrêter ce média" : "Diffuser ce média"}</div>
            </div>

            <div className="wrapper" onClick={deleteMedia} >
                <Icon src={`${ASSETS}/icons/media-delete.svg`}/>
                <div className="tooltip">Supprimer ce média</div>
            </div>

        </Actions>
    </Container>
  );
}

export default SingleMedia;
