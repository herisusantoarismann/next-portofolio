import React from "react";
import AboutItem from "./AboutItem";

export interface TAbout {
  title: string;
  description: string;
}

const data_about = [
  {
    title: "About",
    description:
      "As a frontend developer I like to turn a design into simple and fast code. Challenging algorithm problems is fun for me. I love to see and live anything structured and planned.",
  },
  {
    title: "Tech Stack",
    description:
      "HTML, CSS, Javascript, React JS, Vue JS, Next JS, Typescript, Nuxt JS.",
  },
];

const work_experiences = [
  {
    job: "Web Developer",
    type: "Intern",
    company: "Ruang Seminar",
    startDate: "September 2020",
    endDate: "November 2020",
    yearsExperiences: "2 Month",
    skills: ["React Js", "Semantic UI"],
  },
  {
    job: "Frontend Developer",
    type: "Full Time",
    company: "iCreativelabs",
    startDate: "November 2022",
    endDate: "February 2024",
    yearsExperiences: "1 years 3 Month",
    skills: ["Nuxt Js", "Tailwinds"],
  },
];

const AboutList = () => {
  return (
    <div className="bg-base text-white px-4 py-6 lg:py-12">
      <div className="md:w-3/4 xl:w-2/4 md:mx-auto flex flex-col md:flex-row gap-4 lg:gap-24">
        {data_about.map((item: TAbout, i: number) => {
          return <AboutItem data={item} key={i} />;
        })}
      </div>
      <div className="mt-4 md:w-3/4 xl:w-2/4 md:mx-auto flex flex-col md:flex-row gap-4 lg:gap-24">
        <div className="md:flex-1">
          <h2 className="text-lg md:text-xl xl:text-2xl">Work Experiences</h2>
          <div className="w-full flex gap-2">
            <span className="w-1/6 xl:w-1/6 h-0.5 lg:h-1 bg-primary"></span>
            <span className="w-5/6 xl:w-5/6 h-0.5 lg:h-1 bg-gray-600"></span>
          </div>
          <div className="space-y-6">
            {work_experiences.map((item) => {
              return (
                <div className="tracking-widest">
                  <div className="flex items-center gap-1">
                    <h4 className="lg:text-lg">{item.job}</h4>|
                    <span className="text-sm lg:text-normal">
                      {item.company}
                    </span>
                  </div>
                  <div className="text-xs lg:text-sm flex items-center gap-2">
                    <span>
                      {item.startDate} - {item.endDate}
                    </span>{" "}
                    <span className="text-gray-400 italic">
                      {item.yearsExperiences}
                    </span>
                  </div>
                  <div className="text-xs lg:text-sm mt-1 flex items-center gap-2">
                    {item.skills.map((skill) => {
                      return (
                        <span className="px-2 py-0.5 rounded-full border border-white">
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutList;
