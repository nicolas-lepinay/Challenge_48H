// 🌌 React :
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// 💅🏻 Styled components :
import { Nav, List, Item, SVG, HR } from './Navbar.styled';

// 🦸‍♀️ User Context :
import { UserContext } from "../../context/UserContext";

function Navbar() {

    const MEDIA = process.env.REACT_APP_PUBLIC_MEDIA_FOLDER;
    const ASSETS = process.env.REACT_APP_PUBLIC_ASSETS_FOLDER;

    // 🦸 UserContext :
    const { user, setUser } = useContext(UserContext);

    // 🏃 Log out user :
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

  return (
        <Nav>
            <List>
                {/* PROFILE */}
                <Item className="default-cursor">
                    <SVG src={`${ASSETS}/icons/navbar-person.svg`} />
                    <div className="tooltip">Bonjour, {user?.username}</div>
                </Item>

                <HR/>

                <Link to="/dashboard">
                    <Item>
                        <SVG src={`${ASSETS}/icons/navbar-dashboard.svg`} />
                        <div className="tooltip">Dashboard</div>
                    </Item>
                </Link>

                <Link to="/dashboard">
                    <Item>
                        <SVG src={`${ASSETS}/icons/navbar-screen.svg`} />
                        <div className="tooltip">Appareils</div>
                    </Item>
                </Link>

                <Link to="/media">
                    <Item>
                        <SVG src={`${ASSETS}/icons/navbar-media.svg`} />
                        <div className="tooltip">Médias</div>
                    </Item>
                </Link>

                {/* 🛑 LOGOUT */}
                <Item onClick={logout}>
                    <SVG src={`${ASSETS}/icons/navbar-off.svg`} />
                    <div className="tooltip">Déconnexion</div>
                </Item>
            </List>
        </Nav>
  );
}

export default Navbar;
