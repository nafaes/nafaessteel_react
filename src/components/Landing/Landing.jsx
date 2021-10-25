import React, { Fragment, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import MailIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/PhoneInTalkOutlined";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import { Divider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Categories from "./Categories";
import landingEngDesk from "../../assets/scss/landing.module.scss";
import { landingMobEng } from "../../assets/jss/viewStyles/landing/english";
import LoaderImg from "../LoaderImg";

const Landing = (props) => {
  const {
    allCategories,
    loading,
    location: { state },
    history,
  } = props;

  const englishMobileStyles = landingMobEng();
  let classesExternal = landingEngDesk;
  let classes = englishMobileStyles;
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const contactUs = useRef(null);

  useEffect(() => {
    let timeOut;
    if (state?.message === "from contactus") {
      contactUs.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
      timeOut = setTimeout(() => {
        history.push("/");
      }, 1000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  });

  const landing = (
    <Fragment>
      <Grid container direction="column">
        <Categories allCategories={allCategories} loading={loading} />

        <div ref={contactUs}>
          <Grid container direction="column" style={{ marginTop: "4em" }} className={classes.contactContainer}>
            <Grid item container justifyContent="center">
              <Typography variant="h6"
                className={clsx(
                  classes.contactHeader,
                  classesExternal.contactHeader
                )}>
                GET IN TOUCH
              </Typography>
            </Grid>
            <Grid item container direction={largeScreen ? "row" : "column"} justifyContent="center" alignItems="center"
              className={clsx(
                classes.contactContent,
                classesExternal.contactContent)}>
              <Grid item container direction="column" style={{ textAlign: "center" }}>
                <Grid item style={{ padding: "10px" }}>
                  <Grid item>
                    <IconButton>
                      <MailIcon color="secondary" fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" gutterBottom
                      className={clsx(classes.info, classesExternal.info)}>
                      info@nafaes.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider orientation={largeScreen ? "vertical" : "horizontal"} flexItem
                style={{ backgroundColor: "#fff" }}
              />
              <Grid item container direction="column"
                style={{
                  textAlign: "center",
                }}>
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
                      className={clsx(classes.info, classesExternal.info)}>
                      (+965) 96065464
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Divider
                orientation={largeScreen ? "vertical" : "horizontal"}
                flexItem
                style={{ backgroundColor: "#fff" }} />
              <Grid item container direction="column" style={{ textAlign: "center" }}>
                <Grid item style={{ padding: "10px" }}>
                  <Grid item>
                    <IconButton>
                      <RoomIcon color="secondary" fontSize="large" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" gutterBottom
                      className={clsx(classes.info, classesExternal.info)}>
                      Kuwait, East, Khalid Bin Walid Street, Dhow Tower, 14th
                      floor
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <Grid container direction="column" className={clsx(classes.aboutContainer, classesExternal.aboutContainer)}>
          <Grid item container justifyContent="center">
            <Typography variant="h6"
              className={clsx(
                classes.contactHeader,
                classesExternal.contactHeader
              )}>
              About Us
            </Typography>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center"
            className={clsx(classes.aboutContent, classesExternal.aboutContent)}>
            <Typography
              variant="body1"
              className={clsx(classes.info, classesExternal.info)}>
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
    </Fragment>
  )

  return (
    loading === true ?  <LoaderImg /> : landing 
  );
};

export default withRouter(Landing);
