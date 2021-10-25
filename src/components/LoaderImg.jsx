import React from 'react';
import Loader from '../assets/img/spinLoader.gif';
import { Grid} from '@material-ui/core';

const LoaderImg = (props) => {
    return (
          <Grid container justifyContent="center"
                 style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "#f8f8f8ad"
                 }}>
          <Grid item >
             <img src={Loader} alt="loader" style={{
                  top: "30%",
                  left: "42%",
                  zIndex: "1000",
                  position: "absolute",
             }}/>
          </Grid>
       </Grid>
    )
}

export default LoaderImg;