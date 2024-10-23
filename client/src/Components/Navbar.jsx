import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full h-16 bg-green-50 items-center justify-around">
      <div className="pl-5">
        <h2 className="text-3xl font-serif font-semibold ">Ecom</h2>
      </div>
      <div className="flex gap-5 ">
        <Link to={'home'}>
          <h2>Home</h2>
        </Link>
        <h2>Products</h2>
        <h2>about</h2>
        <h2>Contact</h2>
      </div>
      <div className="flex items-center gap-6">
        <div>User</div>
        <button className="cursor-pointer  bg-blue-100 p-2 rounded-lg hover:scale-105">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
