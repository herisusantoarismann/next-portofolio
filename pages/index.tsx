import type { NextPage } from "next";
import Wheater from "../data/wheater.png";
import LayoutMain from "../layouts/Main";
import ProjectList from "../components/Project/ProjectList";
import Head from "next/head";

export const projects = [
  {
    name: "Wheater App 1",
    description:
      "The weather app is an app that allows users to view conditions, forecasts, temperatures and related metrics from a variety of locations.",
    url: "wheaterapp-1",
    image: Wheater,
    stack: ["Vue JS", "Tailwindcss"],
  },
  {
    name: "Wheater App 2",
    description:
      "The weather app is an app that allows users to view conditions, forecasts, temperatures and related metrics from a variety of locations.",
    url: "wheaterapp-2",
    image: Wheater,
    stack: ["Vue JS", "Material UI"],
  },
  {
    name: "Wheater App 3",
    description:
      "The weather app is an app that allows users to view conditions, forecasts, temperatures and related metrics from a variety of locations.",
    url: "whaterapp-3",
    image: Wheater,
    stack: ["Vue JS", "Tailwindcss"],
  },
  {
    name: "Wheater App 4",
    description:
      "The weather app is an app that allows users to view conditions, forecasts, temperatures and related metrics from a variety of locations.",
    url: "wheaterapp-4",
    image: Wheater,
    stack: ["Vue JS", "Material UI"],
  },
  {
    name: "Wheater App 5",
    description:
      "The weather app is an app that allows users to view conditions, forecasts, temperatures and related metrics from a variety of locations.",
    url: "whaterapp-5",
    image: Wheater,
    stack: ["Vue JS", "Tailwindcss"],
  },
  {
    name: "Wheater App 6",
    description:
      "The weather app is an app that allows users to view conditions, forecasts, temperatures and related metrics from a variety of locations.",
    url: "wheaterapp-6",
    image: Wheater,
    stack: ["Vue JS", "Material UI"],
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
