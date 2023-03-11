import url from "../environment/url";

export default {
  baseURL: url.api,
  timeout: 240000,
  headers: {
    userId: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).id
      : "",
    token: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).token.access_token
      : "",
  },
};
