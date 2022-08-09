import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import LayoutMain from "../layouts/Main";

import Profile from "../data/profile.jpg";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>L7 | About</title>
      </Head>
      <LayoutMain>
        <div className="w-24 h-24 md:w-32 md:h-32 xl:w-48 xl:h-48">
          <Image src={Profile} layout={"responsive"} className="rounded-full" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-primary">
          Heri Susanto Arisman
        </h1>
        <span className="h-1 w-1/6 md:w-1/12 xl:w-24 -mt-2 bg-secondary"></span>
        <p className="w-2/4 text-lg md:text-xl xl:text-2xl text-center tracking-widest">
          A guy who likes errors and solves problems with coding.
        </p>
      </LayoutMain>
      <div className="bg-base text-white px-4 py-6 lg:py-12">
        <div className="md:w-3/4 xl:w-2/4 md:mx-auto flex flex-col md:flex-row gap-4 lg:gap-24">
          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl xl:text-2xl">About</h2>
            <div className="w-full flex gap-2">
              <span className="w-1/6 xl:w-1/6 h-0.5 lg:h-1 bg-primary"></span>
              <span className="w-5/6 xl:w-5/6 h-0.5 lg:h-1 bg-gray-600"></span>
            </div>
            <p className="tracking-widest lg:text-lg xl:text-xl">
              As a frontend developer I like to turn a design into simple and
              fast code. Challenging algorithm problems is fun for me. I love to
              see and live anything structured and planned.
            </p>
          </div>
          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl xl:text-2xl">Tech Stack</h2>
            <div className="w-full flex gap-2">
              <span className="w-1/6 xl:w-1/6 h-0.5 lg:h-1 bg-primary"></span>
              <span className="w-5/6 xl:w-5/6 h-0.5 lg:h-1 bg-gray-600"></span>
            </div>
            <p className="tracking-widest lg:text-lg xl:text-xl">
              HTML, CSS, Javascript, React JS, Vue JS, Next JS, Typescript
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
