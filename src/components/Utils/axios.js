import axios from "axios";

export const DOMAIN = "https://api.beehiiv.com/v2";
export const AUDIENCE = "free";
export const TOKEN =
  "hht8fAANcEehz2RUBOa1rLukIBdKwvqMWxAhs0eD4v4tseCS0EpdZwW0xzPVuu9f";
export const PUBLICATION_ID = "pub_edff94ad-4f65-4952-b584-be1201914d76";

const axiosInstance = axios.create({
  baseURL: DOMAIN,
  timeout: 3000,
  params: {
    audience: "free",
    order_by: "publish_date",
    direction: "desc",
  },
  // headers: {
  //   Accept: "application/json",
  //   Authorization: `Bearer ${TOKEN}`,
  // },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem(ACCESSTOKEN)
    config.headers = {
      // ...config.headers,
      ["Authorization"]: TOKEN ? `Bearer ${TOKEN}` : "",
      // ['Authorization']: token ? `Bearer ${token}` : '',
      // ['']: "",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
