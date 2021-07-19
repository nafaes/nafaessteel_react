import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logoIcon from '../../assets/img/Logo.png';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

import clsx from "clsx";
import footerDeskEng from '../../assets/scss/footer.module.scss';
import { footerMobEng } from '../../assets/jss/viewStyles/footer/english';

import { IconButton } from '@material-ui/core';

const Footer = (props) => {


  const englishMobileStyles = footerMobEng();
  let classesExternal = footerDeskEng;
  let classes = englishMobileStyles;

    return (
        <Fragment>
            <footer>
            <Grid container direction="row" className={clsx(classes.footerContainer,classesExternal.footerContainer)}>
                <Grid container>
                    <Grid container item xs={6}>
                        <Grid item>
                        <img alt="footer_image" src={logoIcon} className={clsx(classes.footerlogo,classesExternal.footerlogo)} />
                        </Grid>
                        <Grid item>
                        <p className={clsx(classes.footerTxt,classesExternal.footerTxt)}>  © 2020 nafaesgate.com <br />
                            All copy rights are reserved.</p>
                         </Grid>
                    </Grid>
                    
                    <Grid item xs={6} className={clsx(classes.footerIcons,classesExternal.footerIcons)}>
                        <Grid
                            item
                            component={"a"}
                            href="http://www.facebook.com"
                            rel="noopner noreferrer"
                            target="_blank"
                        >
                            <IconButton>
                                <Facebook color="secondary" fontSize="large" ></Facebook>
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            component={"a"}
                            href="http://www.twitter.com"
                            rel="noopner noreferrer"
                            target="_blank">
                            <IconButton>
                                <Twitter color="secondary" fontSize="large"></Twitter>
                            </IconButton>
                        </Grid>
                        <Grid
                            item
                            component={"a"}
                            href="http://www.instagram.com"
                            rel="noopner noreferrer"
                            target="_blank"
                        >
                            <IconButton>
                                <Instagram color="secondary" fontSize="large"></Instagram>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </footer>
           
        </Fragment>
    );
}

export default Footer;