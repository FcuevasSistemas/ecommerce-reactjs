import { useState, useEffect } from 'react';
import CardList from '../src/components/Item/ItemList';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const productos = [
        {
            title : 'Adidas Forum Home Alone',
            price : 170,
            image : 'adidasforumhomealone.jpg',
            description: '',
            stock: 3,
            id: 1
        },
        {
            title : 'Air Jordan 1 x Travis Scott',
            price : 1500,
            image : 'airjordan1travis.jpg',
            description: '',
            stock: 5,
            id: 2
        },
        {
            title : 'Air Max 1 x Concepts',
            price : 350,
            image : 'airm1concepts.jpg',
            description: '',
            stock: 10,
            id: 3
        },
        {
            title : 'Air Max 1 x Concepts',
            price : 350,
            image : 'airm1concepts.jpg',
            description: '',
            stock: 10,
            id: 3
        },
    ]

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }  

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
        <CardList title={'Sneakers más Populares hoy'} products={productos} />
        </div>
            </>
    )
}

export default ItemListContainer