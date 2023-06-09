import { Fragment } from "react";
import useCartContext from "../utils/useCartContex";
import { getProduct } from "../mocks/Product_Data";
import Button from "./Button";

const ProductDetails = () => {
  const { items, deleteAllProductsFromCart } = useCartContext();

  return (
    <Fragment>
      {items.map((product) => (
        <div key={product.id} className="my-4 border-b-2 border-gray-400">
          <h3 className="text-2xl my-2">{getProduct(product.id)?.name}</h3>
          <h3>{product.quantity} Total</h3>
          <h3>${getProduct(product.id)?.price}</h3>
          <Button
            title={"Remove"}
            onClickHandler={deleteAllProductsFromCart}
            id={product.id}
            variant={"danger"}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default ProductDetails;
