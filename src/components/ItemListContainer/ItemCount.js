import { Button } from '@mui/material';
import {React, useState } from 'react';



    
function ItemCount ({stock}) {
    const [counter, setCounter] = useState(1);
        //increase counter
        const increase = () => {
        if (counter < stock) {setCounter((count) => count + 1)};
        };
        //decrease counter
        const decrease = () => {
        if (counter > 1) {setCounter((count) => count - 1)};
        };
    
        
    
        return (
        <div className="item-counter">
            <span className="counter__output">{counter}</span>
            <div className="btn__container">
            
            <Button className="control__btn" onClick={decrease} variant="outlined" color="error">-</Button>
            
            <Button className="control__btn" onClick={increase} variant="outlined" color="success">+</Button>
            </div>
        </div>
        );
    }

    export default ItemCount; 