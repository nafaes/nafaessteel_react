import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Divider } from "@material-ui/core";
import clsx from "clsx";

import landingEngDesk from "../../assets/scss/landing.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "18em",
    // transition: "transform 0.15s ease-in-out",
    borderRadius: "1.5em",
    margin: "0px auto"
  },
  cardStyles: { backgroundColor: theme.palette.common.blue, color: "white", textAlign: "center" }
}));

const Items = (props) => {
  const { items, navigateToAddToCart, navigate } = props;
  const classes = useStyles();
  let classesExternal = landingEngDesk;

  let itemsCart = <p>Loading</p>;

  if (items) {
    itemsCart = (
      <Grid
        container
        style={{ marginTop: "3em" }}
        justifyContent="center"
        spacing={2}
      // cols={2}
      >
        {items.map((item, index) => (
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={index}
            style={{ columnGap: "12px" }}
          >
            <Card raised
              elevation={12} className={classes.root}
              onClick={navigate.bind(null, item.nextLevel, item)}>
              <CardHeader title={item.itemName}
                titleTypographyProps={{ variant: "h6" }}
                className={classes.cardStyles}
              />
              <Divider />
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                // height="200px"
                // image={Cement}
                src={item.image}
                title={item.itemName}
                style={{ height: "13em ", width: "13em", margin: "auto" }}
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
                <Typography gutterBottom variant="h6" component="h6">
                  {item.cost}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return itemsCart;
};

export default Items;
