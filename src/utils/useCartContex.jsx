import { useContext } from "react";
import { CartContext } from "../CartContext";

const useCartContext = () => {
  const {
    items,
    getProductsQuantity,
    addProductToCart,
    removeOneProductFromCart,
    deleteAllProductsFromCart,
    getTotalProductQuantity,
    getTotalCost,
  } = useContext(CartContext);

  const totalQuantity = getTotalProductQuantity();
  const totalCost = getTotalCost();

  return {
    items,
    getProductsQuantity,
    addProductToCart,
    removeOneProductFromCart,
    deleteAllProductsFromCart,
    totalQuantity,
    totalCost,
  };
};
export default useCartContext;
