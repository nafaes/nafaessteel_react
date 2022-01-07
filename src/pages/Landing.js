import React, { useCallback, useContext, useEffect, useState } from "react";

import Landing from "../components/Landing/Landing.jsx";
import { GlobalContext } from "../context/Provider.js";
import { getAllCategories } from "../services/categories.js";

const LandingPage = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { languageId } = useContext(GlobalContext);

  const getCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getAllCategories(languageId);
      setAllCategories(response);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }, [languageId]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return <Landing allCategories={allCategories} loading={loading} />;
};

export default LandingPage;
