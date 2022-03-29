import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";


import useHistoryNavigation from "../../hooks/useHistoryNavigation";
import landingEngDesk from "../../assets/scss/landing.module.scss";
import { landingMobEng } from "../../assets/jss/viewStyles/landing/english";
import ProductLoader from "../Loaders/product-loader";


const Categories = (props) => {
  const { allCategories } = props;
  const navigate = useHistoryNavigation();
  const englishMobileStyles = landingMobEng();
  let classesExternal = landingEngDesk;
  let classes = englishMobileStyles;
  
  const allCatergory = (
    <React.Fragment>
      <Grid container direction="row" justifyContent="center" spacing={2}
        style={{ marginTop: "3em" }}>
        <Grid item container
          lg={10} md={12} sm={12} xs={12} justifyContent="flex-start" spacing={6}>
          {allCategories && allCategories.length !== 0 ? (
            allCategories.map((category, index) => (
              <Grid item container
                lg={4} md={4} sm={6} xs={12}
                key={category.categoryId}
                style={{ textDecoration: "none" }}>
                <Card
                  elevation={12}
                  className={clsx(classes.root, classesExternal.animateCard)}
                  onClick={navigate.bind(null, category)}>
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
                    <CardContent style={{ textAlign: "center", padding: "8px" }}>
                      <Typography gutterBottom variant="h6" component="h6">
                        {category.categoryName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <ProductLoader count={4} />
          )}
        </Grid>
      </Grid>

    </React.Fragment>
  );

  return allCatergory;
};

export default React.memo(Categories);
