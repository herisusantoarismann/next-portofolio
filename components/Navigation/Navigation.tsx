import React from "react";
import { FaTimes } from "react-icons/fa";
import Footer from "../Footer/Footer";
import NavigationList from "./NavigationList";

interface Props {
  menu: boolean;
  setMenu: (args0: boolean) => void;
}

const Navigation = ({ menu, setMenu }: Props) => {
  return (
    <nav
      className={`${
        menu ? "translate-y-0" : "-translate-y-full"
      } fixed h-screen inset-0 bg-base bg-opacity-80 z-10 transition duration-300 ease-in-out`}
    >
      <div className="py-2 px-3 flex justify-between items-center">
        <h1 className="font-bold text-2xl">L7</h1>
        <FaTimes className="text-2xl" onClick={() => setMenu(false)} />
      </div>
      <NavigationList />
      <Footer />
    </nav>
  );
};

export default Navigation;
