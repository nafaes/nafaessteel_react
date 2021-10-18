import React from 'react';
import Loader from '../assets/img/loader.gif';
import { Grid, Typography } from '@material-ui/core';

const LoaderImg = (props) => {
    <Grid container justifyContent="center">
        <Grid item container>
            <Grid item>
               <img src={Loader} alt="loader"/>
            </Grid>
            <Grid item>
              <Typography>All</Typography>
            </Grid>
        </Grid>
    </Grid>
}

export default LoaderImg;