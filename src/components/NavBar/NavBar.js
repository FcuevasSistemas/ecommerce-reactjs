import './NavBar.css'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
            <Toolbar>
                <div className="menubtn">
                    <Button color="inherit" className="btn1">Productos</Button>
                    <Button color="inherit" className="btn2">Historia</Button>
                </div>
                <div className="navlogo">
                    <img src="./cucusneakerslogo.png" alt=""/>
                </div>
                <Button color="inherit"  className="btncart">
                    <ShoppingBasketIcon fontSize="large"/>
                </Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
    };

export default NavBar;
