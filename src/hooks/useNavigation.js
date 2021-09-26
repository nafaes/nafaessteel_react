import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { ADDTOCART } from "../constants/routes";

const useNavigation = () => {
  const history = useHistory();

  const dynamicNavigation = useCallback(
    (historyItems) => {
      history.push(ADDTOCART, {
        items: historyItems,
      });
    },
    [history]
  );

  return {
    dynamicNavigation,
  };
};

export default useNavigation;
