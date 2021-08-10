import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import login from '../../assets/img/Login-illustration.svg';
import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import signinEngDesk from '../../assets/scss/user.module.scss';
import { signinEngMobile } from '../../assets/jss/viewStyles/signin/english';
import clsx from "clsx";
import { SIGNUP } from '../../constants/routes';
import { Link } from 'react-router-dom';

const SignIn = () => {
        const englishMobileStyles = signinEngMobile();
        let classesExternal = signinEngDesk;
        let classes = englishMobileStyles;

        const [values, setValues] = React.useState({
            password:'',
            showPassword: false,
        });
        const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
        };
        const handleClickShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
        };
        const handleMouseDownPassword = (event) => {
            event.preventDefault();
        };
    return (
    
            <Grid container direction="row" className={clsx(classes.formContainer, classesExternal.formContainer)}>
                <Grid item container lg={6} justify="center" alignItems="center">
                    <Grid item>
                         <img src={login} alt="bg" className={clsx(classes.loginImage, classesExternal.loginImage)} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" justify="center" alignItems="center" lg={6} className={clsx(classes.loginContainForm, classesExternal.loginContainForm)}>
                   <form>
                     <Grid>
                        <Grid item>
                            <TextField
                                className={clsx(classes.formTextfield, classesExternal.formTextfield)}
                                label="Email*"
                                id="outlined-start-adornment"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><MailIcon /></InputAdornment>,
                                    classes:{
                                        notchedOutline: classes.notchedOutline
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item style={{marginTop: "1em"}}>
                            <TextField
                                className={clsx(classes.formTextfield, classesExternal.formTextfield)}
                                label="Password"
                                id="outlined-start-adornment"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                                    endAdornment: <InputAdornment position="end">
                                    <IconButton 
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                    {values.showPassword ? <Visibility color="primary" /> : <VisibilityOff />}
                                </IconButton></InputAdornment>,
                                classes:{
                                    notchedOutline: classes.notchedOutline},
                                }}
                            />
                        </Grid>
                        <Grid item style={{textAlign:"right"}}>
                            <Button style={{textTransform:"none",marginBottom:"0.5em"}}>Forgot Password ?</Button>     
                        </Grid>
                        <Grid item style={{textAlign:"center"}}>
                            <Button className={classesExternal.formBtn}>Sign In</Button>     
                        </Grid>
                        <Grid item style={{textAlign:"center"}}>
                            <label>Don't have account?</label>
                            <Button style={{textTransform:"none"}} component={Link} to={SIGNUP}>Sign Up</Button>
                        </Grid>
                     </Grid>
                   </form>
                </Grid>
            </Grid>        
      //   </Grid>
      // </Grid>
   
  );
};

export default SignIn;
