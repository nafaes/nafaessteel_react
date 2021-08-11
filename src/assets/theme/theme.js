

const arcGrey = "#ffffff";
const arcBlue = "#0086b3";

export const appTheme = () => {
    return {
       palette: {
        common: {
            grey: `${arcGrey}`,
            blue: `${arcBlue}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcGrey}`,
        } 
    },
      typography: {
        tab: {
            textTransform: "none",
          fontWeight: 100,
          fontSize: "1rem", 
          color: "white",       
       },
      },
    };
  };




