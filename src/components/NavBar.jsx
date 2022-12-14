import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";



const NavBar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-link active">
                        <Logo /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="nav justify-content-center margenNav font">
                            <NavLink to={'/'} className="nav-link active text-white">Inicio</NavLink>
                            <NavLink to={'/items'} className="nav-link active text-white">Nuestros productos</NavLink>
                            <NavLink to={'/otros'} className="nav-link active text-white">Productos externos</NavLink>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar;