import ProductDetails from "./ProductDetails";
import closeBtn from "../assets/icons/close.png";
import Button from "./Button";
import useCartContext from "../utils/useCartContex";
import { useState } from "react";
import toast from "react-hot-toast";

const Modal = ({ handleClose }) => {
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

  if (error) {
    toast(error);
    setError(null);
  }

  return (
    <div className="absolute w-[calc(100%-180px)] h-1/2 overflow-y-scroll left-1/2 text-gray-900 translate-x-[-50%] p-4 bg-slate-50 border-2 border-blue-700 shadow-2xl shadow-gray-700 drop-shadow-2xl">
      <button className="absolute right-1 top-1.5" onClick={handleClose}>
        <img src={closeBtn} className="w-6" />
      </button>
      {totalQuantity ? (
        <>
          <h1 className="text-2xl pb-2 border-b border-gray-600 ">
            Shopping Cart({totalQuantity} items)
          </h1>
          <ProductDetails />
          <h3 className="text-2xl font-semibold">Total: ₹{totalCost}</h3>
          <Button
            title={"Purchase Items"}
            onClickHandler={purchaseItems}
            background={"blue"}
          />
        </>
      ) : (
        <h1 className="text-2xl text-center">No items in the cart!</h1>
      )}
    </div>
  );
};

export default Modal;
