import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div >
                <nav className="navbar navbar-expand-lg bg-muted">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> 
                        <CartWidget /> 
                        Tech Geek </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                <a className="nav-link" href="#">Nosotros</a>
                                <a className="nav-link" href="#">Más productos</a>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar;