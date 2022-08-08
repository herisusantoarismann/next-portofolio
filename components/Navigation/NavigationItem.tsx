import { useRouter } from "next/router";
import React from "react";
import { TNavigation } from "./NavigationList";

interface Props {
  data: TNavigation;
}

const NavigationItem = ({ data }: Props) => {
  const { pathname } = useRouter();

  return (
    <>
      <li className="text-2xl tracking-wider">{data.name}</li>
      <div className="w-full flex gap-2">
        <span
          className={`w-1/12 h-0.5 ${
            pathname.includes(data.url) ? "bg-primary" : "bg-secondary"
          } `}
        ></span>
        <span className="w-5/6 h-0.5 bg-gray-600"></span>
      </div>
    </>
  );
};

export default NavigationItem;
