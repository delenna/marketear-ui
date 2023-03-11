const appId = window.location.pathname.split("/")[1];
// const getEnv = (key) => process.env[key];

export default {
  api: `${process.env.VUE_APP_API_URL}/api/${appId}`,
};
