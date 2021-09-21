import React, { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";

import { SIGNIN } from "../constants/routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useMemo(() => localStorage.getItem("user"), []);

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to={SIGNIN} /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
