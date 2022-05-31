import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ItemCount from '../ItemListContainer/ItemCount';
import SelectBox from '../SelectBox/SelectBox';
import {Link} from 'react-router-dom' 


const Item = ({ image, title, price, stock, id }) => {
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`./${image}`} alt={"producto"}/> 
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>u$s {price}</span>
                        </div>
                        <ItemCount stock={stock} />
                        <Link to={`/item/${id}`}><Button variant={'contained'} className="card-item-button">Ver Más</Button></Link>
                    </div>

                </div>
            </CardContent>
            </Card>
    )
}


export default Item

