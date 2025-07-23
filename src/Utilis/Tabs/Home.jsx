import React from "react";
import Burger from "./Burger";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center px-4 py-10 min-h-screen bg-gradient-to-b from-yellow-100 to-red-100 gap-10 md:px-8 lg:flex-row lg:gap-20">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 drop-shadow-md"
          >
            🍔 Welcome to Beast Burger
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium px-2 sm:px-6"
          >
            Dive into the wildest burger experience ever crafted. At Beast
            Burger, we don’t just serve food — we stack flavor, fun, and full-on
            beast mode in every bite. Big burgers. Bigger vibes. Beast-worthy
            satisfaction.
          </motion.p>
        </motion.div>
      </div>

      {/* Burger Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="scale-90 sm:scale-100 md:scale-105 lg:scale-110 xl:scale-100 transition-all duration-500">
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Home;
