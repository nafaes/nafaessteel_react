import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const PageNotFound = (props) => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      alignItems="center"
      style={{marginTop: "4rem", backgroundColor: "#fff", padding: "2rem", borderRadius: "12px"}}
    >
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h3">
          {t("PageNotFound.Text1")}
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle1">
          {t("PageNotFound.Text2")}
        </Typography>
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            margin="dense"
            style={{ fontSize: "1rem" }}
            onClick={() => history.push("/")}
          >
            {t("PageNotFound.Button")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PageNotFound;
