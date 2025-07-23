import React, { useState } from "react";

import bottom from "./burger/bottom.png";
import top from "./burger/top.png";
import lattuce from "./burger/lettuce.png";
import cheese from "./burger/cheese.png";
import cheese2 from "./burger/cheese2.png";
import onion2 from "./burger/onion2.png";
import onion from "./burger/onion.png";
import tomato from "./burger/tomato.png";
import patty from "./burger/patty.png";

const layers = [
  { id: "top-bun", src: top },
  { id: "onion2", src: onion2 },
  { id: "onion", src: onion },
  { id: "lettuce", src: lattuce },
  { id: "patty", src: patty },
  { id: "cheese2", src: cheese2 },
  { id: "tomato", src: tomato },
  { id: "cheese", src: cheese },
  { id: "bottom-bun", src: bottom },
];

const Burger = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="relative w-[200px] h-[300px] sm:w-[220px] sm:h-[320px] md:w-[260px] md:h-[380px] lg:w-[300px] lg:h-[400px] xl:w-[340px] xl:h-[450px] cursor-pointer transition-transform duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {layers.map((layer, index) => {
          const collapsedOffset = index * 6;
          const expandedOffset = index * 35;
          const scale = hovered ? "scale(1.2)" : "scale(1)";

          return (
            <img
              key={layer.id}
              src={layer.src}
              alt={layer.id}
              className="absolute left-1/2 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] transition-all duration-500 ease-in-out"
              style={{
                zIndex: layers.length - index,
                top: hovered ? `${expandedOffset}px` : `${collapsedOffset}px`,
                transform: `translateX(-50%) ${scale}`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Burger;
