import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div >
                <nav className="navbar navbar-expand-lg bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#"> 
                        <CartWidget /> 
                        Tech Geek </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
                                <a className="nav-link text-white" href="#">Nosotros</a>
                                <a className="nav-link text-white" href="#">Más productos</a>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar;