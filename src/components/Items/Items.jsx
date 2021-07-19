import React, { Fragment, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Iron from "../../assets/img/Iron.png";
import Cement from "../../assets/img/cement.jpg";
import Wood from "../../assets/img/wood.jpg";
import Brick from "../../assets/img/brick.jpg";
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
const { items}=props;
  const classes = useStyles();
  let classesExternal = landingEngDesk;

  const theme = useTheme();

  const categories = useMemo(() => {
    return [
      {
        image: "https://www.nafaessteel.com/IronImages/kwt_steel.png",
        title: "Kuwait Steel",
        alt: "Kuwait Steel",
        price: "247 KWD per ton",
        description:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      {
        image: "https://www.nafaessteel.com/IronImages/oman_steel.png",
        title: "Oman Steel",
        alt: "Oman Steel",
        price: "240 KWD per ton",
        description:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      {
        image: "https://www.nafaessteel.com/IronImages/ksa_steel.png",
        title: "Alittefaq Steel",
        alt: "Alittefaq Steel",
        price: "240 KWD per ton",
        description:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      {
        image: "https://www.nafaessteel.com/IronImages/irani_steel.png",
        title: "Irani Steel",
        alt: "Irani Steel",
        button: "iron",
        price: "240 KWD per ton",
        description:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      },
      
    ];
  }, []);

  let itemsCart = <p>Loading</p>

  if(items) {
    itemsCart = (
        <Grid container style={{marginTop: "3em"}} justify="center" spacing={2} cols={2}>
        {items.map((item, index) => (
          <Grid item key={index} style={{columnGap:"12px"}} >
            <Card
              raised
              elevation={12}
              className={clsx(classes.root, classesExternal.animateCard)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  // image={Cement}
                  src={item.image}
                  title={item.itemName}
                  className={clsx(
                    classes.ironsCard,
                    classesExternal.ironsCard
                  )}
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
      )
  }

  return (
    itemsCart
    
  );
};

export default Items;
