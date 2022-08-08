import type { NextPage } from "next";
import { FaAngleDown, FaBars } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className="bg-base text-white min-h-screen flex flex-col justify-between">
      <header className="px-3 py-2 flex justify-between items-center">
        <div className="font-bold text-2xl">L7</div>
        <FaBars className="text-2xl" />
      </header>
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
  );
};

export default Home;
