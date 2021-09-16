import axiosInstance from "../helpers/axiosInstance";

export const getAllCategories = async (languageId) => {
  try {
    const response = await axiosInstance.post("/categories", {
      id: 0,
      level: 1,
      lng: languageId,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Some Thing Went Wrong!");
    }
  } catch (err) {
    throw err;
  }
};

export const getAllCatergoryItems = async (id, level, lng) => {
  try {
    const response = await axiosInstance.post("/categories", {
      id,
      level,
      lng,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Some Thing Went Wrong!");
    }
  } catch (err) {
    throw err;
  }
};

export const getCatergoryItemDetails = async (lng, categoryId) => {
  try {
    const response = await axiosInstance.get(
      `/categories/${lng}/${categoryId}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Some Thing Went Wrong!");
    }
  } catch (err) {
    throw err;
  }
};
