import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from "@mui/material/Button";

function CartWidget() {
    return (
        <div className='shoppingicon'>  <Button color="inherit"  className="btncart">
        <ShoppingBasketIcon fontSize="large"/>
    </Button>
    </div>
    
    )
}

export default CartWidget