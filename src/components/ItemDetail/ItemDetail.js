import ItemCount from "../ItemListContainer/ItemCount"
import SelectBox from "../SelectBox/SelectBox"
import { Button } from "@mui/material"
const ItemDetail = ({data, stock}) => {
    return (
            <>
            <div className="detailcard">
            <div>
                <h2>{data.title}</h2>
                <h3>u$s {data.price}</h3>
                <p>Hasta 3 cuotas de u$s {data.price / 3}</p>
            </div>
            <div className="parradetail">
                <img src={`./${data.image}`} alt="" />
                <p>En esta entrega, Nike forma una colaboración
                    con el emblemático diseñador
                    Holandés Piet Parra. Creando una silueta
                    con su reconocido arte abstracto.
                </p>
                <ItemCount stock={stock}/>
                <SelectBox />
                <Button color="success" variant={'contained'} className="card-item-button">Comprar</Button>
            </div>
            </div>
            </>
        
    )
}

export default ItemDetail