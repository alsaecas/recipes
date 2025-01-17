import axios from "../utils/config/axios.config";

export const getAllIngredients = (types) => {
  const options = {
    params: {
      types: types,
    },
  };
  return axios.get("/ingredients", options);
};
