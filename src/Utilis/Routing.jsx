import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Tabs/Home";
import About from "./Tabs/About";
import Details from "./Tabs/Details";
import Product from "./Tabs/Product";
import MainProducts from "./MainProducts";
import Cart from "./Tabs/Cart";
import Signup from "./Tabs/Signup";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/product" element={<Product />} />
        <Route path="/mainproducts/:item" element={<MainProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Routing;
