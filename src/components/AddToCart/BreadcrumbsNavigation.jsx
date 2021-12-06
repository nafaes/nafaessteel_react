import React from "react";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoaderImg from "../LoaderImg";

const BreadcrumbsNavigation = ({
  historyItems,
  breadcrumbNavigation,
  loading,
}) => {
  const { t } = useTranslation();

  return loading === true ? (
    <LoaderImg />
  ) : (
    <Grid
      item
      container
      direction="row"
      justifyContent="space-between"
      style={{
        color: "#fff",
        background: "linear-gradient(45deg,  #3397b8 40%,#2b86a6 90%)",
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
                  <Link
                    color="inherit"
                    key={item.categoryId}
                    style={{ fontSize: "1rem", cursor: "pointer" }}
                    variant="h6"
                  >
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <Link
                    color="inherit"
                    key={item.categoryId}
                    onClick={breadcrumbNavigation.bind(null, item.categoryId)}
                    style={{ cursor: "pointer" }}
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
