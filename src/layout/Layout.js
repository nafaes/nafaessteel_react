import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { appTheme } from "../assets/theme/theme";
import Navbar from "../layout/NavBar/Navbar";
import ScrollProgress from "./ScrollProgress";
import Routes from "../routes/index";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  const theme = createMuiTheme(appTheme());

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <ScrollProgress />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
