import { useContext } from "react";
import { CartContext } from "../CartContext";
import Button from "./Button";

function ProductCard({ product }) {
  const {
    items,
    getProductsQuantity,
    addProductToCart,
    removeOneProductFromCart,
    deleteAllProductsFromCart,
  } = useContext(CartContext);

  const quantity = getProductsQuantity(product.id);

  return (
    <div className="text-center border-4 border-stone-500 p-4 py-8 my-4">
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
      <h3> ₹{product.price}</h3>
      {quantity ? (
        <div className="grid grid-flow-col grid-cols-2 gap-1 sm:gap-6 xs:gap-3 items-center">
          <>
            <span className="font-semibold text-lg col-span-2">
              In Cart: {getProductsQuantity(product.id)}
            </span>
          </>
          <>
            <Button
              title="+"
              id={product.id}
              onClickHandler={() => addProductToCart(product.id)}
            />
            <Button
              title="-"
              id={product.id}
              onClickHandler={removeOneProductFromCart}
              variant="danger"
            />
          </>
          <Button
            title="Reset"
            id={product.id}
            onClickHandler={deleteAllProductsFromCart}
            variant="danger"
          />
        </div>
      ) : (
        <Button
          title="Add to Cart"
          id={product.id}
          onClickHandler={() => addProductToCart(product.id)}
        />
      )}
    </div>
  );
}

export default ProductCard;
