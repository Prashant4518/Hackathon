import React from "react";
import Navbar from "./Utilis/Navbar";
import Routing from "./Utilis/Routing";
import "../font/font.css";

const App = () => {
  return (
    <div
      className=" h-screen w-full bg-gradient-to-b from-yellow-100 to-red-100 overflow-auto"
      style={{ scrollbarWidth: "none", fontFamily: "myfont" }}
    >
      <Navbar />

      <Routing />
    </div>
  );
};

export default App;
