import axios from "axios";
import axiosRetry from "axios-retry";

const TIMEOUT = 10000;
const RETRIES = 3;

const globalConfig = {
  timeout: TIMEOUT,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    Accept: "application/json",
  },
};

const API_INSTANCE = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  ...globalConfig,
});

axiosRetry(API_INSTANCE, {
  retries: RETRIES,
  retryDelay: axiosRetry.exponentialDelay,
});

export { API_INSTANCE };
