import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from "@mui/material/Button";

function CartWidget() {
    return (
        <Button color="inherit"  className="btncart">
                    <ShoppingBasketIcon fontSize="large"/>
        </Button>
    )
}

export default CartWidget