import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import Items from "../components/Items/Items";
import { GlobalContext } from "../context/Provider";
import useHistoryNavigation from "../hooks/useHistoryNavigation";
import { getAllCatergoryItems } from "../services/categories";

const ItemsPage = (props) => {
  const [catergoryItems, setCategoryItems] = useState([]);
  const navigate = useHistoryNavigation();
  const { languageId } = useContext(GlobalContext);

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
    const response = await getAllCatergoryItems(categoryId, level, languageId);
    setCategoryItems(response);
  }, [categoryId, level, languageId]);

  useEffect(() => {
    if (categoryId) {
      getCatergoryItems();
    }
    return () => {
      setCategoryItems(null);
    };
  }, [categoryId, getCatergoryItems]);

  return <Items items={catergoryItems} navigate={navigate} />;
};

export default ItemsPage;
