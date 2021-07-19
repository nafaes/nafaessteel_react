import React,{ Fragment, useMemo  } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Iron from '../../assets/img/Iron.png';
import Cement from '../../assets/img/cement.jpg';
import Wood from '../../assets/img/wood.jpg';
import Brick from '../../assets/img/brick.jpg';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/PhoneInTalkOutlined';


import { Divider } from '@material-ui/core';

import clsx from "clsx";
import landingEngDesk from "../../assets/scss/landing.module.scss";
import { landingMobEng } from '../../assets/jss/viewStyles/landing/english';

// import { useLocation } from 'react-router';




const Landing = (props) =>{
    // const {state} = useLocation()
    // const contactUsRef = useRef(null)
    // useEffect(() => {
    //     // console.log(props.location.state)
    //     if(props.location?.state?.["contactUs"]) {
    //         contactUsRef.current.scrollIntoView({
    //             behavior: "smooth"
    //         })
    //     }
    // })
   
    const englishMobileStyles = landingMobEng();
    let classesExternal = landingEngDesk;
    let classes = englishMobileStyles;

    const categories = useMemo(() => {
        return [{
            image: Iron,
            title: "Iron",
            alt: "Iron",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        },
        {
            image: Cement,
            title: "Cement",
            alt: "Cement",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        },
        {
            image: Wood,
            title: "Wood",
            alt: "Wood",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        },
        {
            image: Brick,
            title: "Brick",
            alt: "Brick",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        }
        ]
    }, [])
    

    return(
        <Fragment>
            <Grid container direction="column">
                <Grid item container direction="row" style={{marginTop: "3em"}} justify="center" spacing={2}>
                    {categories.map((category, index) => (
                        <Grid item key={index}>
                        <Card raised elevation={12}
                            className={clsx(classes.root,classesExternal.animateCard)}
                        >
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="250"
                                image={category.image}
                                title={category.title}
                            />
                            <Divider/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {category.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {category.description}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grid>
                    ))} 
                </Grid>

                 <Grid /*ref={props.contactUsRef}*/ container direction="column" style={{ marginTop:"4em"}} className={classes.contactContainer}>
                     <Grid item container justify="center">
                     <Typography variant="h6" className={clsx(classes.contactHeader,classesExternal.contactHeader)}>GET IN TOUCH</Typography>
                     </Grid>

                    <Grid item container direction="row" justify="center" alignItems="center" className={clsx(classes.contactContent,classesExternal.contactContent)}>
                    <Grid item container direction="column" style={{textAlign: "center"}}>
                        <Grid item style={{padding:"30px"}}>  
                        <Grid item>
                            <IconButton>
                                <MailIcon color="secondary"  fontSize="large"/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                        <Typography variant="h6" gutterBottom className={clsx(classes.info,classesExternal.info)}>info@nafaes.com</Typography>
                        </Grid>  
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{textAlign: "center" , borderLeft: "1px solid rgba(255,255,255,0.9)",borderRight: "1px solid rgba(255,255,255,0.9)" }}>
                       <Grid item style={{padding:"30px"}}>
                        <Grid item>
                                <IconButton>
                                    <PhoneIcon color="secondary" fontSize="large"/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                            <Typography variant="h6" gutterBottom className={clsx(classes.info,classesExternal.info)}>(+965) 96065464</Typography>
                        </Grid>
                       </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{textAlign: "center"}}>
                       <Grid item style={{padding:"30px"}}>
                         <Grid item>
                                <IconButton >
                                    <RoomIcon color="secondary" fontSize="large"/>
                                </IconButton>
                            </Grid>
                            <Grid item>
                            <Typography variant="h6" gutterBottom className={clsx(classes.info,classesExternal.info)}>Kuwait, East, Khalid Bin Walid Street, Dhow Tower, 14th floor</Typography>
                          </Grid>
                       </Grid>
                    </Grid>
                    </Grid>
                 </Grid>
                 <Grid container direction="column" style={{ marginTop:"4em"}} className={clsx(classes.contactContainer,classesExternal.contactContainer)}>
                     <Grid item container justify="center">
                        <Typography variant="h6" className={clsx(classes.contactHeader,classesExternal.contactHeader)}>About Us</Typography>
                     </Grid>
                     <Grid item container direction="row" justify="center" alignItems="center" className={clsx(classes.aboutContent,classesExternal.aboutContent)}>
                        <Typography variant="body1" className={clsx(classes.info,classesExternal.info)} paragraph>
                        Nafees International Group was established in 2006 as a limited liability company, 
                        and aims to provide its services according to innovative solutions that serve all the 
                        clients and provide the necessary protection.Nafaes online service for Rebars is one of the services offered by a group 
                        of valuables to meet the need of customers from consumers and entrepreneurs to provide types of reinforcing steel of 
                        different sizes at competitive prices with a guarantee of quality.
                        </Typography>
                    </Grid>
                 </Grid>
            </Grid>
        </Fragment>
    );
}

export default Landing;