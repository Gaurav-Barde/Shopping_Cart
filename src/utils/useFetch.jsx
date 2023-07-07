import { useState, useEffect } from "react";
import { PRODUCTS_API_KEY, stripeProducts } from "./constants";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const data = await fetch(PRODUCTS_API_KEY);
    const json = await data.json();
    // Replacing api ids with stripe ids
    const stripeFormattedProducts = json?.products?.map((item) => {
      const id = stripeProducts.find(
        (product) => product.title === item.title
      )?.id;
      return { ...item, id: id };
    });
    setProducts(stripeFormattedProducts);
  };

  const getProduct = (id) => {
    return products?.find((product) => product.id === id);
  };

  return { products, getProduct };
};

export default useFetch;
