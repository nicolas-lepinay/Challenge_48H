// 🌌 React :
import { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"

// User Context :
import { UserContext } from "../../context/UserContext"

// React Components:
import Navbar from '../../components/Navbar/Navbar.jsx';

// 💅🏻 Styled components :
import { Wrapper, Container, Heading } from './Dashboard.styled';

function Dashboard() {

  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

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

  return (
    <Wrapper>
        <Navbar/>
        <Container>
          <Heading>Dashboard</Heading>
        </Container>
    </Wrapper>
    );
}

export default Dashboard;
