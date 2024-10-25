import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <div className="flex w-full fixed h-16 bg-green-50 items-center justify-around">
      <div className="pl-5">
        <h2 className="text-3xl font-serif font-semibold ">Ecom</h2>
      </div>
      <div className="flex gap-6 font-serif">
        <Link to={"/user/home"}>
          <h2 className="hover:scale-110">Home</h2>
        </Link>
        {/* <Link to={"/user/home"}>
          <h2 className="hover:scale-110">Category</h2>
        </Link> */}
        <Link to={"/user/products"}>
          <h2 className="hover:scale-110">Products</h2>
        </Link>

        <h2 className="hover:scale-110">About</h2>
        <h2 className="hover:scale-110">Contact</h2>
      </div>
      <div className="flex items-center gap-6">
        <Link>
          <div className="text-xl p-2 bg-[#50B498] shadow rounded-lg text-white hover:scale-110">
            <FaRegHeart />
          </div>
        </Link>
        <Link to={"/user/cart"}>
          <div className="text-xl p-2 bg-[#50B498] shadow rounded-lg text-white hover:scale-110">
            <RiShoppingCart2Line />
          </div>
        </Link>

        <Link to={"/user/profile"}>
          <div className="text-xl p-2 bg-[#50B498] shadow rounded-lg text-white hover:scale-110">
            <FaRegUser />
          </div>
        </Link>
        <button
          onClick={logout}
          className="cursor-pointer  bg-[#50B498] text-white font-serif pr-5 pl-5 p-2 rounded-lg hover:scale-105  "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
