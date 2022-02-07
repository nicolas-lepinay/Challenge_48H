// React :
import { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"

// User Context :
import { UserContext } from "../../context/UserContext"

function Home() {

    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user_ynov");
    }

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

    return (
        <div>
            <p>[ PAGE D'ACCUEIL ]</p>
        </div>
    );
}

export default Home;
