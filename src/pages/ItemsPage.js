import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import Items from "../components/Items/Items";
import { GlobalContext } from "../context/Provider";
import { getAllCatergoryItems } from "../services/categories";

const ItemsPage = (props) => {
  const [catergoryItems, setCategoryItems] = useState([]);
  const { languageId } = useContext(GlobalContext);
  const [loading, setIsLoading] = useState(false);

  const { location } = props;
  const { categoryId, level } = useMemo(() => {
    const historyItems = location.state?.items;
    const categoryId = historyItems[historyItems?.length - 1].categoryId;
    const level = historyItems[historyItems?.length - 1].level;

    return {
      categoryId,
      level,
    };
  }, [location.state]);

  const getCatergoryItems = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getAllCatergoryItems(
        categoryId,
        level,
        languageId
      );
      setCategoryItems(response);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }, [categoryId, level, languageId]);

  useEffect(() => {
    if (categoryId) {
      getCatergoryItems();
    }
    return () => {
      setCategoryItems(null);
    };
  }, [categoryId, getCatergoryItems]);

  return <Items items={catergoryItems} loading={loading} />;
};

export default ItemsPage;
