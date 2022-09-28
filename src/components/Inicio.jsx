import React from "react";
import ImgInicial from "./ImgInicial";
import ItemListContainer from "./ItemListContainer";
import ItemListCFetch from "./Fetch/ItemListCFetch";

const Inicio = () => {

    return (
        <div>
            <ImgInicial />
            <ItemListContainer />
            <h3 className='color margen'>También te podría interesar:</h3>
            <ItemListCFetch />
        </div>

    )
}

export default Inicio;