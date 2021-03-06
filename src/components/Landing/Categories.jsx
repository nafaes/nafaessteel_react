import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { Divider } from "@material-ui/core";

import useHistoryNavigation from "../../hooks/useHistoryNavigation";
import landingEngDesk from "../../assets/scss/landing.module.scss";
import { landingMobEng } from "../../assets/jss/viewStyles/landing/english";

const Categories = (props) => {
  const { allCategories } = props;
  const navigate = useHistoryNavigation();

  const englishMobileStyles = landingMobEng();
  let classesExternal = landingEngDesk;
  let classes = englishMobileStyles;

  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: "3em" }}
      justifyContent="center"
      spacing={2}
    >
      <Grid
        item
        container
        lg={10}
        md={12}
        sm={12}
        xs={12}
        justifyContent="flex-start"
        spacing={6}
      >
        {allCategories
          ? allCategories.map((category, index) => (
              <Grid
                item
                container
                lg={4}
                md={4}
                sm={6}
                xs={12}
                key={category.categoryId}
                style={{ textDecoration: "none" }}
              >
                <Card
                  raised
                  elevation={12}
                  className={clsx(classes.root, classesExternal.animateCard)}
                  onClick={navigate.bind(null, category)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="250"
                      image={
                        require(`../../assets/img/${category.picturePath}`)
                          .default
                      }
                      title={category.categoryName}
                    />
                    <Divider />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {category.categoryName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Description
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </Grid>
  );
};

export default React.memo(Categories);
