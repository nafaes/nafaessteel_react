import React from "react";
import { ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { appTheme } from '../assets/theme/theme';
// import Routes from "../routes";
import Navbar from '../layout/NavBar/Navbar';
import ScrollProgress from  './ScrollProgress';
import Routes from '../routes/index';

const Layout = () => {

  const theme = createMuiTheme(appTheme());

  return (
    <ThemeProvider theme={theme}>
       <Navbar />
       <ScrollProgress/>
       <Routes/>
       {/* {[...new Array(90)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')} */}
    </ThemeProvider>
    
     
  );
};

export default Layout;
