import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

export interface Project {
  id: number;
  name: string;
  image: StaticImageData;
  stack: string[];
  url: string;
  site: string;
  description: string;
}

interface Props {
  projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="bg-base relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: Project, i: number) => {
        return (
          <a href={project.url} key={i} target="_blank">
            <ProjectItem project={project} number={i} />
          </a>
        );
      })}
    </div>
  );
};

export default ProjectList;
