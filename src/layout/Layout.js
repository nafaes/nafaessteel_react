import React, { useContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import DirectionProvider from "react-with-direction/dist/DirectionProvider";
import { jssPreset, StylesProvider } from "@material-ui/styles";
import TopBar from '../layout/NavBar/ScrollToTop';

import Navbar from "../layout/NavBar/Navbar";
import Footer from "./Footer/Footer";
import ScrollProgress from "./ScrollProgress";
import Routes from "../routes/index";
import { appTheme } from "../assets/theme/theme";
import { GlobalContext } from "../context/Provider";
import { authCheckState } from "../context/actions/authActions";
import { Toolbar } from "@material-ui/core";


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


const Layout = () => {
  const {
    direction,
    dispatchAuthActions,
    userState: { isAuthenticated },
  } = useContext(GlobalContext);
  const theme = createTheme(appTheme(direction));

  useEffect(() => {
    authCheckState(dispatchAuthActions);
  }, [dispatchAuthActions]);

  
  return (
    <DirectionProvider direction={direction}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Navbar/>     
          <ScrollProgress />
          <Toolbar id="back-to-top-anchor" style={{minHeight: "0px"}}/>
          <Routes isAuthenticated={isAuthenticated} />
          <TopBar/>
          <Footer/>       
        </ThemeProvider>
      </StylesProvider>
    </DirectionProvider>
  );
};

export default Layout;
