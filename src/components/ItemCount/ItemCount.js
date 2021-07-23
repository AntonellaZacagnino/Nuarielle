import React, {useState} from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, count, setCount}) => {
    const [addDisabled, setAddDisabled] = useState(false);
    const [removeDisabled, setRemoveDisabled] = useState(true);

    const addItem = () => {
        if (count < stock){
            setCount(count + 1)
            setRemoveDisabled(false)
        } else{
            setAddDisabled(true)
        }
    }

    const removeItem = () => {
        if (count > initial){
            setAddDisabled(false)
            setCount(count - 1)
        } else{
            setRemoveDisabled(true)
        }
    }
    return (
        <div className="itemCount">
            <button className="remove" disabled={removeDisabled} onClick={removeItem}> - </button> {count} <button className="add" disabled={addDisabled} onClick={addItem}> + </button>
        </div>
    )

}