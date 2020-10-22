import React from 'react'; 
import {NavLink} from 'react-router-dom'; 

const NavMenu = () => (
    <nav className="main-menu" id="main-menu">
        <ul>
            <li><NavLink exact to="/" activeClassName="active"> Inicio </NavLink></li>
            <li><NavLink to="/cursos" activeClassName="active"> Cursos </NavLink></li>
            <li><NavLink to="/formulario" activeClassName="active"> Formulario </NavLink></li>
            <li><NavLink to="/usuarios" activeClassName="active"> Usuarios </NavLink></li>
        </ul>
    </nav>
); 

export default NavMenu; 