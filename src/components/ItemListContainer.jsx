import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryItems).then((datos) => {
            if (datos.size > 0) {
                setItems(datos.docs.map(item => ({ id: item.id, ...item.data() })));
                setLoading(false);
            }
        });

    }, [id]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;