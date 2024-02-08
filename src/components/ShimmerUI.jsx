import React from "react";

const ShimmerUI = () => {
  return (
    <div className="flex mx-2 my-4 h-96 bg-gray-100">
      <div className="w-2/5 h-80 my-auto mx-4 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-3/5 px-60 my-auto">
        <div className="w-52 h-10 my-2 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-52 h-8 my-2 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-52 h-8 my-2 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default ShimmerUI;
