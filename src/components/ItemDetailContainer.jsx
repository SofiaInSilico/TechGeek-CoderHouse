import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const respuesta = doc(db, "items", id);
        getDoc(respuesta).then((datos) => {
            if (datos.exists()) {
                setItem({id:datos.id, ...datos.data()});
                setLoading(false);
            }            
    });       
    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;