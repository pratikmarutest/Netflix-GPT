import React from "react";
import Logo from "../../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black w-full absolute">
      <img src={Logo} className="h-20 w-40" />
    </div>
  );
};

export default Header;
