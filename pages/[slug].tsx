import Image from "next/image";
import React from "react";
import MainLayout from "../layouts/Main";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Project } from "../components/Project/ProjectList";
import { projects } from ".";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

interface parentHover {
  left: boolean;
  right: boolean;
}

const Detail = () => {
  const [data, setData] = React.useState<Project | undefined>(undefined);
  const [parentHover, setParentHover] = React.useState<parentHover>({
    left: false,
    right: false,
  });
  const { query } = useRouter();

  React.useEffect(() => {
    projects.map((project: Project) => {
      if (project.url === query.slug) {
        setData(project);
      }
    });
  }, [query.slug]);

  return (
    <>
      {data ? (
        <>
          <Head>
            <title>L7 | {data.name}</title>
          </Head>
          <MainLayout>
            <p className="px-3 xl:px-4 xl:py-0.5 text-xl lg:text-2xl xl:text-3xl text-primary border-2 border-primary rounded-full">
              {data.id + 1}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary">
              {data.name}
            </h1>
            <span className="h-1 w-1/6 md:w-1/12 xl:w-24 -mt-2 bg-secondary"></span>
            <p className="text-center w-3/4 xl:w-2/4 tracking-widest text-lg md:text-xl">
              {data.description}
            </p>
            <button className="py-1 px-4 bg-primary text-base lg:text-xl font-semibold border border-transparent tracking-wider rounded transition duration-150 hover:bg-transparent hover:border hover:border-primary hover:text-primary">
              Visit Site
            </button>
          </MainLayout>
          <div className="bg-base pb-3 lg:pb-6 flex flex-col gap-4">
            <div className="w-full">
              <Image src={data.image} layout={"responsive"} />
            </div>
            <div className="px-4 lg:w-2/4 lg:mx-auto">
              <p className="text-secondary md:text-xl xl:text-2xl tracking-wider">
                {data.name}
              </p>
              <div className="w-full flex gap-2">
                <span className="w-1/4 md:w-1/12 h-0.5 lg:h-1 bg-primary"></span>
                <span className="w-full h-0.5 lg:h-1 bg-gray-600"></span>
              </div>
              <div
                className={`text-secondary xl:text-xl transition duration-400`}
              >
                <p className="tracking-wider md:text-xl">
                  {data.stack.map((item: string, i: number) =>
                    data.stack.length - 1 === i ? `${item}` : `${item}, `
                  )}
                </p>
              </div>
            </div>
            <div
              className={`px-2 lg:px-6 mt-6 lg:mt-12 text-secondary flex ${
                data.id !== 0 ? "justify-between" : "justify-end"
              }`}
            >
              {data.id !== 0 && (
                <Link href={projects[data.id - 1].url}>
                  <div
                    className="flex items-center cursor-pointer"
                    onMouseOver={() =>
                      setParentHover((prevState) => ({
                        ...prevState,
                        left: true,
                      }))
                    }
                    onMouseLeave={() =>
                      setParentHover((prevState) => ({
                        ...prevState,
                        left: false,
                      }))
                    }
                  >
                    <FaAngleLeft
                      className={`text-xl xl:text-2xl ${
                        parentHover.left && "animate-bounce-left text-primary"
                      }`}
                    />
                    <p
                      className={`md:text-lg lg:text-xl xl:text-2xl transition duration-150 ${
                        parentHover.left && "text-primary"
                      }`}
                    >
                      Previous Project
                    </p>
                  </div>
                </Link>
              )}
              {data.id !== projects.length - 1 && (
                <Link href={projects[data.id + 1].url}>
                  <div
                    className="flex items-center cursor-pointer"
                    onMouseOver={() =>
                      setParentHover((prevState) => ({
                        ...prevState,
                        right: true,
                      }))
                    }
                    onMouseLeave={() =>
                      setParentHover((prevState) => ({
                        ...prevState,
                        right: false,
                      }))
                    }
                  >
                    <p
                      className={`md:text-lg lg:text-xl xl:text-2xl transition duration-150 ${
                        parentHover.right && "text-primary"
                      }`}
                    >
                      Next Project
                    </p>
                    <FaAngleRight
                      className={`text-xl xl:text-2xl ${
                        parentHover.right && "animate-bounce-right text-primary"
                      }`}
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Salah url</p>
      )}
    </>
  );
};

export default Detail;
