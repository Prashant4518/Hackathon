import React from "react";
import Footer from "../Footer";

const About = () => {
  return (
    <div className="w-full h-full text-gray-700 overflow-x-hidden bg-gradient-to-b from-yellow-100 to-red-100 mt-15">

      <div className="w-[90%]  bg-gradient-to-b from-yellow-100 to-red-100 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in-up">
        <img
          src="https://www.mrbeastburger.com/wp-content/uploads/mrbeast-mrbeast-burger.png"
          alt="MrBeast Burger"
          className="w-full h-auto rounded-lg shadow-xl object-contain"
        />

        <div>
          <h1 className=" text-4xl sm:text-5xl font-bold mb-4">ABOUT US</h1>
          <p className=" text-base sm:text-lg leading-relaxed">
            On November 19, 2020, fans of MrBeast descended upon the town of
            Wilson, North Carolina—just a few miles from Jimmy's hometown of
            Greenville, to enjoy the world's first free restaurant. MrBeast and
            his best friends, Chandler, and Karl, hosted thousands of fans
            during a pop-up event for MrBeast Burger. Fans enjoyed an authentic
            one-of-a-kind experience featuring branding, packaging, uniforms and
            signage along with a free meal. Check out the video featured
            on&nbsp;
            <a
              className="underline text-red-500 hover:text-red-400 transition"
              href="https://www.youtube.com/@MrBeast"
              target="_blank"
              rel="noopener noreferrer"
            >
              MrBeast's YouTube.
            </a>
          </p>
        </div>
      </div>

      <div className="w-[90%] text-gray-700 bg-gradient-to-b from-yellow-100 to-red-100 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fade-in-up">
        <div>
          <h1 className=" text-4xl sm:text-5xl font-bold mb-4">MR BEAST</h1>
          <p className=" text-base sm:text-lg leading-relaxed">
            MrBeast is an award-winning digital content creator known for his
            over-the-top stunts and charitable endeavors. He has joined forces
            with&nbsp;
            <a
              className="underline text-red-500 hover:text-red-400 transition"
              href="https://www.youtube.com/watch?v=dg2Ag3e8W-Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtual Dining Concepts
            </a>
            &nbsp;to create MrBeast Burger — a virtual restaurant brand, now
            available to order across the U.S. MrBeast Burger operates out of
            existing restaurant kitchens, allowing restaurateurs to add a new
            source of revenue. Customers can only order via the proprietary app
            or through major food delivery platforms. The menu is digital-only,
            and food is delivered directly to your door.
          </p>
        </div>

        <img
          src="https://www.mrbeastburger.com/wp-content/uploads/BeastWithBag_1200x960-1024x819.jpg.avif"
          alt="MrBeast With Bag"
          className="w-full h-auto rounded-lg shadow-xl object-cover"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
