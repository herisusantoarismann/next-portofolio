import React from "react";
import BottomLine from "../components/BottomLine/BottomLine";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <div className="bg-base text-white min-h-screen flex flex-col justify-between">
      <Header />
      <Content>{children}</Content>
      <BottomLine />
    </div>
  );
};

export default Main;
