import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TNavigation } from "./NavigationList";

interface Props {
  data: TNavigation;
}

const NavigationItem = ({ data }: Props) => {
  const { pathname } = useRouter();

  return (
    <Link href={data.url} passHref>
      <li>
        <div className="text-2xl xl:text-3xl tracking-wider cursor-pointer transition duration-150 hover:text-primary">
          {data.name}
        </div>
        <div className="w-full flex gap-2">
          <span
            className={`w-1/12 xl:w-24 h-0.5 xl:h-1.5 ${
              data.url === pathname ? "bg-primary" : "bg-secondary"
            } `}
          ></span>
          <span className="w-5/6 xl:w-full h-0.5 xl:h-1.5 bg-gray-600"></span>
        </div>
      </li>
    </Link>
  );
};

export default NavigationItem;
