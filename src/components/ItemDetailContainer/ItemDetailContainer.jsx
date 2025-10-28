import React, { useEffect, useState } from 'react';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";
import './ItemDetailContainer.css';
import { db } from '../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [loading, setLoading] = useState(true);
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    const [displayItem, setDisplayItem] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, "productos", itemId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setDisplayItem({...docSnap.data(), id: docSnap.id});
            }
            // Delay adicional para mostrar el loader más tiempo
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };
        fetchProduct();
    }, [itemId])

    return (
        <div>
            {!loading ? 
            displayItem && <ItemDetail {...displayItem} />
            :
            <div className="loader-container">
                <BounceLoader css={override} size={150} color={"#d8a3b3"} loading={loading} speedMultiplier={1} />
            </div>
            }
        </div>
    )
}