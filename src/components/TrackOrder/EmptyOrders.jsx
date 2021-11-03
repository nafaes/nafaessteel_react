import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import NoOrders from "../../assets/img/NoOrders.png";
import { Link } from 'react-router-dom';

const EmptyOrders = () => {
    return (
        <Grid container justifyContent="center" style={{backgroundColor: "white",textAlign:"center",width: "60%", margin: "3em Auto 0px"}}>
        <Grid item container direction="column" style={{margin: "2em 0px"}}> 
          <Grid item>
              <img src={NoOrders} alt="NoOrders" style={{height: "150px"}}/>
          </Grid>
          <Grid item>
              <Typography style={{fontSize: "1.1rem", fontWeight: "600"}}  variant="h5">
              No Orders
              </Typography>
          </Grid>
          <Grid item>
              <Typography style={{fontSize: "0.9rem"}}  variant="h6">
                When you recieve a new order, it wil appear here ....
              </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              style={{ marginTop: 10, margin: 10 }}
            >
              Order Now
            </Button>
          </Grid>
        </Grid>
    </Grid>
    )
}

export default EmptyOrders;
