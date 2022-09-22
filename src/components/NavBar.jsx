import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-link active">
                        <Logo /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to={'/'} className="nav-link active text-white">Inicio</NavLink>
                            <NavLink to={'/category/:id'} className="nav-link active text-white">Nuestros productos</NavLink>
                            <NavLink className="nav-link active text-white" to={"/item/:id"}>Detalles</NavLink>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar;