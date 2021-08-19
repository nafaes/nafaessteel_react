import React, { useCallback, useEffect, useState } from "react";

import Landing from "../components/Landing/Landing.jsx";
import { ADDTOCART, ITEMS } from "../constants/routes.js";
import { getAllCategories } from "../services/categories.js";

const LandingPage = (props) => {
  const [allCategories, setAllCategories] = useState([]);
  const { history } = props;
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const getCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getAllCategories();
      setAllCategories(response);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      alert(err);
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const navigateToItems = useCallback(
    (isParent, categoryId, categoryName, nextLevel) => {
      if (isParent === true) {
        history.push(ITEMS, {
          items: [{ 
            categoryId: categoryId, 
            itemId: "", 
            name: categoryName, 
            level: nextLevel }],
        });
      } else if (isParent === false) {
        history.push(ADDTOCART, {
          items: [{ 
            categoryId: categoryId, 
            itemId: "", 
            name: categoryName, 
            level: nextLevel }],
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
