import React from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <nav className="p-5 h-15 w-full border-b-0 border-l-0 rounded-2xl shadow-[0.5px_0.9px_1px_1px_#e5e7eb] flex items-center text-gray-200  font-semibold justify-between  m-auto">
      <div>
        <img
          src="https://www.mrbeastburger.com/wp-content/uploads/mrbeast-burger_classic-beast.svg"
          alt=""
          className="h-8 sm:h-10 lg-12"
        />
      </div>

      <div className="hidden md:flex gap-7">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
          to="/details"
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </div>

      <h1 className="flex items-center">
        <i className="ri-shopping-bag-4-line text-2xl md:text-3xl mr-3 "></i>
        <i className="ri-user-add-fill text-2xl hidden leading-none md:block">
          <p className="text-sm md:text-md">SignUp</p>
        </i>

        <i className="ri-menu-line text-3xl md:hidden md:text-xl block"></i>
      </h1>
    </nav>
  );
};

export default Navbar;
