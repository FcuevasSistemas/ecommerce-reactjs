import ItemCount from "../ItemListContainer/ItemCount"
import SelectBox from "../SelectBox/SelectBox"
import { Button } from "@mui/material"
import {React, useState } from 'react'
import {Link} from 'react-router-dom'
import CartContext  from '../context/CartContext';
const ItemDetail = ({data, actualizarCantidad}) => {
    
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)
    const addProductToCart = () =>{
        console.log ("Producto a agregar", data)
        console.log("Cantidad:",  cantidad)
    }
    return (
        <>
            <div className="detailcard">
            <div>
                <h2>{data.title}</h2>
                <h3>u$s {data.price}</h3>
                <p>Hasta 3 cuotas de u$s {data.price / 3}</p>
            </div>
            <div className="detail">
                <img src={`/${data.image}`} alt="Zapatilla" />
                <p>
                </p>
                <p>{`/item/${data.id}`}</p>
                <SelectBox />
                {!showButton ?
                <ItemCount 
                cantidad={cantidad}
                setShowButton = {setShowButton}
                actualizarCantidad={setCantidad}
                />
                :
                <Button variant="contained" color="error"><Link to='/cart'>Terminar compra</Link></Button>}
            </div>
            <Button onClick={() => addProductToCart ({data})} 
                        variant={'contained'} 
                        className="item-button-agregar">
                        Agregar al Carrito</Button>
                </div>
        
        
                </>
    )
}

export default ItemDetail