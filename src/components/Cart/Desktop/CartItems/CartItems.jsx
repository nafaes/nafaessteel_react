import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  MenuItem,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const cartItems = [
  {
    itemId: "item1",
    itemName: "Kuwaiti Steel",
    quantity: 8,
    image: "https://www.nafaessteel.com/IronImages/kwt_steel.png",
    cost: "247.000 KWD Per Ton.",
    amount: 494.0,
  },
  {
    itemId: "item2",
    itemName: "Kuwaiti Steel",
    quantity: 10,
    image: "https://www.nafaessteel.com/IronImages/oman_steel.png",
    cost: "240.000 KWD Per Ton.",
    amount: 988.0,
  },
  {
    itemId: "item3",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71XO3ndJMGS._AC_UL320_.jpg",
    cost: "299.000 KWD Per 10 Pieces.",
    quantity: 12,
    amount: 299.0,
  },
  {
    itemId: "item5",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71i+z+eHk1S._AC_UL320_.jpg",
    cost: "250.000 KWD Per 10 Pieces.",
    quantity: 12,
    amount: 250.0,
  },

  {
    itemId: "item6",
    itemName: "Kuwaiti Steel",
    image: "https://www.nafaessteel.com/IronImages/kwt_steel.png",
    cost: "247.000 KWD Per Ton.",
    quantity: 12,
    amount: 494.0,
  },
  {
    itemId: "item7",
    itemName: "Kuwaiti Steel",
    image: "https://www.nafaessteel.com/IronImages/oman_steel.png",
    cost: "240.000 KWD Per Ton.",
    quantity: 12,
    amount: 988.0,
  },
  {
    itemId: "item8",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71XO3ndJMGS._AC_UL320_.jpg",
    cost: "299.000 KWD Per 10 Pieces.",
    quantity: 12,
    amount: 299.0,
  },
  {
    itemId: "item4",
    itemName: "BGH Wooden Sticks, Plank for Art & Craft",
    image: "https://m.media-amazon.com/images/I/71i+z+eHk1S._AC_UL320_.jpg",
    cost: "250.000 KWD Per 10 Pieces.",
    quantity: 12,
    amount: 250.0,
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
    // flexGrow: 1,
  },

  itemContainer: {
    paddingTop: 12,
    marginBottom: 12,
  },

  image: {
    width: 110,
    height: 110,
    // marginRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  quantitySelect: {
    ".MuiSelect-outlined": {
      color: "#fff",
    },
  },

  root: {
    width: 200,
    "& .MuiOutlinedInput-input": {
      color: "green",
    },
    "& .MuiInputLabel-root": {
      color: "green",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-input": {
      // color: "red",
      color: theme.palette.primary.main,
    },
    "&:hover .MuiInputLabel-root": {
      // color: "red",
      color: theme.palette.primary.main,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      // borderColor: "red",
      borderColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "purple",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },
}));

const DesktopCartItems = () => {
  const classes = useStyles();

  const cartTotal = cartItems.reduce((total, { amount }) => {
    return total + amount;
  }, 0);

  const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

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
          }}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Items in your cart
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              Price
            </Typography>
          </Grid>
        </Grid>

        <Divider variant="fullWidth" />

        {cartItems.map((item) => (
          <Fragment key={item.itemId}>
            <Grid
              container
              justifyContent="flex-start"
              className={classes.itemContainer}
            >
              <Grid item xs={4} sm={4} md={3} lg={4} className={classes.image}>
                <img className={classes.img} alt="complex" src={item.image} />
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                      {item.itemName}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      color="textSecondary"
                    >
                      {item.cost}
                    </Typography>

                    <TextField
                      className={classes.root}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      variant="outlined"
                      label="Select Quantity"
                      select
                      SelectProps={{
                        MenuProps: { disableScrollLock: true },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    style={{ fontWeight: "bold" }}
                  >
                    {item.amount.toFixed(3)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
          </Fragment>
        ))}

        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            {`Subtotal (${cartItems.length} items):`}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            style={{
              fontWeight: "bold",
            }}
          >
            {`KWD ${cartTotal.toFixed(3)}`}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DesktopCartItems;
