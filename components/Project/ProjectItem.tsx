import React from "react";
import Image from "next/image";
import { Project } from "./ProjectList";

interface Props {
  project: Project;
  number: number;
}

const ProjectItem = ({ project, number }: Props) => {
  const [showStack, setShowStack] = React.useState<boolean>(false);

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer"
      onMouseOver={() => setShowStack(true)}
      onMouseLeave={() => setShowStack(false)}
    >
      <Image src={project.image} layout="responsive" />
      <div
        className={`${
          showStack ? "bg-opacity-0" : "bg-opacity-90"
        } absolute w-full h-full top-0 left-0 bg-base transition duration-30  0`}
      ></div>
      <p className="absolute top-3 right-4 px-2 lg:px-3 text-center md:text-lg border-2 border-primary rounded-full w-fit text-sm text-primary">
        {number + 1}
      </p>
      <div
        className={`${
          showStack
            ? "translate-y-3 bg-opacity-90"
            : "translate-y-6 bg-opacity-0"
        } absolute w-full bottom-3 left-0 px-4 lg:pt-2 xl:pt-12 bg-base transition duration-150`}
      >
        <p className="text-secondary md:text-lg xl:text-2xl">{project.name}</p>
        <div className="w-full flex gap-2">
          <span className="w-1/4 xl:w-1/6 h-0.5 lg:h-1 bg-primary"></span>
          <span className="w-3/4 xl:w-5/6 h-0.5 lg:h-1 bg-gray-600"></span>
        </div>
        <div
          className={`${
            showStack ? "opacity-100 pb-4" : "opacity-0"
          } text-secondary xl:text-xl transition duration-400`}
        >
          <p>Vue JS</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
