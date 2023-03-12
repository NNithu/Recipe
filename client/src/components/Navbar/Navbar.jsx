import React, { useEffect, useState } from "react";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import logo from ".././images/logo.jpg";
import AddItem from "../Home/AddItem";
import {Link} from 'react-router-dom'



function Navbar() {
  const classes = useStyles();
  //   const params=useParams()



  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Recipe 
          </Typography>
          <img className={classes.image} src={logo} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
            <div className={classes.profile}>
         
             
              {/* <Button
                className={classes.logout}
                color="secondary"
                onClick={ ()=>{}}
              >

                Indian
              </Button>
              <Button
                className={classes.logout}
                color="secondary"
                onClick={ ()=>{}}
              >
                Chinese
              </Button>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={ ()=>{}}

              >
                Add Cusine
              </Button> */}
                 <Link to='/' className='button-go '>Italian</Link>
                 <Link to='/' className='button-go '>Indian</Link>
              <Link to='/add' className='button-go '>Add Cusine</Link>
            </div>
    
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
