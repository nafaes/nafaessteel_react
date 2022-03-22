import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";

import { withRouter } from "react-router-dom";
import Categories from "./Categories";


const Landing = (props) => {
  const { allCategories,loading } = props;
  const landing = (
    <Fragment>
      <Grid container direction="column">
        <Categories allCategories={allCategories} loading={loading} />     
      </Grid>
    </Fragment>
  );

  return landing;
};

export default withRouter(Landing);
