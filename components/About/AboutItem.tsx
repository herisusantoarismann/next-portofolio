import React from "react";
import { TAbout } from "./AboutList";

interface Props {
  data: TAbout;
}

const AboutItem = ({ data }: Props) => {
  return (
    <div className="md:flex-1">
      <h2 className="text-lg md:text-xl xl:text-2xl">{data.title}</h2>
      <div className="w-full flex gap-2">
        <span className="w-1/6 xl:w-1/6 h-0.5 lg:h-1 bg-primary"></span>
        <span className="w-5/6 xl:w-5/6 h-0.5 lg:h-1 bg-gray-600"></span>
      </div>
      <p className="tracking-widest lg:text-lg xl:text-xl">
        {data.description}
      </p>
    </div>
  );
};

export default AboutItem;
