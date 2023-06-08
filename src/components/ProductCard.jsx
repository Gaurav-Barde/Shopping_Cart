import { useContext } from "react";
import { CartContext } from "../CartContext";

function ProductCard({ product }) {
  const {
    items,
    getProductsQuantity,
    addProductToCart,
    removeOneProductFromCart,
    deleteAllProductsFromCart,
  } = useContext(CartContext);

  return (
    <div className="w-1/4 text-center border-2 border-gray-750  p-4 py-8">
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <h3>${product.price}</h3>
      <button
        className="text-white bg-blue-500 p-2 mt-6 rounded-md"
        onClick={() => addProductToCart(product.id)}
      >
        Add to Cart
      </button>
      <p className="mt-3">{getProductsQuantity(product.id)}</p>
      <button
        className="text-white bg-blue-500 p-2 mt-3 rounded-md"
        onClick={() => removeOneProductFromCart(product.id)}
      >
        Remove
      </button>
      <button
        className="text-white bg-blue-500 p-2 mt-6 rounded-md"
        onClick={() => deleteAllProductsFromCart(product.id)}
      >
        Delete All
      </button>
    </div>
  );
}

export default ProductCard;
