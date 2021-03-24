import React, { useState } from "react";
import Menu from "../../imgs/bar.svg";
import Multiply from "../../imgs/multiply.png";
import Items from "./Items";

function Navbar() {
  const [harmburger, setharmburger] = useState(true);
  const [items, setitems] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setitems(true);
    } else {
      setitems(false);
    }
  });

  const handleClick = () => {
    if (harmburger) {
      setharmburger(false);
    } else {
      setharmburger(true);
    }
  };
  return (
    <nav className={items ? "active nav" : "nav"}>
      <a className="logo">IRIS-CODER</a>

      <div className="harmburger" onClick={handleClick}>
        {harmburger ? (
          <img src={Menu} alt="harmburger" />
        ) : (
          <img src={Multiply} alt="" />
        )}
      </div>

      <Items harmburger={harmburger} handleClick={handleClick} />
    </nav>
  );
}

export default Navbar;
