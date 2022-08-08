import { StaticImageData } from "next/image";
import React from "react";
import ProjectItem from "./ProjectItem";

export interface Project {
  name: string;
  image: StaticImageData;
}

interface Props {
  projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="relative">
      {projects.map((project: Project, i: number) => {
        return <ProjectItem project={project} number={i} key={i} />;
      })}
    </div>
  );
};

export default ProjectList;
