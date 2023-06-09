import { useContext } from "react";
import { CartContext } from "../CartContext";

const useCartContext = () => {
  const context = useContext(CartContext);

  return {
    items: context.items,
    getProductsQuantity: context.getProductsQuantity,
    addProductToCart: context.addProductToCart,
    removeOneProductFromCart: context.removeOneProductFromCart,
    deleteAllProductsFromCart: context.deleteAllProductsFromCart,
    getTotalProductQuantity: context.getTotalProductQuantity,
    getTotalCost: context.getTotalCost,
  };
};
export default useCartContext;
