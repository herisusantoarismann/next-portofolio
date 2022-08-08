import React from "react";
import { FaAngleDown } from "react-icons/fa";

const BottomLine = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <FaAngleDown className="text-center text-4xl animate-bounce" />
      <span className="w-full h-2 bg-primary"></span>
    </div>
  );
};

export default BottomLine;
