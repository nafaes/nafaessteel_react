import React, { useCallback } from "react";

import Landing from "../components/Landing/Landing.jsx";
import { ADDTOCART, ITEMS } from "../constants/routes.js";

const LandingPage = (props) => {
  const { history } = props;

  const navigateToItems = useCallback(
    (stage, categoryId, categoryName) => {
      if (stage === 3) {
        history.push(ITEMS, {
          items: [{ categoryId: categoryId, itemId: "", name: categoryName }],
        });
      } else if (stage === 2) {
        history.push(ADDTOCART, {
          items: [{ categoryId: categoryId, itemId: "", name: categoryName }],
        });
      }
    },
    [history]
  );

  return <Landing navigateToItems={navigateToItems} />;
};

export default LandingPage;
