import React from "react";
import { Radio } from "@material-ui/core";
import clsx from "clsx";

import checkoutStyles from "../../assets/jss/viewStyles/checkout/checkout";

const RadioButton = (props) => {
  const classes = checkoutStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

export default RadioButton;
