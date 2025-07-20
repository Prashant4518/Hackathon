import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Details from "./Details";

const BurgerCard = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    const api = "https://free-food-menus-api-two.vercel.app/burgers";
    axios
      .get(api)
      .then((res) => setBurgers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = () => {
    Navigate(<Details />);
  };

  return (
    <>
      <div className="flex gap-1">
        <div className=" p-5 mt-5 h-screen w-[25%] hidden md:block text-zinc-200 rounded">
          <h1 className="text-2xl  font-semibold">MENU </h1>
          <hr />
          <ul className="w-[80%]  mt-5">
            <li className="flex gap-3  items-center mb-3  text-md">
              <span className="w-2 h-2 mr-2 rounded-full bg-amber-300"></span>{" "}
              Veg.
              {""}
            </li>
            <li className="flex gap-3  items-center mb-3 text-md">
              <span className="w-2 h-2 mr-2 rounded-full bg-amber-300"></span>{" "}
              Non-Veg.
              {""}
            </li>
            <li className="flex gap-3  items-center mb-3 text-md">
              <span className="w-2 h-2 mr-2 rounded-full bg-amber-300"></span>{" "}
              Meals.
              {""}
            </li>
          </ul>
        </div>

        <div
          className="p-5 w-[100%] md-w-[85%] overflow-x-hidden overflow-y-auto h-screen  mt-5 rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{ scrollbarWidth: "none" }}
        >
          {burgers
            .filter((burger) => burger.img && burger.img.trim() !== "")
            .slice(10, 30)
            .map((burger) => (
              <div
                key={burger.id}
                className="bg-zinc-00 rounded-xl shadow-2xl p-2 hover:scale-105 hover:shadow-[0px_1px_1px_1px_#fff] transition-transform duration-300"
              >
                <Link to={"/details"}>
                  <img
                    src={burger.img}
                    alt={burger.name}
                    className="w-full h-48 object-cover rounded-xl cursor-pointer"
                    onClick={() => handleClick}
                  />
                </Link>

                <h2 className="text-2xl text-white font-bold mt-3">
                  {burger.name}
                </h2>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BurgerCard;
