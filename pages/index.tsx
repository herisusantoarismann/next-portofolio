import type { NextPage } from "next";
import Image from "next/image";
import Wheater from "../data/wheater.png";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import BottomLine from "../components/BottomLine/BottomLine";
import ProjectList from "../components/Project/ProjectList";

const projects = [
  {
    name: "Wheater App 1",
    image: Wheater,
  },
  {
    name: "Wheater App 2",
    image: Wheater,
  },
  {
    name: "Wheater App 3",
    image: Wheater,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-base text-white min-h-screen flex flex-col justify-between">
        <Header />
        <Main>
          <h1 className="text-5xl text-center text-primary">Heri Susanto</h1>
          <h1 className="text-5xl text-center text-primary">Arisman</h1>
          <span className="h-1.5 w-1/12 bg-secondary"></span>
          <h2 className="text-xl text-secondary">Frontend Developer</h2>
        </Main>
        <BottomLine />
      </div>
      <ProjectList projects={projects} />
    </>
  );
};

export default Home;
