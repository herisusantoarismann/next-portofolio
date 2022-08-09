import React from "react";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <div className="bg-base text-white min-h-screen flex flex-col justify-between">
      {children}
    </div>
  );
};

export default Main;
