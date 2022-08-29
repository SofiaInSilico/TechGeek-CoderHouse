import React from "react";
const NavBar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg bg-muted">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> Tech Geek </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            <a class="nav-link" href="#">Nosotros</a>
                            <a class="nav-link" href="#">Más productos</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;