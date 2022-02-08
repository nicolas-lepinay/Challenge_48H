// 🌌 React :
import { useState, useEffect, useContext, useRef } from "react"
import { Link, useHistory } from "react-router-dom"

// 💅🏻 Styled components :
import { VIDEO_STYLE, Container, Canvas } from './Home.styled';

// 🦸‍♀️ User Context :
import { UserContext } from "../../context/UserContext"

// 🅰️ Axios :
import axios from "axios";

// 🎥 React Player :
import ReactPlayer from 'react-player';

function Home() {

    const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;
    const MEDIA = process.env.REACT_APP_PUBLIC_MEDIA_FOLDER;

    const { user, setUser } = useContext(UserContext);
    const [media, setMedia] = useState(null);
    const videoRef = useRef(null);

    const [source, setSource] = useState('');


    const history = useHistory();

    useEffect(() => {
        function handleKeyDown(e) {
          if(e.keyCode === 27) {
            history.push('/dashboard');
          }
        }
        document.addEventListener('keydown', handleKeyDown);
    
        // Clean up :
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      }, []);

      useEffect(() => {
        const fetchMedia = async () => {
          const res = await axios.get(`/media/broadcast`);
          setMedia(res.data);
        }
        fetchMedia();
      }, []);


    return (
        <>
          {(media?.type === 'image' || !media) && <Canvas src={media ? `${MEDIA}/${media?.type}/${media?.file}` : `${ASSETS}/ynov_bg.png` } />}
          {media?.type === 'video' && 
            // <video src={`${MEDIA}/${media?.type}/${media?.file}` } autoPlay ref={videoRef} />
            <ReactPlayer 
              playing={true}
              loop={true}
              url={`${MEDIA}/${media?.type}/${media?.file}`}
              style={VIDEO_STYLE}
            />
          }



        </>
    );
}

export default Home;
