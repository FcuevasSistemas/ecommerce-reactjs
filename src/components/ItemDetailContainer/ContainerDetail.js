import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import producto from "../../utils/fetchCustom"

const ContainerDetail = () => {
    const [product, setProduct] = useState({}) 
    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect (() => {
            getItem()
            .then( (res) => {
                setProduct(res)
            })
    })

    return (
        <>
        <div>
            <h1>Detalles del producto</h1>
        </div>
        <ItemDetail data={product}/>
        </>
    )
}


export default ContainerDetail