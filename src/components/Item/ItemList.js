import Item from './/Item'
import { Grid } from '@mui/material';
const ItemList = ({title, products}) => {
    return (
    <>
        <h2>{title}</h2>
        <Grid container spacing={2}>
            {products.map( ({ title, price, image, id, stock, category}) => {
                return (
                    <Grid item md={3} key={id}>
                        <Item 
                        title={title} 
                        price={price} 
                        image={image} 
                        stock={stock} 
                        id={id} 
                        category={category}/>
                    </Grid>
                )
            })
        }
        </Grid>
    </>
    )
}
export default ItemList;