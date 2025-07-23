import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import MainProducts from "../MainProducts";
import axios from "axios";

const Product = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://free-food-menus-api-two.vercel.app/burgers")
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex bg-gradient-to-b text-gray-700 from-yellow-100 to-red-100 h-screen w-screen overflow-hidden mt-20">
      <SideBar
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <MainProducts products={allProducts} filter={selectedCategory} />
    </div>
  );
};

export default Product;
