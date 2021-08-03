import React, { useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';
import {Item} from '../Item/Item'
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";

export const ItemListContainer = () =>  {
        const {catId} = useParams();
        const [itemsDisplay, setItemsDisplay] = useState([]);
        const [loading, setLoading] = useState(true);
        const override = css`
            display: block;
            margin: 20vh auto;
            border-color: red;
        `;
        const db = getFirestore();
        const productos = db.collection("productos").where('categoria', '==', catId);
        productos.get().then((query) => {
            setItemsDisplay(query.docs.map(doc => {return {...doc.data(), id:doc.id}}))
        }).finally(() => {
            setLoading(false)
        })

      return (
        <div className="items">
            <ul>
                {!loading ? 
                itemsDisplay.map((item) => <Item item={item} categoria={catId} key={item.id} /> )
                :
                <BounceLoader css={override} size={150} color={"#d8a3b3"} loading={loading} speedMultiplier={1} />
                }
            </ul>    
        </div>  
    )
}
