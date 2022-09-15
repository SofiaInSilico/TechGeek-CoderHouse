import React from "react";
// import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div >
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand text-white"> 
                        {/* <CartWidget />  */}
                        <Logo /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to='/' className="nav-link text-white">Inicio</Link>
                                <Link to='/category/:id' className="nav-link text-white">Nuestros productos</Link>
                                <a className="nav-link text-white" href="/item/:id">Detalles</a>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar;