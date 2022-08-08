import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 px-3 py-2">
      &copy; {new Date().getFullYear()}. All Right Reversed.
    </footer>
  );
};

export default Footer;
