import ItemCount from "../ItemListContainer/ItemCount"
import SelectBox from "../SelectBox/SelectBox"
import { Button } from "@mui/material"
const ItemDetail = ({data}) => {
    return (
            <>
            <div className="detailcard">
            <div>
                <h2>{data.title}</h2>
                <h3>u$s {data.price}</h3>
                <p>Hasta 3 cuotas de u$s {data.price / 3}</p>
            </div>
            <div className="detail">
                <img src={`./${data.image}`} alt="" />
                <p>
                </p>
                <ItemCount />
                <SelectBox />
                <Button color="success" variant={'contained'} className="card-item-button">Comprar</Button>
            </div>
            </div>
            </>
        
    )
}

export default ItemDetail