import React,{ Fragment, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Iron from '../../assets/img/Iron.png';
import Cement from '../../assets/img/cement.jpg';
import Wood from '../../assets/img/wood.jpg';
import Brick from '../../assets/img/brick.jpg';
import { Divider } from '@material-ui/core';

import clsx from "clsx";
import landingEngDesk from "../../assets/scss/landing.module.scss";


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 300,
        transition: "transform 0.15s ease-in-out",
        borderRadius: "1.5em",
      },
   
}));

const Landing = (props) =>{

    const classes = useStyles();
    let classesExternal = landingEngDesk;
  
  const theme = useTheme();

    const categories = useMemo(() => {
        return [{
            image: Iron,
            title: "Irons",
            alt: "Iron",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        },
        {
            image: Cement,
            title: "Cements",
            alt: "Cement",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        },
        {
            image: Wood,
            title: "Woods",
            alt: "Wood",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        },
        {
            image: Brick,
            title: "Bricks",
            alt: "Brick",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",    
        }
        ]
    }, [])
    

    return(
        <Fragment>
            <Grid container direction="column">
              <Grid item>
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
              </Grid>
            </Grid>
        </Fragment>
    );
}

export default Landing;