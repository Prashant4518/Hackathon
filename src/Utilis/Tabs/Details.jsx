import React from "react";

const Details = () => {
  return (
    <>
      <div className="h-full w-[90%] p-2 m-auto shadow-[0.5px_1px_1px_1px_#fff]  rounded mt-15 flex justify-center flex-col items-center sm:shadow-none lg:shadow-none lg:h-[calc(100vh-20vh)] lg:flex-row lg:gap-2 lg:mt-7.5">
        <div>
          <img
            className="hover:scale-102 transition-all ease-in-out duration-900 w-full h-[calc(100vh-50vh)] object-cover overflow-hidden rounded-2xl xl:h-[calc(100vh-40vh)]"
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt=""
          />
        </div>
        <div className=" rounded p-2">
          <h1 className="text-6xl font-semibold text-white lg:text-[5rem]">
            Gramercy Tavern
          </h1>
          <hr />
          <p className="text-3xl mt-2 text-gray-400 lg:text-[2.8rem]">
            The Gramercy Tavern Burger - 4 Pack
          </p>
          <div className="flex justify-between items-center text-4xl mt-5 lg:text-[2.5rem]">
            <span className="text-green-400">₹ 99 /-</span>
            <span className="text-yellow-500">⭐ 5/5</span>
          </div>
          <button className="relative overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-6 py-3 text-white text-2xl font-bold shadow-lg transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-2xl w-full mt-10">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
