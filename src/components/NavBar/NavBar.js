import './NavBar.css'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
            <Toolbar>
                <div className="menubtn">
                    <Link to='/'> <Button color="inherit" className="btn1">Productos</Button></Link>
                    <Button color="inherit" className="btn2">Historia</Button>
                    <CategoryMenu/>
                </div>
                <div className="navlogo">
                    <Link to='/' href="#home"><img src="/cucusneakerslogo.png" alt=""/></Link> 
                </div>
                <div className='cartwidget'><CartWidget/></div>
                
            </Toolbar>
        </AppBar>
        </Box>
    );
    };

export default NavBar;
