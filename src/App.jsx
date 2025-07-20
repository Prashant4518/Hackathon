import React from "react";
import Navbar from "./Utilis/Navbar";
import Routing from "./Utilis/Routing";

const App = () => {
  return (
    <div
      className="bg-black opacity-90 w-full  h-screen p-2 overflow-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <Navbar />

      <Routing />
    </div>
  );
};

export default App;
