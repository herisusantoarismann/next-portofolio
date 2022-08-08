import type { NextPage } from "next";
import Image from "next/image";
import Wheater from "../data/wheater.png";
import { FaAngleDown } from "react-icons/fa";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-base text-white min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-5xl text-center text-primary">Heri Susanto</h1>
          <h1 className="text-5xl text-center text-primary">Arisman</h1>
          <span className="h-1.5 w-1/6 bg-secondary"></span>
          <h2 className="text-xl text-secondary">Frontend Developer</h2>
        </main>
        <div className="w-full flex justify-center flex-col items-center">
          <FaAngleDown className="text-center text-4xl animate-bounce" />
          <span className="w-full h-2 bg-primary"></span>
        </div>
      </div>
      <div className="relative">
        <div className="relative w-full">
          <Image src={Wheater} layout="responsive" />
          <div className="absolute w-full h-full top-0 left-0 bg-base bg-opacity-80"></div>
          <p className="absolute top-3 right-4 px-2 text-center border-2 border-primary rounded-full w-fit text-sm text-primary">
            1
          </p>
          <div className="absolute w-full bottom-3 left-0 px-4">
            <p className="text-secondary">Wheater App</p>
            <div className="w-full flex gap-2">
              <span className="w-1/4 h-0.5 bg-primary"></span>
              <span className="w-3/4 h-0.5 bg-gray-600"></span>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <Image src={Wheater} layout="responsive" />
          <div className="absolute w-full h-full top-0 left-0 bg-base bg-opacity-80"></div>
          <p className="absolute top-3 right-4 px-2 text-center border-2 border-primary rounded-full w-fit text-sm text-primary">
            2
          </p>
          <div className="absolute w-full bottom-3 left-0 px-4">
            <p className="text-secondary">Wheater App</p>
            <div className="w-full flex gap-2">
              <span className="w-1/4 h-0.5 bg-primary"></span>
              <span className="w-3/4 h-0.5 bg-gray-600"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
