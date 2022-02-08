// 🌌 React :
import { useState, useEffect, useContext, useRef } from "react"
import { Link, useHistory } from "react-router-dom"

// 🦸‍♀️ User Context :
import { UserContext } from "../../context/UserContext"

// React Components:
import Navbar from '../../components/Navbar/Navbar';
import SingleMedia from '../../components/SingleMedia/SingleMedia';
import SubmitImage from '../../components/SubmitImage/SubmitImage'

// 💅🏻 Styled components :
import { Wrapper, Container, Heading, MediaList } from './Media.styled';

// 🅰️ Axios :
import axios from "axios";

function Media() {

    const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;

    const { user, setUser } = useContext(UserContext);    // Utilisateur loggé
    const [media, setMedia] = useState([]);               // Liste des médias récupérés dans la BDD
    const [file, setFile] = useState(null)                // Fichier sélectionné par l'utilisateur
    const title = useRef();                               // Titre du média

    const history = useHistory();

    // Touche Echap pour basculer entre les composants :
    useEffect(() => {
      function handleKeyDown(e) {
        if(e.keyCode === 27) {
          history.push('/');
        }
      }
      document.addEventListener('keydown', handleKeyDown);
  
      // Clean up :
      return function cleanup() {
        document.removeEventListener('keydown', handleKeyDown);
      }
    }, []);

    // Fetch des médias de type 'image' dans la BDD :
    useEffect ( () => {
      const fetchMedia = async () => {
        const res = await axios.get(`/media/findAll`);
        setMedia(res.data.sort((m1, m2) => {
          return new Date(m2.createdAt) - new Date(m1.createdAt); // Tri du plus récent au plus ancien
        }));
      }
      fetchMedia();
    }, [])
  
    return (
      <Wrapper>
          <Navbar/>
          <Container>
            <Heading>Médias</Heading>

            <SubmitImage />

            <MediaList>
              {media && media.map( (medium) => (
                  <SingleMedia media={medium} key={`media-${medium._id}`}/>
              ))}
            </MediaList>
          </Container>
      </Wrapper>
      );}

export default Media;
