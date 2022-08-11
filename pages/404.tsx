import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import NotFoundImage from "../data/404.gif";

const NotFound = () => {
  const router = useRouter();

  const backHome = () => {
    router.push("/");
  };

  return (
    <div className="relative bg-secondary min-h-screen flex flex-col justify-center items-center">
      <div className="w-2/4 text-sm md:w-1/4">
        <Image src={NotFoundImage} alt="" />
      </div>
      <p className="text-xl lg:text-2xl xl:text-5xl">
        Looks like you got lost...
      </p>
      <p className="text-sm lg:text-lg xl:text-2xl">
        Come on, I will take you{" "}
        <span
          className="text-primary transition duration-150 hover:underline cursor-pointer"
          onClick={() => backHome()}
        >
          home
        </span>
      </p>
      <div className="absolute bottom-2 left-2 text-xs lg:text-normal xl:text-xl">
        Illustration by{" "}
        <a href="https://icons8.com/illustrations/author/7WmtYU90j36d">
          Fruzka
        </a>{" "}
        from <a href="https://icons8.com/illustrations">Ouch!</a>
      </div>
    </div>
  );
};

export default NotFound;
