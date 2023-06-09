import { useContext } from "react";
import { CartContext } from "../CartContext";
import Button from "./Button";

function ProductCard({ product }) {
  const {
    items,
    getProductsQuantity,
    addProductToCart,
    removeOneProductFromCart,
  } = useContext(CartContext);
  return (
    <div className="md:w-1/4 sm:w-1/2 text-center border-2 border-gray-750  p-4 py-8 my-4">
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <h3>${product.price}</h3>
      <Button
        title="Add to Cart"
        id={product.id}
        onClickHandler={() => addProductToCart(product.id)}
      />
      <p className="mt-3">{getProductsQuantity(product.id)}</p>

      {getProductsQuantity(product.id) !== 0 ? (
        <Button
          title="Remove"
          id={product.id}
          onClickHandler={removeOneProductFromCart}
          variant="danger"
        />
      ) : null}
    </div>
  );
}

export default ProductCard;
