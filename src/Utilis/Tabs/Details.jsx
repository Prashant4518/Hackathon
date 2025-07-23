import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart, decreaseQuantity } from "../store/cartslice";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [burger, setBurger] = useState(null);

  useEffect(() => {
    setBurger(null);
    axios
      .get("https://free-food-menus-api-two.vercel.app/burgers")
      .then((res) => {
        const selected = res.data.find((item) => item.id === id);
        setBurger(selected);
      })
      .catch((err) => console.error(err));
  }, [id]); // ✅

  const item = burger ? items.find((i) => i.id == burger.id) : null;

  console.log(item);

  if (!burger) return <div className="text-white p-5">Loading...</div>;

  return (
    <div className="h-full  w-[90%]  m-auto shadow-[0.5px_1px_1px_1px_#fff]   rounded  flex-col flex justify-center  items-center sm:shadow-none lg:shadow-none lg:h-[calc(100vh-20vh)] lg:flex-row lg:gap-2 lg:mt-7.5">
      <div className="mt-20">
        <img
          className="hover:scale-102 transition-all ease-in-out duration-900 w-full h-[calc(100vh-50vh)] object-cover overflow-hidden rounded-2xl xl:h-[calc(100vh-40vh)]"
          src={burger.img}
          alt={burger.name}
        />
      </div>
      <div className=" rounded p-2">
        <h1 className="text-3xl font-semibold  lg:text-[5rem]">
          {burger.name}
        </h1>
        <hr />
        <p className="text-xl mt-2  lg:text-[2.8rem]">{burger.dsc}</p>
        <div className="flex justify-between items-center text-4xl mt-5 lg:text-[2.5rem]">
          <span className="text-green-400">₹ {burger.price}</span>
          <span className="text-yellow-500">⭐ {burger.rate}/5</span>
        </div>
        {item ? (
          <div className="flex items-center gap-2 mt-5">
            <button
              onClick={() => dispatch(decreaseQuantity({ id: burger.id }))}
              className="px-4 py-2 bg-gray-300 rounded text-3xl"
            >
              −
            </button>
            <span className="text-3xl">{item.quantity}</span>
            <button
              onClick={() => dispatch(addToCart(burger))}
              className="px-4 py-2 bg-gray-300 rounded text-3xl"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              dispatch(addToCart(burger));
            }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-6 py-3 text-white text-2xl font-bold shadow-lg transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-2xl w-full mt-10"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Details;
