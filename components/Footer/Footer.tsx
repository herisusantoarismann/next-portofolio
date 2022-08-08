import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 px-3 py-2 md:px-6 md:py-4 md:text-lg tracking-wider">
      &copy; {new Date().getFullYear()}. All Right Reversed.
    </footer>
  );
};

export default Footer;
