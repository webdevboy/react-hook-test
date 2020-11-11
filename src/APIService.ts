import Axios from "axios";

const DEV_SVR = "https://dev.dummy-svr.com";

const METRIC_ENDPOINT = "/metrics";

export function genQuery(
  timeRange: string,
  componentName: string,
  seed: number
) {
  return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${
    seed % 7 == 0 ? "true" : "false"
  }`;
}

export const api = Axios.create({
  baseURL: DEV_SVR,
});

export const getData = (query: any) => {
  return api.post(METRIC_ENDPOINT, query);
};
