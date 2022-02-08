// React :
import { useState, useEffect, useContext, useRef } from "react"
import { Link, useHistory } from "react-router-dom"

// 🦸‍♀️ User Context :
import { UserContext } from "../../context/UserContext"

// 💅🏻 Styled components :
import { Container, Box, Sidebar, SidebarContent, LogoContainer, Logo, SidebarFooter, Button, Main, MainTitle, Input } from './Login.styled';

// 🅰️ Axios :
import axios from "axios";

function Login() {
    
    const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;

    // User :
    const { user, setUser } = useContext(UserContext);

    const history = useHistory();

    // Login inputs :
    const identifier = useRef();
    const password = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();        
        try {
            const res = await axios.post("/auth/login", { identifier: identifier.current.value, password: password.current.value })
            setUser(res.data);
            localStorage.setItem("user_ynov", JSON.stringify(res.data))
        } catch (err) {
            alert("Votre identifiant ou votre mot de passe est incorrect.");
            console.log(err);
        }
    };

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
        <Container>
            <Box>
                <Sidebar>
                    <SidebarContent>
                        <LogoContainer>
                            <Logo src={`${ASSETS}/logo_ynov.svg`} />
                        </LogoContainer>
                        <h3>Bienvenue dans la communauté Ynov</h3>
                        <p>Connectez-vous pour accéder à la partie Administrateur de l'application.</p>
                    </SidebarContent>
                    <SidebarFooter>
                        <Link>
                            <Button>Créer un compte</Button>
                        </Link>
                    </SidebarFooter>
                </Sidebar>
                <Main>
                    <form onSubmit={handleLogin}>
                        <MainTitle>Connexion</MainTitle>
                        <Input type="text" placeholder="Email ou nom d'utilisateur" required ref={identifier}/>
                        <Input type="password" placeholder="Mot de passe" required ref={password}/>
                        <Button className="login-btn">Connexion</Button>
                    </form>
                </Main>
            </Box>
        </Container>
    );
}

export default Login;
