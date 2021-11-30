import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Divider } from "@material-ui/core";
import clsx from "clsx";

import useHistoryNavigation from "../../hooks/useHistoryNavigation";
import landingEngDesk from "../../assets/scss/landing.module.scss";
import LoaderImg from "../LoaderImg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "18em",
    // transition: "transform 0.15s ease-in-out",
    borderRadius: "1.5em",
    margin: "0px auto",
  },
  cardStyles: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    textAlign: "center",
  },
}));

const Items = (props) => {
  const { items, loading } = props;
  const navigate = useHistoryNavigation();
  const classes = useStyles();
  let classesExternal = landingEngDesk;

  const itemsCart = (
    <Grid
      container
      style={{ marginTop: "3em", cursor: "pointer" }}
      justifyContent="center"
      spacing={2}
    >
      {items
        ? items.map((item, index) => (
            <Grid
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={index}
              style={{ columnGap: "12px" }}
            >
              <Card
                raised
                elevation={12}
                className={clsx(classes.root, classesExternal.animateCard)}
                onClick={navigate.bind(null, item)}
              >
                <CardHeader
                  title={item.categoryName}
                  titleTypographyProps={{ variant: "h6" }}
                  className={classes.cardStyles}
                />
                <Divider />
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  src={require(`../../assets/img/${item.picturePath}`).default}
                  title={item.categoryName}
                  style={{ height: "13em ", width: "auto", margin: "auto" }}
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
          ))
        : null}
    </Grid>
  );

  return loading === true ? <LoaderImg /> : itemsCart;
};

export default Items;
