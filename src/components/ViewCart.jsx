import React, { useState } from "react";
import useCartContext from "../utils/useCartContex";
import { toast } from "react-hot-toast";
import closeBtn from "../assets/icons/close.png";
import ProductDetails from "./ProductDetails";
import Button from "./Button";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const [error, setError] = useState(null);
  const { items, totalQuantity, totalCost } = useCartContext();

  const purchaseItems = async () => {
    toast("Redirecting to Payments Page");
    try {
      const data = await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });
      const json = await data.json();
      if (json.url) {
        window.location.assign(json.url);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  function throttlePurchaseItems(fn, delay) {
    let executed = true;
    return function () {
      if (executed) {
        fn();
        executed = false;
        setTimeout(() => {
          executed = true;
        }, delay);
      }
    };
  }

  const betterPurchaseItems = throttlePurchaseItems(purchaseItems, 3000);

  if (error) {
    toast(error);
    setError(null);
  }

  return (
    <div className="text-gray-900 p-4 bg-slate-50 relative">
      <Link to="/">
        <button className="absolute right-4">
          <img src={closeBtn} className="w-6" />
        </button>
      </Link>
      {totalQuantity ? (
        <>
          <h1 className="text-2xl pb-2 border-b border-gray-600 ">
            Shopping Cart({totalQuantity} items)
          </h1>
          <ProductDetails />
          <h3 className="text-2xl font-semibold">Total: ₹{totalCost}</h3>
          <Button
            title={"Purchase Items"}
            onClickHandler={betterPurchaseItems}
            background={"blue"}
          />
        </>
      ) : (
        <h1 className="text-2xl text-center">No items in the cart!</h1>
      )}
    </div>
  );
};

export default ViewCart;
