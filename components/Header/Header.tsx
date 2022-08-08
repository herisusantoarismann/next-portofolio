import React from "react";
import { FaBars } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [menu, setMenu] = React.useState<boolean>(false);

  return (
    <header className="px-3 py-2 md:px-6 md:py-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl cursor-pointer">L7</h1>
      <FaBars
        className="text-2xl lg:text-4xl cursor-pointer transition duration-150 hover:text-primary"
        onClick={() => setMenu(true)}
      />
      <Navigation menu={menu} setMenu={setMenu} />
    </header>
  );
};

export default Header;
