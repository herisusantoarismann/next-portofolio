import React from "react";
import { FaBars } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [menu, setMenu] = React.useState<boolean>(false);

  return (
    <header className="px-3 py-2 md:px-6 md:py-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">L7</h1>
      <FaBars className="text-2xl" onClick={() => setMenu(true)} />
      <Navigation menu={menu} setMenu={setMenu} />
    </header>
  );
};

export default Header;
