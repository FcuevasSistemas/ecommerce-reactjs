import './Card.css';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const CardProduct = (data) => {
    const { image, title, price } = data
return (
    <Card>
        <CardContent>
        <div className='Card-Product'>
            <p>{title}</p>
            <div className='card-image'>
                <img src={`./${image}`} alt=''/>
            </div>
            <span>u$s ${price}</span>
            <Button variant="contained" color="success" className='btncompra'>Comprar</Button>
        </div>
    </CardContent>
    </Card>
)

}

export default CardProduct