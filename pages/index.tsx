import type { NextPage } from "next";
import Wheater from "../data/wheater.png";
import LayoutMain from "../layouts/Main";
import Header from "../components/Header/Header";
import BottomLine from "../components/BottomLine/BottomLine";
import ProjectList from "../components/Project/ProjectList";
import Content from "../components/Content/Content";
import Head from "next/head";

const projects = [
  {
    name: "Wheater App 1",
    image: Wheater,
    stack: ["Vue Js", "Tailwindcss"],
  },
  {
    name: "Wheater App 2",
    image: Wheater,
    stack: ["React Js", "Material UI"],
  },
  {
    name: "Wheater App 3",
    image: Wheater,
    stack: ["Next Js", "Tailwindcss"],
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>L7 | Home</title>
      </Head>
      <LayoutMain>
        <h1 className="text-5xl md:text-6xl xl:text-7xl text-center text-primary">
          Heri Susanto
        </h1>
        <h1 className="text-5xl md:text-6xl xl:text-7xl text-center text-primary">
          Arisman
        </h1>
        <span className="h-1.5 w-1/12 xl:w-24 bg-secondary"></span>
        <h2 className="text-xl text-secondar md:text-2xl xl:text-3xl">
          Frontend Developer
        </h2>
      </LayoutMain>
      <ProjectList projects={projects} />
    </>
  );
};

export default Home;
