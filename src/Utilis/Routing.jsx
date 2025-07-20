import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Tabs/Home";
import About from "./Tabs/About";
import Details from "./Tabs/Details";
import Product from "./Tabs/Product";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Routing;
