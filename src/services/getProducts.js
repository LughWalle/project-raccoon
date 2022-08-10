const axios = require("axios");

const getAllProducts = async () => {
  return await axios.get("https://dummyjson.com/products").then((response) => {
    console.log(response.data);
    return response.data.products;
  });
};
export default getAllProducts;
