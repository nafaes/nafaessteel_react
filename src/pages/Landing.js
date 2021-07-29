import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Landing from "../components/Landing/Landing.jsx";
import { ADDTOCART, ITEMS } from "../constants/routes.js";

const LandingPage = () => {
  let history = useHistory();

  const navigateToItems = useCallback(
    (stage, categoryId) => {
      if (stage === 3) {
        history.push(ITEMS, {
          categoryId: categoryId,
        });
      } else if (stage === 2) {
        history.push(ADDTOCART, {
          categoryId: categoryId,
        });
      }
    },
    [history]
  );

  return <Landing navigateToItems={navigateToItems} />;
};

export default LandingPage;
