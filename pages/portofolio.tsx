import { NextPage } from "next";
import Head from "next/head";
import LayoutMain from "../layouts/Main";
import ProjectList from "../components/Project/ProjectList";

import Flou from "../data/flou.png";
import TelkomInfra from "../data/telkominfra.png";
import UKMDigital from "../data/ukmdigital.png";
import WheaterApp from "../data/wheater.png";
import QuizApp from "../data/quiz.png";
import GuessColor from "../data/quesscolor.png";

export const projects = [
  {
    id: 0,
    name: "Flou Cloud",
    description:
      "Flou is supported with a fast network infrastructure, combined with the best track record in software, data center infrastructure, and managed IT services.",
    url: "https://floucloud.id/",
    site: "https://floucloud.id/",
    image: Flou,
    stack: ["Nuxt JS", "Tailwindcss"],
  },
  {
    id: 1,
    name: "Telkom Infra",
    description: "Telkom Infra",
    url: "https://telkominfra.co.id/",
    site: "https://telkominfra.co.id/",
    image: TelkomInfra,
    stack: ["Nuxt JS", "Tailwindcss"],
  },
  {
    id: 2,
    name: "UKMDigital",
    description: "UKM Digital",
    url: "https://ukm.digital/",
    site: "https://ukm.digital/",
    image: UKMDigital,
    stack: ["Vue JS", "Tailwindcss", "Codeigniter"],
  },
  {
    id: 3,
    name: "Wheater App",
    description: "Wheater App",
    url: "https://vue-wheater-app.vercel.app/",
    site: "https://vue-wheater-app.vercel.app/",
    image: WheaterApp,
    stack: ["Vue JS", "Tailwindcss"],
  },
  {
    id: 4,
    name: "Quiz App",
    description: "Quiz App",
    url: "https://h-next-quiz.vercel.app/",
    site: "https://h-next-quiz.vercel.app/",
    image: QuizApp,
    stack: ["Next JS", "Material UI"],
  },
  {
    id: 5,
    name: "Guess Color",
    description: "Guess Color",
    url: "https://react-guesscolor.vercel.app/",
    site: "https://react-guesscolor.vercel.app/",
    image: GuessColor,
    stack: ["React JS"],
  },
];

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heri S.A. | Portofolio</title>
      </Head>
      <LayoutMain withArrow>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-primary">
          Portofolio
        </h1>
      </LayoutMain>
      <ProjectList projects={projects} />
    </>
  );
};

export default About;
