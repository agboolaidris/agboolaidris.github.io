import React, { useEffect } from "react";
import idris from "../../imgs/idris.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Welcome() {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <div className="welcome" id="about">
      <div className="welcome-img" data-aos="flip-down">
        <div className="img-container">
          <img src={idris} alt="idris" />
        </div>
      </div>

      <div className="welcome-msg" data-aos="flip-down">
        <h3>Hi, I'm Idris. Nice to meet you.</h3>
        <p>
          Self taught full-stack developer, Proficient In HTML, CSS, and
          Javascript and train as a MERN stack. seeking new opportunities in the
          development. My primary objective is to apply my technical expertise
          all throughout the full software life cycle to ensure production and
          delivery of products and services that meet client specifications. My
          experience as software developer enhanced my abilities in designing,
          implementing, testing, and upgrading software.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
