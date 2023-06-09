import { useState } from "react";
import useCartContext from "../utils/useCartContex";
import Modal from "./Modal";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const { getTotalProductQuantity, getTotalCost } = useCartContext();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const totalQuantity = getTotalProductQuantity();
  const totalCost = getTotalCost();

  return (
    <>
      <div className="flex justify-between items-center">
        <div>Ecommerce Store</div>
        <button
          className={`bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 my-4 border-teal-700 hover:border-teal-500 rounded`}
          onClick={handleShow}
        >
          Cart {totalQuantity} Items
        </button>
      </div>
      {showModal ? (
        <Modal
          totalQuantity={totalQuantity}
          totalCost={totalCost}
          handleClose={handleClose}
        />
      ) : null}
    </>
  );
};

export default NavBar;
