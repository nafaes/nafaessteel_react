import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Fragment } from 'react'

const TrackOrder = () => {
  return (
    <Fragment>
         <Grid container direction="row" style={{backgroundColor:"whitesmoke"}}>
           {/* <Grid item container direction="row">
              <Typography variant="h6">Your Orders</Typography>    
           </Grid> */}
           <Grid item container direction="row" lg={6} style={{flexWrap:"nowrap"}}>
              <Grid item container direction="column" >
                 <Grid item>
                    <Typography variant="h6">ORDER PLACED</Typography>   
                 </Grid>
                 <Grid item>
                    <Typography variant="p">10 August 2021</Typography>   
                 </Grid>
              </Grid>
              <Grid item container direction="column">
                 <Grid item>
                    <Typography variant="h6">TOTAL</Typography>   
                 </Grid>
                 <Grid item>
                    <Typography variant="p">KWD 50.00</Typography>   
                 </Grid>
              </Grid>
              <Grid item container direction="column">
                 <Grid item>
                    <Typography variant="h6">SHIP TO</Typography>   
                 </Grid>
                 <Grid item>
                    <Typography variant="p">Nimeelya</Typography>   
                 </Grid>
              </Grid>
           </Grid>
           <Grid item container direction="row" lg={6} style={{flexWrap:"nowrap"}}>
              <Grid item container direction="column">
                 <Grid item>
                    <Typography variant="h6">ORDER PLACED</Typography>   
                 </Grid>
                 <Grid item>
                    <Typography variant="p">10 August 2021</Typography>   
                 </Grid>
              </Grid>
              <Grid item container direction="column">
                 <Grid item>
                    <Typography variant="h6">TOTAL</Typography>   
                 </Grid>
                 <Grid item>
                    <Typography variant="p">KWD 50.00</Typography>   
                 </Grid>
              </Grid>
           </Grid>
        </Grid>
    </Fragment>
  )
}

export default TrackOrder
