import axios from "axios";
import { axiosConf } from "@/config";
import { isObject } from "lodash";

const httpApi = axios.create(axiosConf);

const requestHandler = (r) => {
  return r;
};

const responseHandler = (r) => {
  return r;
};

const errorHandler = (e) => {
  if (isObject(e)) {
    if (e.response.status === 401) {
      localStorage.removeItem("user");
      window.location.href = process.env.VUE_APP_APP_URL;
    }
  }
  return Promise.reject(e);
};

httpApi.interceptors.request.use(
  (r) => requestHandler(r),
  (e) => errorHandler(e)
);

httpApi.interceptors.response.use(
  (r) => responseHandler(r),
  (e) => errorHandler(e)
);

export default httpApi;
