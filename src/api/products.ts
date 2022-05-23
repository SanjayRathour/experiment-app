import axios from "axios";

export const getProductsApi = async () => {
  try {
    const res = await axios.get("");
    return res.data;
  } catch (err) {
    throw err;
  }
};
