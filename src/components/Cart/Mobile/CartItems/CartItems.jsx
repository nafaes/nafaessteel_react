import React, { useContext } from "react";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { addItem, removeItem } from "../../../../context/actions/cartActions";
import { useTranslation } from "react-i18next";
import { CartContext } from "../../../../pages/CartPage";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  headerContent: {
    backgroundColor: "#fff",
    padding: 16,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: "10px 14px",
    paddingBottom: "10px",
  },
  itemImage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  stickyBottom: {
    padding: 2,
    position: "sticky",
    bottom: 0,
    backgroundColor: "#F8F8F8",
    borderTop: "1.6px solid #E7E7E7",
  },
  placeOrderBtn: {
    margin: "10px",
    width: "16em",
  },
  buttonWrapper: {
    position: "relative",
  },
  buttonProgress: {
    color: blue[600],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -14,
    marginLeft: -12,
  },
}));

const CartItems = (props) => {
  const { cartItems, totalCartItems, totalCartAmount, dispatchCartActions } =
    props;
  const { orderValidation, placeOrderLoading } = useContext(CartContext);
  const classes = useStyles();
  const { t } = useTranslation();

  return cartItems ? (
    <Grid container style={{ marginTop: "2em" }}>
      <Grid item xs={12} sm={12} className={classes.headerContent}>
        <Typography variant="h6" gutterBottom>
          {t("Cart.Text1")}
        </Typography>
        <Divider variant="fullWidth" />
      </Grid>

      {cartItems.map((item) => (
        <Grid item xs={12} sm={12} key={item.itemId} className={classes.card}>
          <Grid container>
            <Grid item xs={5} sm={4} className={classes.itemImage}>
              <img
                width={100}
                height={100}
                alt={item.itemName}
                src={
                  require(`../../../../assets/img/${item.itemImage}`).default
                }
              />
            </Grid>

            <Grid container item xs={7} sm={8}>
              <Grid item className={classes.itemText}>
                <Typography
                  variant="subtitle1"
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {item.itemName}
                </Typography>

                {item.selectedValues.map(({ name, item }, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    color="textSecondary"
                    noWrap={true}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "inherit",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                <Typography
                  variant="subtitle1"
                  noWrap={true}
                  style={{ fontWeight: "bold" }}
                >
                  {item.price.toFixed(3)}
                </Typography>
              </Grid>

              <Grid
                item
                container
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={8}>
                  <ButtonGroup variant="contained" size="small">
                    <Button
                      onClick={dispatchCartActions.bind(
                        null,
                        removeItem(item.itemId, 1)
                      )}
                    >
                      <RemoveIcon color="primary" />
                    </Button>
                    <Button>{item.quantity}</Button>
                    <Button
                      onClick={dispatchCartActions.bind(
                        null,
                        addItem({ itemId: item.itemId, quantity: 1 })
                      )}
                    >
                      <AddIcon color="primary" />
                    </Button>
                  </ButtonGroup>
                </Grid>

                <Grid item xs={4}>
                  <IconButton
                    onClick={dispatchCartActions.bind(
                      null,
                      removeItem(item.itemId, 0)
                    )}
                  >
                    <DeleteForeverIcon
                      style={{ fontSize: "2rem", color: "#d9534f" }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
      ))}

      <Grid
        item
        container
        className={classes.stickyBottom}
        alignItems="center"
        style={{ textAlign: "center" }}
      >
        <Grid item xs={6} sm={4}>
          <Typography variant="subtitle1" component="div">
            {`${t("Cart.Subtotal")} (${totalCartItems} ${t("Cart.Items")}):`}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography
            variant="subtitle1"
            component="div"
            style={{
              fontWeight: "bold",
            }}
          >
            {`${t("Cart.Kwd")} ${totalCartAmount.toLocaleString(undefined, {
              minimumFractionDigits: 3,
            })}`}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.placeOrderBtn}
              onClick={orderValidation.bind(null)}
              disabled={placeOrderLoading}
            >
              {t("Cart.PlaceOrder")}
            </Button>

            {placeOrderLoading && (
              <CircularProgress size={28} className={classes.buttonProgress} />
            )}
          </div>
        </Grid>
      </Grid>
    </Grid>
  ) : null;
};

export default CartItems;
