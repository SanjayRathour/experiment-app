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
interface Experiment {
  uuid: string;
  answers: any;
  experiment: any;
}
export const postExperimentApi = async (body: Experiment) => {
  try {
    console.log("post body", body);
    const res = await axios.put(
      "https://europe-west1-test-experiment-1f922.cloudfunctions.net/saveAnswer",
      {
        uuid: body.uuid,
        answers: body.answers,
        experiment: body.experiment,
      }
    );
    console.log("res", res);
    if (res.status === 200) {
      return res.data;
    } else {
      throw res.data.message;
    }
  } catch (err) {
    throw err;
  }
};
