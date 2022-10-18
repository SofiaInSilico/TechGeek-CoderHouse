import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div class="footer-basic navbar-fixed-bottom">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><NavLink to={'/'}>Inicio</NavLink></li>
                <li class="list-inline-item"><NavLink to={'/items'}>Nuestros productos</NavLink></li>
                <li class="list-inline-item"><NavLink to={'/otros'}>Productos externos</NavLink></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">InSilico © 2022</p>
        </footer>
    </div>
    )
}
export default Footer;