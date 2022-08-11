import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import LayoutMain from "../layouts/Main";

import Profile from "../data/profile.jpg";
import AboutList from "../components/About/AboutList";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heri S.A. | About</title>
      </Head>
      <LayoutMain withArrow>
        <div className="w-24 h-24 md:w-32 md:h-32 xl:w-48 xl:h-48">
          <Image
            src={Profile}
            layout={"responsive"}
            className="rounded-full"
            alt="photo-profile"
          />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-primary">
          Heri Susanto Arisman
        </h1>
        <span className="h-1 w-1/6 md:w-1/12 xl:w-24 -mt-2 bg-secondary"></span>
        <p className="w-2/4 text-lg md:text-xl xl:text-2xl text-center tracking-widest">
          A guy who likes errors and solves problems with coding.
        </p>
      </LayoutMain>
      <AboutList />
    </>
  );
};

export default About;
