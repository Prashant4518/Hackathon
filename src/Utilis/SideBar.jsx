import React from "react";

const categories = [
  { label: "🍔 All", value: "all" },
  { label: "🥦 Veg", value: "veg" },
  { label: "🍗 Non-Veg", value: "non-veg" },
];

const SideBar = ({ onCategorySelect, selectedCategory }) => {
  return (
    <>
      <div className="p-5 w-[25%] text-gray-700 bg-amber-200 h-screen hidden md:block rounded">
        <h1 className="text-2xl font-semibold">MENU</h1>
        <hr />
        <ol className="w-[80%] mt-5 list-none">
          {categories.map((item, index) => {
            const isActive = selectedCategory === item.value;
            return (
              <li
                key={index}
                onClick={() => onCategorySelect(item.value)}
                className={`flex gap-3 items-center mb-3 text-md cursor-pointer px-3 py-2 rounded
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-transparent hover:bg-blue-200"
                  }
                `}
              >
                {item.label}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="flex md:hidden overflow-x-auto px-2 py-3">
        {categories.map((item, index) => {
          const isActive = selectedCategory === item.value;
          return (
            <button
              key={index}
              onClick={() => onCategorySelect(item.value)}
              className={`flex-shrink-0 mx-2 px-4 py-2 rounded-full text-sm whitespace-nowrap
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-transparent hover:bg-blue-200 text-gray-800"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
