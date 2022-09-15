import React from "react";
import ImgInicial from "./ImgInicial";
import ItemListContainer from "./ItemListContainer";
import ItemListCFetch from "./Fetch/ItemListCFetch";
import Footer from "./Footer";
import ItemDetailContainer from "./ItemDetailContainer";

const Inicio = () => {
    return (
        <div className='container-fluid'>
            <ImgInicial />
            <br />
            <h3 className='color margen'>Nuestros productos</h3>
            <br />
            <ItemListContainer />
            <ItemDetailContainer />
            <br />
            <br />
            <h3 className='color margen'>En conjunción con otros vendedores:</h3>
            <ItemListCFetch />
            <Footer />
        </div>
    )
}
export default Inicio;