import { useContext, useState } from "react";
import closeBtn from "../assets/icons/close.png";
import { CartContext } from "../CartContext";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const { getTotalProductQuantity, getTotalCost } = useContext(CartContext);

  const handleShow = () => setShowModal(true);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>Ecommerce Store</div>
        <button className="bg-blue-200 p-2 rounded-md" onClick={handleShow}>
          Cart {getTotalProductQuantity()} Items
        </button>
      </div>
      {showModal ? (
        <div className="absolute w-2/3 h-1/2 left-1/2 translate-x-[-50%] text-center p-4 bg-slate-100">
          <button className="absolute right-10" onClick={handleClose}>
            <img src={closeBtn} className="w-6" />
          </button>
          <h1>Modal</h1>
          <h3>Total Cost: {getTotalCost()}</h3>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
