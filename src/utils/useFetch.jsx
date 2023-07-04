import { useState, useEffect } from "react";
import { PRODUCTS_API_KEY } from "./constants";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    const data = await fetch(PRODUCTS_API_KEY);
    const json = await data.json();
    setProducts(json.products);
  };

  const getProduct = (id) => {
    return products?.find((product) => product.id === id);
  };

  return { products, getProduct };
};

export default useFetch;
