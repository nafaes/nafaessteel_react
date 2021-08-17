import React, { useCallback, useEffect, useState } from "react";

import Landing from "../components/Landing/Landing.jsx";
import { ADDTOCART, ITEMS } from "../constants/routes.js";
import { getAllCategories } from "../services/categories.js";

const LandingPage = (props) => {
  const [allCategories, setAllCategories] = useState([]);
  const { history } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getAllCategories();
      setAllCategories(response);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    getCategories();

    console.log("After Rendering Landing Parent Component");
  }, [getCategories]);

  console.log("Rendering Landing Parent Component");

  const navigateToItems = useCallback(
    (isParent, categoryId, categoryName) => {
      if (isParent === true) {
        history.push(ITEMS, {
          items: [{ categoryId: categoryId, itemId: "", name: categoryName }],
        });
      } else if (isParent === false) {
        history.push(ADDTOCART, {
          items: [{ categoryId: categoryId, itemId: "", name: categoryName }],
        });
      }
    },
    [history]
  );

  return (
    <Landing navigateToItems={navigateToItems} allCategories={allCategories} />
  );
};

export default LandingPage;
