import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import DirectionProvider from "react-with-direction/dist/DirectionProvider";
import { jssPreset, StylesProvider } from "@material-ui/styles";

import Navbar from "../layout/NavBar/Navbar";
import Footer from "./Footer/Footer";
import ScrollProgress from "./ScrollProgress";
import Routes from "../routes/index";
import { appTheme } from "../assets/theme/theme";
import { GlobalContext } from "../context/Provider";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const Layout = () => {
  const { direction } = useContext(GlobalContext);
  const theme = createTheme(appTheme(direction));

  return (
    <DirectionProvider direction={direction}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <ScrollProgress />
          <Routes />
          <Footer />
        </ThemeProvider>
      </StylesProvider>
    </DirectionProvider>
  );
};

export default Layout;
