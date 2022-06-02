import { useState, useEffect } from 'react';
import ItemList from '../Item/ItemList';
import {getProducts} from '../../utils/fetchCustom'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        getProducts()
        .then( (response) => {
                console.log("Then : Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch( (err) => {
            console.log("Catch: Fallo la llamada.", err)
        })
        .finally( () => {
            console.log("Finally: termino la promesa")
        })
    }, []);
    return (
        <>
        <h1>{greeting}</h1>
        <div className='general-container'>
        <ItemList title={'Sneakers más Populares hoy'} products={products} />
        </div>
            </>
    )
}

export default ItemListContainer