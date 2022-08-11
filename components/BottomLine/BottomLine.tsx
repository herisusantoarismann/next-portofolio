import React from "react";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  withArrow?: boolean;
}

const BottomLine = ({ withArrow = false }: Props) => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      {withArrow && (
        <FaAngleDown className="text-center text-4xl animate-bounce" />
      )}
      <span className="w-full h-2 bg-primary"></span>
    </div>
  );
};

export default BottomLine;
