import { Button } from '@mui/material';
import {React, useState } from 'react';



    
const ItemCount = ({cantidad, actualizarCantidad, setShowButton}) => {
    const [quantity, setQuantity] = useState(1)
    
    const removeProduct = () => {
        actualizarCantidad(cantidad - 1)
    }

    const addProduct = () => {
        actualizarCantidad(cantidad + 1)
    };
    
    return (
        <>
        <div className='counter-btn'>
            <Button onClick={removeProduct} color='error' variant='outlined'>-</Button>
            <p>{cantidad}</p>
            <Button onClick={addProduct} color='success' variant='outlined'>+</Button>
        </div>
        <Button onClick={() => setShowButton(true)} color="success" variant={'contained'} className="card-item-button">Comprar</Button>
        </>
    )
}
export default ItemCount