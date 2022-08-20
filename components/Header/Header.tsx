import React from "react";
import { FaBars } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import Logo from "../../data/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = React.useState<boolean>(false);

  return (
    <header className="px-3 py-2 md:px-6 md:py-4 flex justify-between items-center">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          className="filter invert"
          width={300}
          height={300}
        />
      </Link>
      <FaBars
        className="text-2xl lg:text-4xl cursor-pointer transition duration-150 hover:text-primary"
        onClick={() => setMenu(true)}
      />
      <Navigation menu={menu} setMenu={setMenu} />
    </header>
  );
};

export default Header;
