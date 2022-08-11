import React from "react";
import Head from "next/head";
import MainLayout from "../layouts/Main";

const Contact = () => {
  const openResume = () => {
    window.open("/cv.pdf");
  };

  return (
    <>
      <Head>
        <title>Heri S.A. | Contact</title>
      </Head>
      <MainLayout>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-primary">
          Lets Get in Touch
        </h1>
        <span className="h-1 w-1/6 md:w-1/12 xl:w-24 mb-3 -mt-2 bg-secondary"></span>
        <p className="w-3/4 text-2xl md:text-3xl xl:text-4xl text-center tracking-widest">
          Heri Susanto Arisman
        </p>
        <p className="w-3/4 -mt-4 text-normal md:text-lg xl:text-xl text-center tracking-widest">
          heri.s.arisman@gmail.com
        </p>
        <p className="w-3/4 -mt-4 text-sm md:text-normal xl:text-lg text-center tracking-widest">
          +62 8224 0960 383
        </p>
        <div className="w-full px-6 flex flex-col gap-3 md:w-2/4 md:mx-auto md:mt-12 lg:flex-row lg:w-10/12 lg:gap-4">
          <div className="lg:flex-1">
            <p className="text-secondary md:text-lg xl:text-2xl">LinkedIn</p>
            <div className="w-full flex gap-2">
              <span className="w-1/6  h-0.5 lg:h-1 bg-primary"></span>
              <span className="w-5/6  h-0.5 lg:h-1 bg-gray-600"></span>
            </div>
            <div className={`relative text-secondary xl:text-xl`}>
              <a
                className="tracking-wider transition duration-300 cursor-pointer hover:text-primary"
                href="https://www.linkedin.com/in/herisusantoarisman/"
                target="_blank"
              >
                https://www.linkedin.com/in/herisusantoarisman/
              </a>
            </div>
          </div>
          <div className="lg:flex-1">
            <p className="text-secondary md:text-lg xl:text-2xl">Github</p>
            <div className="w-full flex gap-2">
              <span className="w-1/6  h-0.5 lg:h-1 bg-primary"></span>
              <span className="w-5/6  h-0.5 lg:h-1 bg-gray-600"></span>
            </div>
            <div
              className={`text-secondary xl:text-xl transition duration-400`}
            >
              <a
                className="tracking-wider transition duration-300 cursor-pointer hover:text-primary"
                href="https://github.com/herisusantoarismann"
                target="_blank"
              >
                https://github.com/herisusantoarismann
              </a>
            </div>
          </div>
          <div className="lg:flex-1">
            <p className="text-secondary md:text-lg xl:text-2xl">Resume</p>
            <div className="w-full flex gap-2">
              <span className="w-1/6  h-0.5 lg:h-1 bg-primary"></span>
              <span className="w-5/6  h-0.5 lg:h-1 bg-gray-600"></span>
            </div>
            <div
              className={`text-secondary xl:text-xl transition duration-400`}
            >
              <p
                className="tracking-wider transition duration-300 cursor-pointer hover:text-primary"
                onClick={() => openResume()}
              >
                Download Resume
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Contact;
