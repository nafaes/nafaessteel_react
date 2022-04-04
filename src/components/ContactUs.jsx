import React, { Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import MailIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/PhoneInTalkOutlined";
// import { landingMobEng } from "../assets/jss/viewStyles/landing/english";

import { useTranslation } from "react-i18next";

const ContactUs = (props) => {
 
    const { t } = useTranslation();

     const ContactUs = (
        <Fragment>
            <Grid container  justifyContent="center">
                <Grid item container lg={10} md={10} sm={10} xs={10} justifyContent="center" style={{marginTop:"5em"}}>
                    <Grid item lg={4} md={4} sm={4} xs={4} style={{backgroundColor: "rgba(0, 134, 179,0.8)",borderRadius: "0.5em"}}>
                        <Grid item style={{padding:"0.5em",margin:"0.5em 2em",textAlign:"center",borderBottom:"2px dotted #cccccc"}}>
                            <Typography variant="h6" color="secondary">Contact Us</Typography>
                        </Grid>
                        <Grid item container direction="row">
                            <IconButton>
                                <MailIcon color="secondary" fontSize="small" />
                            </IconButton>
                            <Typography variant="body1" gutterBottom color="secondary">
                                info@nafaes.com
                            </Typography>
                        </Grid>
                        <Grid item container direction="row">
                            <IconButton>
                                <PhoneIcon color="secondary" fontSize="small" />
                            </IconButton>
                            <Typography variant="body1" gutterBottom color="secondary">
                                (+965) 96065464
                            </Typography>
                        </Grid>
                        <Grid item container direction="row" style={{flexWrap: "nowrap"}}>
                            <IconButton>
                                <RoomIcon color="secondary" fontSize="small" />
                            </IconButton>
                            <Typography variant="body1" gutterBottom color="secondary" style={{wordWrap:"break-word"}}>
                               {t("Landing.Address")}                                                        
                            </Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={7} style={{backgroundColor:"rgba(0, 134, 179,0.8)",marginLeft:"0.5em",borderRadius: "0.5em"}}>
                         <Grid item style={{padding:"0.5em",margin:"0.5em 2em",textAlign:"center",borderBottom:"2px dotted #cccccc"}}>
                            <Typography variant="h6" color="secondary">About Us</Typography>
                        </Grid>
                        <Grid item>
                        <Typography
                            variant="body1" color="secondary"
                            style={{padding:"1em"}}
                        >
                            Nafaes International Group was established in 2006 as a limited
                            liability company, and aims to provide its services according to
                            innovative solutions that serve all the clients and provide the
                            necessary protection. Nafaes online service for Rebars is one of
                            the services offered by a group of valuables to meet the need of
                            customers from consumers and entrepreneurs to provide types of
                            reinforcing steel of different sizes at competitive prices with a
                            guarantee of quality.
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
   
        </Fragment>
    );

    return ContactUs;
};

export default ContactUs;