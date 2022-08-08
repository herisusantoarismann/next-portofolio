import React from "react";
import NavigationItem from "./NavigationItem";

export interface TNavigation {
  name: string;
  url: string;
}

const dataNavigation = [
  { name: "Work", url: "/" },
  { name: "Project", url: "/project" },
  { name: "Contact", url: "/contact" },
];

const NavigationList = () => {
  return (
    <ul className="px-3 md:px-6 xl:mt-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
      {dataNavigation.map((nav: TNavigation, i: number) => {
        return <NavigationItem data={nav} key={i} />;
      })}
    </ul>
  );
};

export default NavigationList;
