import React from "react";
import { Divider, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import checkoutStyles from "../../../assets/jss/viewStyles/checkout/checkout";

const Delivery = () => {
  const classes = checkoutStyles();
  const [area, setArea] = React.useState("");

  const handleChange = (event) => {
    setArea(event.target.value);
  };
  
  return (
    <Grid container justifyContent="center">
      <div elevation={12} style={{ width: "96%", margin: "0em auto" }}>
        <Grid item container>
          <Grid item sm={6}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Area
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={area}
                onChange={handleChange}
                label="Area"
                MenuProps={{ disableScrollLock: true }}
              >
                <MenuItem value="">
                  <em>Choose Area</em>
                </MenuItem>
                <MenuItem value="1">Kukutpally</MenuItem>
                <MenuItem value="2">Miyapur</MenuItem>
                <MenuItem value="3">KPHB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-read-only-input"
              label="Shipping Charges"
              defaultValue="1"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item sm={6}>
            <TextField
              id="outlined-helperText"
              label="Block"
              variant="outlined"
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-helperText"
              label="Street/Avenue"
              variant="outlined"
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item sm={6}>
            <TextField
              id="outlined-helperText"
              label="Plot"
              variant="outlined"
              style={{ width: "90%", margin: "1em 5% 0px 5%" }}
            />
          </Grid>
        </Grid>
        <Grid item sm={12}>
          <Grid
            container
            justifyContent="center"
            spacing={1}
            style={{
              border: "1px solid #0086b3",
              width: "50%",
              margin: "1.5em auto 0em auto",
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
              Delivery Date:
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
        </Grid>
      </div>
    </Grid>
  );
};

export default Delivery;
