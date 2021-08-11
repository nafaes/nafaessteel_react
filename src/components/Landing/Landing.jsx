import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import MailIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/PhoneInTalkOutlined";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import { Divider, Hidden } from "@material-ui/core";

import { allCategories } from "../../constants/data";
import landingEngDesk from "../../assets/scss/landing.module.scss";
import { landingMobEng } from "../../assets/jss/viewStyles/landing/english";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const Landing = (props) => {
  const {
    navigateToItems,
    location: { state },
    history,
  } = props;

  const englishMobileStyles = landingMobEng();
  let classesExternal = landingEngDesk;
  let classes = englishMobileStyles;

  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  let contactUs = useRef(null);
  useEffect(() => {
    let timeOut;
    if (state?.message) {
      contactUs.current.scrollIntoView({
        behavior: "smooth",
      });

      timeOut = setTimeout(() => {
        history.push("/");
      }, 1000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [history, state]);

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "3em" }}
        justifyContent="center"
        spacing={2}
      >
        {allCategories.map((category, index) => (
          <Grid
            item
            key={category.categoryId}
            style={{ textDecoration: "none" }}
          >
            <Card
              raised
              elevation={12}
              className={clsx(classes.root, classesExternal.animateCard)}
              onClick={navigateToItems.bind(
                null,
                category.stages,
                category.categoryId,
                category.categoryName
              )}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  image={category.image}
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
                    {category.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div ref={contactUs}>
        <Grid
          container
          direction="column"
          style={{ marginTop: "4em" }}
          className={classes.contactContainer}
        >
          <Grid item container justifyContent="center">
            <Typography
              variant="h6"
              className={clsx(
                classes.contactHeader,
                classesExternal.contactHeader
              )}
            >
              GET IN TOUCH
            </Typography>
          </Grid>

          <Grid
            item
            container
            // direction="row"
            direction={largeScreen ? "row" : "column"}
            justifyContent="center"
            alignItems="center"
            className={clsx(
              classes.contactContent,
              classesExternal.contactContent
            )}
          >
            <Grid
              item
              container
              direction="column"
              style={{ textAlign: "center" }}
            >
              <Grid item style={{ padding: "10px" }}>
                <Grid item>
                  <IconButton>
                    <MailIcon color="secondary" fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={clsx(classes.info, classesExternal.info)}
                  >
                    info@nafaes.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider
              orientation={
                largeScreen ? "vertical" : "horizontal, border:'1px solid #fff'"
              }
              flexItem
              style={{ backgroundColor: "#fff" }}
            />
            <Grid
              item
              container
              direction="column"
              style={{
                textAlign: "center",
              }}
            >
              <Grid item style={{ padding: "10px" }}>
                <Grid item>
                  <IconButton>
                    <PhoneIcon color="secondary" fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={clsx(classes.info, classesExternal.info)}
                  >
                    (+965) 96065464
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider
              orientation={largeScreen ? "vertical" : "horizontal"}
              flexItem
              style={{ backgroundColor: "#fff" }}
            />
            <Grid
              item
              container
              direction="column"
              style={{ textAlign: "center" }}
            >
              <Grid item style={{ padding: "10px" }}>
                <Grid item>
                  <IconButton>
                    <RoomIcon color="secondary" fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={clsx(classes.info, classesExternal.info)}
                  >
                    Kuwait, East, Khalid Bin Walid Street, Dhow Tower, 14th
                    floor
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        direction="column"
        className={clsx(classes.aboutContainer, classesExternal.aboutContainer)}
      >
        <Grid item container justifyContent="center">
          <Typography
            variant="h6"
            className={clsx(
              classes.contactHeader,
              classesExternal.contactHeader
            )}
          >
            About Us
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={clsx(classes.aboutContent, classesExternal.aboutContent)}
        >
          <Typography
            variant="body1"
            className={clsx(classes.info, classesExternal.info)}
          >
            Nafees International Group was established in 2006 as a limited
            liability company, and aims to provide its services according to
            innovative solutions that serve all the clients and provide the
            necessary protection. Nafaes online service for Rebars is one of the
            services offered by a group of valuables to meet the need of
            customers from consumers and entrepreneurs to provide types of
            reinforcing steel of different sizes at competitive prices with a
            guarantee of quality.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(Landing);
