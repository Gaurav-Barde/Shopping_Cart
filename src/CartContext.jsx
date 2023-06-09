import { createContext, useState } from "react";
import { getProduct } from "./mocks/Product_Data";

export const CartContext = createContext({
  item: [],
  getProductsQuantity: () => {},
  addProductToCart: () => {},
  removeOneProductFromCart: () => {},
  deleteAllProductsFromCart: () => {},
  getTotalProductQuantity: () => {},
  getTotalCost: () => {},
});

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductsQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addProductToCart = (id) => {
    if (getProductsQuantity(id) === 0) {
      setCartProducts([...cartProducts, { id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const deleteAllProductsFromCart = (id) =>
    setCartProducts(cartProducts.filter((item) => item.id !== id));

  const removeOneProductFromCart = (id) => {
    if (getProductsQuantity(id) === 1) {
      deleteAllProductsFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) => {
          return product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        })
      );
    }
  };

  const getTotalProductQuantity = () => {
    let totalQuantity = 0;
    if (cartProducts.length !== 0) {
      totalQuantity = cartProducts.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
      return totalQuantity;
    }
    return totalQuantity;
  };

  const getTotalCost = () => {
    let totalCost = 0;
    if (getTotalProductQuantity() !== 0) {
      totalCost = Math.round(
        cartProducts
          .map((product) => {
            const price = getProduct(product.id)?.price;
            return product.quantity * price;
          })
          .reduce((acc, current) => acc + current)
      );
    }

    return totalCost;
  };

  const contextValue = {
    items: cartProducts,
    getProductsQuantity,
    addProductToCart,
    removeOneProductFromCart,
    deleteAllProductsFromCart,
    getTotalProductQuantity,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
