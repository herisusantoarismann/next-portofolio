import Head from "next/head";
import React from "react";
import BottomLine from "../components/BottomLine/BottomLine";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";

interface Props {
  children: React.ReactNode;
  withArrow?: boolean;
}

const Main = ({ children, withArrow = false }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Portofolio Website" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, NextJS, Tailwindcss, Typescript"
        />
        <meta name="author" content="Heri Susanto Arisman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-base text-white min-h-screen flex flex-col justify-between">
        <Header />
        <Content>{children}</Content>
        <BottomLine withArrow={withArrow} />
      </div>
    </>
  );
};

export default Main;
