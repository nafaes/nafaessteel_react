import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BreadcrumbsNavigation = ({ historyItems, breadcrumbNavigation }) => {
  const { t } = useTranslation();

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="space-between"
      style={{
        color: "#fff",
        background: "rgba(0, 134, 179, 0.8)",
        padding: ".6em",
        borderRadius: "1em",
        width: "80%",
        margin: "0px auto",
      }}
    >
      <Grid item style={{ color: "#fff" }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          style={{ color: "#fff" }}
        >
          <Link color="inherit" component={RouterLink} to="/">
            {t("AddToCart.AllCategories")}
          </Link>

          {historyItems &&
            historyItems.map((item, index) => {
              const last = index === historyItems.length - 1;
              if (last) {
                return (
                  <Typography key={item.categoryId} variant="h6">
                    {item.name}
                  </Typography>
                );
              } else {
                return (
                  <Link
                    color="inherit"
                    key={item.categoryId}
                    onClick={breadcrumbNavigation.bind(
                      null,
                      item.categoryId,
                      item.name,
                      item.level
                    )}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default BreadcrumbsNavigation;
