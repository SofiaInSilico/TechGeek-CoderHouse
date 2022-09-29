import { useEffect, useState } from 'react';
import { productos } from './mock/productos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    // const getItem = (id) =>
    //     new Promise((resolve, reject) => {
    //         const producto = (productos.find((prod) => prod.id === Number(id)))
    //         setTimeout(() => {
    //             resolve(producto);
    //             setLoading(false);
    //         }, 2000);
    //     });

    useEffect(() => {
        const db = getFirestore();
        const respuesta = doc(db, "items", id);
        getDoc(respuesta).then((datos) => {
            if (datos.exists()) {
                setItem({id:datos.id, ...datos.data()});
                setLoading(false);
            }            

        // getItem(id)
        //     .then((response) => {
        //         setItem(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    });       
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;