import useCartContext from "../utils/useCartContex";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.png";

const NavBar = () => {
  const { totalQuantity } = useCartContext();

  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img src={Logo} className="w-12 aspect-square" alt="Logo" />
      </Link>
      <Link to="viewcart">
        <button
          className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 my-4 border-blue-700 hover:border-blue-500 rounded`}
        >
          Cart {totalQuantity} Items
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
