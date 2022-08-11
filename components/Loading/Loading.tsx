import React from "react";

const Loading = () => {
  return (
    <div className="bg-base min-h-screen flex justify-center items-center">
      <svg
        height="100"
        stroke="#f2f1ed"
        strokeWidth="1"
        className="text-line"
        width="100%"
      >
        <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
