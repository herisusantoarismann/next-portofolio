import Image from "next/image";
import React from "react";
import MainLayout from "../layouts/Main";

import Wheater from "../data/wheater.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface parentHover {
  left: boolean;
  right: boolean;
}

const Detail = () => {
  const [parentHover, setParentHover] = React.useState<parentHover>({
    left: false,
    right: false,
  });

  return (
    <>
      <MainLayout>
        <p className="px-3 xl:px-4 xl:py-0.5 text-xl lg:text-2xl xl:text-3xl text-primary border-2 border-primary rounded-full">
          1
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-primary">
          Wheater App
        </h1>
        <span className="h-1 w-1/6 md:w-1/12 xl:w-24 -mt-2 bg-secondary"></span>
        <p className="text-center w-3/4 xl:w-2/4 tracking-widest text-lg md:text-xl">
          The weather app is an app that allows users to view conditions,
          forecasts, temperatures and related metrics from a variety of
          locations.
        </p>
        <button className="py-1 px-4 bg-primary text-base lg:text-xl font-semibold border border-transparent tracking-wider rounded transition duration-150 hover:bg-transparent hover:border hover:border-primary hover:text-primary">
          Visit Site
        </button>
      </MainLayout>
      <div className="bg-base pb-3 lg:pb-6 flex flex-col gap-4">
        <Image src={Wheater} layout={"responsive"} />
        <div className="px-4 lg:w-2/4 lg:mx-auto">
          <p className="text-secondary md:text-xl xl:text-2xl tracking-wider">
            Wheater App
          </p>
          <div className="w-full flex gap-2">
            <span className="w-1/4 md:w-1/12 h-0.5 lg:h-1 bg-primary"></span>
            <span className="w-full h-0.5 lg:h-1 bg-gray-600"></span>
          </div>
          <div className={`text-secondary xl:text-xl transition duration-400`}>
            <p className="tracking-wider md:text-xl">Vue JS, Material UI</p>
          </div>
        </div>
        <div className="px-2 lg:px-6 mt-6 lg:mt-12 text-secondary flex justify-between">
          <div
            className="flex items-center cursor-pointer"
            onMouseOver={() =>
              setParentHover((prevState) => ({ ...prevState, left: true }))
            }
            onMouseLeave={() =>
              setParentHover((prevState) => ({ ...prevState, left: false }))
            }
          >
            <FaAngleLeft
              className={`text-xl xl:text-2xl ${
                parentHover.left && "animate-bounce-left text-primary"
              }`}
            />
            <p
              className={`md:text-lg lg:text-xl xl:text-2xl transition duration-150 ${
                parentHover.left && "text-primary"
              }`}
            >
              Previous Project
            </p>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onMouseOver={() =>
              setParentHover((prevState) => ({ ...prevState, right: true }))
            }
            onMouseLeave={() =>
              setParentHover((prevState) => ({ ...prevState, right: false }))
            }
          >
            <p
              className={`md:text-lg lg:text-xl xl:text-2xl transition duration-150 ${
                parentHover.right && "text-primary"
              }`}
            >
              Next Project
            </p>
            <FaAngleRight
              className={`text-xl xl:text-2xl ${
                parentHover.right && "animate-bounce-right text-primary"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
