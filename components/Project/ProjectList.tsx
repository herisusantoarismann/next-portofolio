import { StaticImageData } from "next/image";
import React from "react";
import ProjectItem from "./ProjectItem";

export interface Project {
  name: string;
  image: StaticImageData;
  stack: string[];
  url: string;
  description: string;
}

interface Props {
  projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="bg-base relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: Project, i: number) => {
        return <ProjectItem project={project} number={i} key={i} />;
      })}
    </div>
  );
};

export default ProjectList;
