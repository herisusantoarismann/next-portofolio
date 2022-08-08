import React from "react";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <main className="flex justify-center items-center flex-col gap-3">
      {children}
    </main>
  );
};

export default Main;
