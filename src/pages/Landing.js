import React, { useCallback, useEffect, useState } from "react";

import Landing from "../components/Landing/Landing.jsx";
import useHistoryNavigation from "../hooks/useHistoryNavigation.js";
import { getAllCategories } from "../services/categories.js";

const LandingPage = (props) => {
  const [allCategories, setAllCategories] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const navigateToItems = useHistoryNavigation();

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
  }, [getCategories]);

  return (
    <Landing navigateToItems={navigateToItems} allCategories={allCategories} />
  );
};

export default LandingPage;
