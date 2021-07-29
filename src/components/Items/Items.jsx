import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import clsx from "clsx";

import landingEngDesk from "../../assets/scss/landing.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 300,
    // transition: "transform 0.15s ease-in-out",
    borderRadius: "1.5em",
  },
}));

const Items = (props) => {
  const { items, navigateToAddToCart } = props;
  const classes = useStyles();
  let classesExternal = landingEngDesk;
  const theme = useTheme();

  let itemsCart = <p>Loading</p>;

  if (items) {
    itemsCart = (
      <Grid
        container
        style={{ marginTop: "3em" }}
        justify="center"
        spacing={2}
        cols={2}
      >
        {items.map((item, index) => (
          <Grid item key={index} style={{ columnGap: "12px" }}>
            <Card
              raised
              elevation={12}
              className={clsx(classes.root, classesExternal.animateCard)}
              onClick={navigateToAddToCart.bind(null, item.itemId)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  // image={Cement}
                  src={item.image}
                  title={item.itemName}
                  className={clsx(classes.ironsCard, classesExternal.ironsCard)}
                />
                <Divider />
                <CardContent
                  style={{
                    backgroundColor: "#0086b3",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h6"
                    justify="center"
                  >
                    {item.itemName}
                  </Typography>
                  <Divider />
                  {/* <Typography variant="body2" color="textSecondary" component="p">
                            {category.description}
                            </Typography> */}
                  <Typography gutterBottom variant="h6" component="h6">
                    {item.cost}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return itemsCart;
};

export default Items;
