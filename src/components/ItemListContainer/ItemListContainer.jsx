import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
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
        
        useEffect(() => {
            const fetchProducts = async () => {
                const q = query(collection(db, "productos"), where('categoria', '==', catId));
                const querySnapshot = await getDocs(q);
                setItemsDisplay(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            };
            fetchProducts();
        }, [catId]);

      return (
        <div className="items">
            <ul className={!loading ? 'fade-in' : ''}>
                {!loading ? 
                itemsDisplay.map((item) => <Item item={item} categoria={catId} key={item.id} /> )
                :
                <div className="spinner-container">
                    <BounceLoader css={override} size={150} color={"#d8a3b3"} loading={loading} speedMultiplier={1} />
                </div>
                }
            </ul>    
        </div>  
    )
}
