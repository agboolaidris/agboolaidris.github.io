import React from "react";
import { Link } from "react-scroll";
import Text from "./Text";
import arrow from "../../imgs/arrowdown.svg";
import idris from "../../imgs/idris.png";

function Content() {
  return (
    <div className=" content" id="home">
      <div className="context">
        <p className="name-text">Hello, I'm Idris</p>
        <Text />
        <div>
          <Link to="about" className="arrow" smooth={true} duration={1500}>
            <img src={arrow} alt="" />
          </Link>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
          <li>
            <img src={idris} alt="idris" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
