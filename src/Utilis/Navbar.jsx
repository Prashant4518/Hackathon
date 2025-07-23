import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="p-5 fixed z-40 h-15  bg-amber-200  w-full border-b-0 border-l-0 rounded-2xl shadow-[0.5px_3px_1px_1px_#FFBF00] flex items-center justify-between font-semibold">
        {/* Logo */}
        <div>
          <img
            src="https://www.mrbeastburger.com/wp-content/uploads/mrbeast-burger_classic-beast.svg"
            alt="Logo"
            className="h-8 sm:h-10 lg:h-12"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-7 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            Cart
          </NavLink>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5 text-black">
          {/* SignUp (hidden on mobile) */}
          <div
            className="cursor-pointer hidden md:flex items-center gap-2"
            onClick={() => navigate("/signup")}
          >
            <i className="ri-user-add-fill text-2xl" />
            <p className="text-sm md:text-md text-gray-700">SignUp</p>
          </div>

          {/* Hamburger Menu Icon (mobile) */}
          <i
            className="ri-menu-line text-3xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Slide-in Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 bg-amber-200 h-full w-64  text-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button */}
        <div className="flex  justify-end p-4">
          <i
            className="ri-close-line text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Sidebar Nav Links */}
        <div className="flex flex-col  items-start gap-6 px-6 text-lg font-semibold">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : ""
            }
          >
            Cart
          </NavLink>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              navigate("/signup");
              setMenuOpen(false);
            }}
          >
            <i className="ri-user-add-fill text-xl" />
            <p className="text-sm">SignUp</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
