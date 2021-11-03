import React from "react";
import { Divider, Grid } from "@material-ui/core";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import { useTranslation } from "react-i18next";

const Pickup = ({ deliveryDate }) => {
  const { t } = useTranslation();

  return (
    <Grid container justifyContent="center" spacing={1}
      style={{
        border: "1px solid #0086b3",
        width: "50%",
        margin: "1em auto 0px auto",
        padding: ".2em 0px 0px 0px",
        verticalAlign: "bottom",
        borderRadius: "1em",
        backgroundColor: "#f2f2f2",
      }}>
      <Grid item>
        <DateRangeOutlinedIcon style={{ color: "#0086b3" }} />
      </Grid>
      <Grid item
        style={{
          fontSize: "0.95rem",
          fontWeight: "600",
          color: "#333",
        }}>
        {t("Checkout.PickupDate")}
      </Grid>
      <Divider style={{ width: "80%", backgroundColor: "#0086b3" }} />
      <Grid item
        style={{
          fontSize: "0.95rem",
          fontWeight: "600",
          color: "#333",
        }}>
        {deliveryDate}
      </Grid>
    </Grid>
  );
};

export default Pickup;
