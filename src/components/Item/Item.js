import './Card.css';
import { useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom' 
import CartContext  from '../context/CartContext';

const Item = ({ image, title, price, id, category }) => {
    const { addProductToCart } = useContext(CartContext)
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`/${image}`} alt={"producto"}/> 
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>u$s {price}</span>
                        </div>
                        <div className='card-btn'>
                        <Link to={`/item/${id}`}><Button variant={'contained'} className="card-item-button">Ver Más</Button></Link>
                        <Button onClick={() => addProductToCart ({image, title, price, id, category})} 
                        variant={'contained'} 
                        className="item-button-agregar">
                        Agregar al Carrito</Button>
                    </div>
                    </div>
                </div>
            </CardContent>
            </Card>
    )
}


export default Item

