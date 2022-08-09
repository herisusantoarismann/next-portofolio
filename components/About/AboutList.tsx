import React from "react";
import AboutItem from "./AboutItem";

export interface TAbout {
  title: string;
  description: string;
}

const data_about = [
  {
    title: "About",
    description:
      "As a frontend developer I like to turn a design into simple and fast code. Challenging algorithm problems is fun for me. I love to see and live anything structured and planned.",
  },
  {
    title: "Tech Stack",
    description:
      "HTML, CSS, Javascript, React JS, Vue JS, Next JS, Typescript.",
  },
];

const AboutList = () => {
  return (
    <div className="bg-base text-white px-4 py-6 lg:py-12">
      <div className="md:w-3/4 xl:w-2/4 md:mx-auto flex flex-col md:flex-row gap-4 lg:gap-24">
        {data_about.map((item: TAbout, i: number) => {
          return <AboutItem data={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default AboutList;
