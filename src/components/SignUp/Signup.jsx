import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import login from '../../assets/img/Login-illustration.svg';
import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import signupEngDesk from '../../assets/scss/user.module.scss';
import { signupEngMobile } from '../../assets/jss/viewStyles/signup/english';
import clsx from "clsx";


const SignUp = () => {

    const englishMobileStyles = signupEngMobile();
    let classesExternal = signupEngDesk;
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
        <Fragment>
            <Fragment>
            <Grid container direction="row" className={clsx(classes.formContainer, classesExternal.formContainer)}>
                <Grid item container lg={6} justifyContent="center" alignItems="center">
                    <Grid item>
                         <img src={login} alt="bg" className={clsx(classes.loginImage, classesExternal.loginImage)} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" justifyContent="center" alignItems="center" lg={6} className={clsx(classes.signupContainForm, classesExternal.signupContainForm)}>
                   <form>
                     <Grid>
                        <Grid item>
                            <TextField
                                className={clsx(classes.formTextfield, classesExternal.formTextfield)}
                                label="Name*"
                                id="outlined-start-adornment"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PersonIcon fontSize="small" /></InputAdornment>,
                                    classes:{
                                        notchedOutline: classes.notchedOutline
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item style={{marginTop: "1em"}}>
                            <TextField
                                className={clsx(classes.formTextfield, classesExternal.formTextfield)}
                                label="Email*"
                                id="outlined-start-adornment"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><MailIcon fontSize="small" /></InputAdornment>,
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
                                    startAdornment: <InputAdornment position="start"><LockIcon fontSize="small" /></InputAdornment>,
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
                        <Grid item style={{marginTop: "1em"}}>
                            <TextField
                                className={clsx(classes.formTextfield, classesExternal.formTextfield)}
                                label="Confirm Password"
                                id="outlined-start-adornment"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LockIcon fontSize="small"  /></InputAdornment>,
                                    classes:{
                                    notchedOutline: classes.notchedOutline},
                                }}
                            />
                        </Grid>
                        <Grid item style={{marginTop: "1em"}}>
                            <TextField
                                className={clsx(classes.formTextfield, classesExternal.formTextfield)}
                                label="Mobile Number*"
                                id="outlined-start-adornment"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><CallIcon fontSize="small"  /></InputAdornment>,
                                    classes:{
                                        notchedOutline: classes.notchedOutline
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item style={{textAlign:"center",marginTop: "1em"}}>
                            <Button className={clsx(classesExternal.formBtn)}>Sign Up</Button>     
                        </Grid>
                     </Grid>
                   </form>
                </Grid>
            </Grid>
        </Fragment>
        </Fragment>
    )
}

export default SignUp