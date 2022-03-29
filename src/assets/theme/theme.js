const arcGrey = "#ffffff";
const arcBlue = "#0086b3";

export const appTheme = (direction) => {
  return {
    direction: direction,
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
      },
      action: {
        disabledBackground: "lightGray",
        disabled: "white",
      },
    },
    typography: {
      tab: {
        textTransform: "none",
        fontWeight: 100,
        fontSize: "1rem",
        color: "white",
        opacity: 1,
      },
    },
  };
};
