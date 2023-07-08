import { useContext } from "react";
import { CartContext } from "../CartContext";
import Button from "./Button";
import { DOLLAR_PRICE } from "../utils/constants";

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
    <div className="flex flex-col items-center justify-around text-center border-4 border-stone-500 p-1 py-8 my-4">
      <img
        className="object-contain aspect-square h-48 w-96"
        src={product?.images[1] ? product.images[1] : product?.images[0]}
      />
      <h1 className="text-md font-semibold my-2">{product.title}</h1>
      <h3> ₹{Math.round(product.price * DOLLAR_PRICE)}</h3>
      {quantity ? (
        <div className="grid grid-flow-col grid-cols-2 gap-1 sm:gap-2 xs:gap-3 items-center">
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
            title="↻"
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
