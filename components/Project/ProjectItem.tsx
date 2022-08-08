import React from "react";
import Image from "next/image";
import { Project } from "./ProjectList";

interface Props {
  project: Project;
  number: number;
}

const ProjectItem = ({ project, number }: Props) => {
  return (
    <div className="relative w-full">
      <Image src={project.image} layout="responsive" />
      <div className="absolute w-full h-full top-0 left-0 bg-base bg-opacity-80"></div>
      <p className="absolute top-3 right-4 px-2 text-center border-2 border-primary rounded-full w-fit text-sm text-primary">
        {number + 1}
      </p>
      <div className="absolute w-full bottom-3 left-0 px-4">
        <p className="text-secondary">{project.name}</p>
        <div className="w-full flex gap-2">
          <span className="w-1/4 h-0.5 bg-primary"></span>
          <span className="w-3/4 h-0.5 bg-gray-600"></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
