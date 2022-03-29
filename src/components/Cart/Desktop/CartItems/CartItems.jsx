import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useTranslation } from "react-i18next";

import { addItem, removeItem } from "../../../../context/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
  },
  itemContainer: {
    paddingTop: 12,
    marginBottom: 12,
    flexWrap: "noWrap"
  },
  itemText: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  textContainer: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    // width: "56%",
    paddingTop: "3px",
  },
  image: {
    width: 110,
    height: 110,
    display: "flex",
    flexDirection: "row",
  },
  orderImage: {
    borderRadius: "50%",
    width: 115,
    height: 115,
  }

}));

const DesktopCartItems = (props) => {
  const { cartItems, totalCartItems, totalCartAmount, dispatchCartActions} = props;
  const classes = useStyles();
  const { t } = useTranslation();
   
  return (
    
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <Paper className={classes.paper}>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "0.5em"
          }}
        >
          <Grid item>
            <Typography variant="h6" >
            {t("Cart.ShoppingCart")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {`${totalCartItems} ${t("Cart.Items")}`}
            </Typography>
          </Grid>
        </Grid>

        <Divider variant="fullWidth" />

        <Grid container  justifyContent="flex-start">
          <Grid item xs={5} lg={5} sm={5} md={5} >
            <Typography variant="body1" color="textSecondary">
            {t("Cart.ProductDetails")}
            </Typography>
          </Grid>
          <Grid item xs={3} lg={3} sm={3} md={3}>
            <Typography variant="body1" color="textSecondary" >
            {t("AddToCart.Quantity")}
            </Typography>
          </Grid>
          <Grid item xs={2} lg={2} sm={2} md={2}>
            <Typography variant="body1" color="textSecondary" >
            {t("AddToCart.Price")}
            </Typography>
          </Grid>
          <Grid item xs={2} lg={2} sm={2} md={2}>
            <Typography variant="body1" color="textSecondary" >
            {t("Checkout.Total")}
            </Typography>
          </Grid>
        </Grid>

        {cartItems.map((item, index) => (
          <Fragment key={item.itemId}>
            <Grid container className={classes.itemContainer}>
              <Grid item container xs={5} lg={5} sm={5} md={5} style={{flexWrap: "noWrap"}}>
                  <Grid item className={classes.image}>
                     <img alt={item.itemName} className={classes.orderImage}
                        src={require(`../../../../assets/img/${item.itemImage}`).default} />
                  </Grid>
                  <Grid item style={{ margin: "0.2em 1em 0px 1em" }}>
                      <Grid item>
                        <Typography gutterBottom variant="subtitle1" className={classes.textContainer}>
                          {item.itemName}
                        </Typography>
                      </Grid>
                      <Grid item>
                        {item.selectedValues.map(({ name, item }, index) => (
                          <Fragment key={index}>
                            <Typography
                              variant="subtitle2"
                              color="textSecondary"
                              className={classes.textContainer}
                            >
                              {item}
                            </Typography>
                          </Fragment>
                        ))}
                      </Grid>
                      <Grid item>
                        <Button style={{ border: "1px solid red", color: "red" , marginTop: "3px" , padding:"2px 3px"}}  
                                startIcon={<DeleteForeverIcon style={{ color: "#d9534f",marginTop: "0px"}} />} 
                                onClick={dispatchCartActions.bind(null, removeItem(item.itemId, 0))}>
                        {t("Cart.Remove")}
                        </Button>
                      </Grid>
                </Grid>
              </Grid>
              <Grid item  xs={3} lg={3} sm={3} md={3}>             
                  <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={dispatchCartActions.bind(null, removeItem(item.itemId, 1))}>
                      -
                    </Button>
                    <Button>{item.quantity}</Button>
                    <Button onClick={dispatchCartActions.bind(null, addItem({ itemId: item.itemId, quantity: 1 }))}>
                      +
                    </Button>
                  </ButtonGroup>                
              </Grid>
              <Grid item  xs={2} lg={2} sm={2} md={2}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    style={{ fontWeight: "bold" }} >
                    {item.price.toFixed(3)}
                  </Typography>
              </Grid>
              <Grid item  xs={2} lg={2} sm={2} md={2}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    style={{ fontWeight: "bold" }} >
                         {/* {(Number(item.quantity) * Number(item.price)).toFixed(3)} */}
                         {`${(Number(item.quantity) * Number(item.price)).toFixed(3)} ${t("Cart.Kwd")}`}
                  </Typography>
              </Grid>
            </Grid>
          </Fragment>
        ))}

        <Divider />
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {`${t("Cart.Subtotal")} (${totalCartItems} ${t("Cart.Items")}):`}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{
              fontWeight: "bold",
            }}
          >
            {`${t("Cart.Kwd")} ${totalCartAmount.toLocaleString(undefined, {
              minimumFractionDigits: 3,
            })}`}
            {/* {`KWD ${totalCartAmount.toFixed(3)}`} */}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DesktopCartItems;
