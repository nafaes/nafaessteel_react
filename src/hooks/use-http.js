import { useState } from "react";
import { axiosInstance } from "../helpers/axiosInstance";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const { method, url } = requestConfig;
      const requestData = method === "post" ? requestConfig.data : null;

      const response = await axiosInstance.post(url, requestData);
      if (response.status === 200) {
        setIsLoading(false);
        applyData(response.data);
      } else {
        throw new Error("Some Thing Went Wrong!");
      }

      return response;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};
