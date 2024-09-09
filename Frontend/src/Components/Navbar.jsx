import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-8 font-bold text-lg shadow-md shadow-gray-200 py-3">
      <Link
        className="hover:bg-gray-300 hover:text-black rounded-lg p-2"
        to="/"
      >
        Home
      </Link>
      <Link
        className="hover:bg-gray-300 hover:text-black rounded-lg p-2"
        to="/create"
      >
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
