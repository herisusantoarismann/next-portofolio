import type { NextPage } from "next";
import LayoutMain from "../layouts/Main";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heri S.A. | Home</title>
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
    </>
  );
};

export default Home;
