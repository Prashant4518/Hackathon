import React from "react";
import { Link } from "react-router-dom";

// Utility functions
const isNonVeg = (item) => {
  const keywords = [
    "chicken",
    "beef",
    "egg",
    "mutton",
    "bacon",
    "meat",
    "fish",
  ];
  return keywords.some(
    (word) =>
      item.name?.toLowerCase().includes(word) ||
      item.desc?.toLowerCase().includes(word)
  );
};

const isMeal = (item) => {
  const keywords = ["meal", "combo", "plate", "with fries"];
  return keywords.some(
    (word) =>
      item.name?.toLowerCase().includes(word) ||
      item.desc?.toLowerCase().includes(word)
  );
};

const hasDrink = (item) => {
  const keywords = ["drink", "soda", "cola", "coke", "juice"];
  return keywords.some(
    (word) =>
      item.name?.toLowerCase().includes(word) ||
      item.desc?.toLowerCase().includes(word)
  );
};

const MainProducts = ({ products, filter }) => {
  const filteredProducts = products.filter((item) => {
    if (filter === "veg") return !isNonVeg(item);
    if (filter === "non-veg") return isNonVeg(item);
    if (filter === "meal") return isMeal(item);
    if (filter === "drink") return hasDrink(item);
    return true; // 'all'
  });

  return (
    <div
      className="p-5 w-full bg-gradient-to-b from-yellow-100 to-red-100 overflow-y-auto h-screen rounded grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      style={{ scrollbarWidth: "none" }}
    >
      {filteredProducts.slice(8, 60).map((burger) => (
        <div
          key={burger.id}
          className="rounded-xl shadow-2xl p-2 hover:scale-105 hover:shadow-[0px_1px_1px_1px_#fff] transition-transform duration-300"
        >
          <Link to={`/details/${burger.id}`}>
            <img
              src={burger.img || burger.image}
              alt={burger.name}
              className="w-full h-48 object-cover rounded-xl cursor-pointer"
            />
          </Link>
          <h2 className="text-2xl font-bold mt-3">{burger.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default MainProducts;
