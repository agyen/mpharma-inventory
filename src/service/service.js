import axios from "axios";

const productsEndpoint = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";

export const getProducts = () => {
  return axios.get(productsEndpoint);
};
