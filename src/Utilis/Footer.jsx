import React from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3">
        <img
          src="https://www.mrbeastburger.com/wp-content/uploads/mrbeast-burger_classic-beast.svg"
          alt="logo"
          className="h-8 sm:h-10 lg:h-12 mb-2 sm:mb-0"
        />

        <ol className="flex gap-4 text-xl md:text-3xl">
          <li className="hover:scale-110 cursor-pointer">
            <i className="ri-facebook-circle-fill"></i>
          </li>
          <li className="hover:scale-110 cursor-pointer">
            <i className="ri-instagram-line"></i>
          </li>
          <li className="hover:scale-110 cursor-pointer">
            <i className="ri-youtube-line"></i>
          </li>
          <li className="hover:scale-110 cursor-pointer">
            <i className="ri-twitter-x-line"></i>
          </li>
          <li className="hover:scale-110 cursor-pointer">
            <i className="ri-tiktok-fill"></i>
          </li>
        </ol>
      </div>

      <hr className="mt-2 w-[98%] m-auto" />

      <p className="text-right pr-5 mb-4 hidden md:block text-sm text-gray-600">
        ©2025 Virtual Dining Concepts (Opens in a new tab), LLC. All rights
        reserved.
      </p>
    </>
  );
};

export default Footer;
