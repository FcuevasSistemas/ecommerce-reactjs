import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
//import producto from "../../utils/fetchCustom"
import productos  from "../../utils/fetchCustom"
import { useParams } from "react-router-dom"


const ContainerDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}) 
    // const getItem = () => {
    //     return new Promise( (resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(producto)
    //         }, 2000)
    //     })
    // }

    useEffect(() => {
        

    const productFilter = productos.find((product) => {
        return product.id === parseInt(id);
    })
    setProduct(productFilter)
},[id])

    return (
        <>
        <div>
            <h1>Detalles del producto</h1>
            <h3>Articulo: {id}</h3>
            
        </div>
        {product && <ItemDetail data={product}/>}
        </>
    )
}


export default ContainerDetail