import axios from "axios";

export const getProductsApi = async () => {
  try {
    const res = await axios.get(
      "https://europe-west1-test-experiment-1f922.cloudfunctions.net/getExperiment"
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};
