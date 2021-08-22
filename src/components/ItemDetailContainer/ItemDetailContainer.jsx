import React, { useEffect, useState } from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";
import { getFirestore } from '../../firebase/firebase';

export const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [loading, setLoading] = useState(true);
    const override = css`
        display: block;
        margin: 20vh auto;
        border-color: red;
    `;

    const [displayItem, setDisplayItem] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const productos = db.collection("productos");
        productos.get().then((query) => {
            query.docs.map(doc => {
                if (doc.id === itemId){
                    setDisplayItem({
                        ...doc.data(), 
                        id:doc.id
                    })
                }
            })
        }).finally(() => {
            setLoading(false)
        })
    })

    return (
        <div>
            {!loading ? 
            displayItem && <ItemDetail {...displayItem} />
            :
            <BounceLoader css={override} size={150} color={"#d8a3b3"} loading={loading} speedMultiplier={1} />
            }
        </div>
    )
}