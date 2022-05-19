import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

const CardProduct = (data) => {
    const { image, title, price, stock} = data
return (
    <Card>
        <CardContent>
        

        <Button variant="contained" color="success" className='btncompra'>Comprar</Button>
    </CardContent>
    </Card>
)

}

export default CardProduct


