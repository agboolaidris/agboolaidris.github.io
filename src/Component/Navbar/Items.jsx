import React from "react";
import { Link } from "react-scroll";
function Items({ harmburger, handleClick }) {
  return (
    <div className={!harmburger ? "menu menu-active" : " menu"}>
      <ul className="menu-link">
        <li>
          <Link to="home" onClick={handleClick} smooth={true} duration={1500}>
            Home
          </Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="about" onClick={handleClick} smooth={true} duration={1500}>
            About
          </Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link
            to="project"
            onClick={handleClick}
            smooth={true}
            duration={1500}
          >
            Project
          </Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link
            to="testimonial"
            onClick={handleClick}
            smooth={true}
            duration={1500}
          >
            Testimonial
          </Link>
          <div className="underline"></div>
        </li>

        <li>
          <Link
            to="contact"
            onClick={handleClick}
            smooth={true}
            duration={1500}
          >
            Contact
          </Link>
          <div className="underline"></div>
        </li>
      </ul>
      <ul className="social">
        <li>
          <a onClick={handleClick} href="https://github.com/agboolaidris">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            href="https://www.linkedin.com/in/idris-i-agboola-b24415190?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be960e4be-281a-4927-b64b-8522911dc9fc"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="https://twitter.com/Agboola_II">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a onClick={handleClick} href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Items;
