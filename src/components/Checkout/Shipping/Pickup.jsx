import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Divider, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

const Pickup = () => {
    return (
        <Grid
        container
        justifyContent="center"
        spacing={1}
        style={{
          border: "1px solid #0086b3",
          width: "50%",
          margin: "1em auto 0px auto",
          padding: ".2em 0px 0px 0px",
          verticalAlign: "bottom",
          borderRadius: "1em",
          backgroundColor: "#f2f2f2",
        }}
      >
        <Grid item>
          <DateRangeOutlinedIcon style={{ color: "#0086b3" }} />
        </Grid>
        <Grid
          item
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Pickup Date:
        </Grid>
        <Divider style={{ width: "80%", backgroundColor: "#0086b3" }} />
        <Grid
          item
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            color: "#333",
          }}
        >
          12/10/2021
        </Grid>
      </Grid>
    )
}

export default Pickup
