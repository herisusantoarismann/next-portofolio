import type { NextPage } from "next";
import Wheater from "../data/wheater.png";
import LayoutMain from "../Layout/Main";
import Header from "../components/Header/Header";
import BottomLine from "../components/BottomLine/BottomLine";
import ProjectList from "../components/Project/ProjectList";
import Content from "../components/Content/Content";

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
      <LayoutMain>
        <Header />
        <Content>
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
        </Content>
        <BottomLine />
      </LayoutMain>
      <ProjectList projects={projects} />
    </>
  );
};

export default Home;
