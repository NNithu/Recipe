import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../action/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from "./styles";
import {Link} from 'react-router-dom'


const AddItem = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId, dispatch]);

  return (
    <>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.mainContainer}>
          <Grid item xs={12} sm={7}>
          {/* <Link to='/' className='button-go '>Home Page</Link> */}
            {/* <Posts setCurrentId={setCurrentId} /> */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to='/' className='button-go '>Home Page</Link>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
           <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
           © 2023 Copyright:
           <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
             Cusinerecipe.com
           </a>
         </div>
         </>
  );
};

export default AddItem;