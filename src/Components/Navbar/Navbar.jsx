import React from "react";
import {
 AppBar,
 Toolbar,
 IconButton,
 Badge,
 MenuItem,
 Menu,
 Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.jpg";
import useStyles from "./styles";
import {Link, useLocation } from 'react-router-dom';

const Navbar = ({ cart, showCart }) => {
 const classes = useStyles();
 const location = useLocation();
 return (
  <>
   <AppBar position="fixed" className={classes.appBar} color="inherit">
    <Toolbar>
     <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
      <img
       src={logo}
       alt="Extreme Commerce"
       height="25px"
       className={classes.image}
      />
      Extreme Commerce
     </Typography>
     <div className={classes.grow} />
     {location.pathname === '/' && (
      <div className={classes.button}>
      <IconButton component={Link} to='/cart' aria-label="Show cart Items" color="inherit">
      {(showCart && <Badge badgeContent={cart?.total_items} color="secondary">
      <ShoppingCart />
      </Badge>
      )
     }  
     {
      (showCart === false && <Badge badgeContent={cart?.total_items} color="secondary">
      <ShoppingCart />
      </Badge>
      )
     }
      </IconButton>
     </div>
     )}

    </Toolbar>
   </AppBar>
  </>
 );
};

export default Navbar;
