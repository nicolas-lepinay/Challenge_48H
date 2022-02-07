// React :
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { useState, useMemo, useEffect } from "react";

// User Context :
import { UserContext } from "./context/UserContext"

// React components :
import Login from './views/Login/Login.jsx'
import Home from './views/Home/Home.jsx'
import Dashboard from './views/Dashboard/Dashboard.jsx'
import Media from './views/Media/Media.jsx'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user_ynov")) || null);
  const currentUser = useMemo( () => ({user, setUser}), [user, setUser] );

  return (
    <Router>
        <Switch>
            <UserContext.Provider value={currentUser}>
                {/*Toujours ajouter 'exact' pour la racine ! */}
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">
                    {user && user?.role > 0 ? <Redirect to="/dashboard"/> : <Login/>}
                </Route>

                <Route path="/dashboard">
                    {user && user?.role > 0 ? <Dashboard/> : <Redirect to="/login"/>}
                </Route>

                <Route path="/media">
                    {user && user?.role > 0 ? <Media/> : <Redirect to="/login"/>}
                </Route>

            </UserContext.Provider>
        </Switch>
      </Router>
  );
}

export default App;
