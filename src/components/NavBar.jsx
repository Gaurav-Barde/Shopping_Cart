import { useState } from "react";
import useCartContext from "../utils/useCartContex";
import Modal from "./Modal";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const { totalQuantity } = useCartContext();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>Ecommerce Store</div>
        <button
          className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 my-4 border-blue-700 hover:border-blue-500 rounded`}
          onClick={handleShow}
        >
          Cart {totalQuantity} Items
        </button>
      </div>
      {showModal ? <Modal handleClose={handleClose} /> : null}
    </>
  );
};

export default NavBar;
