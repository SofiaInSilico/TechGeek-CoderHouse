import React from "react";
// import CartWidget from "./CartWidget";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div >
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#"> 
                        {/* <CartWidget />  */}
                        <Logo /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
                                <a className="nav-link text-white" href="#">Nosotros</a>
                                <a className="nav-link text-white" href="#">Nuestros productos</a>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar;