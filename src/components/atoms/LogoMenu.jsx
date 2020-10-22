import React from 'react'; 
import {NavLink} from 'react-router-dom'; 

const LogoMenu = () => (
    <div className="s-cols-4 lg-cols-1 s-cross-center">
        <NavLink exact to="/" activeClassName="active">
            <img className="main-logo" src="https://ed.team/static/images/logo.svg" alt="Logo EDteam"/>
        </NavLink>
    </div>
); 

export default LogoMenu; 