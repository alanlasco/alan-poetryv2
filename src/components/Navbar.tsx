import React, { useState } from "react";

import "../styles/navbar.css";
import "../styles/burger.css";

export const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return <nav className="nav-container"></nav>;
};
