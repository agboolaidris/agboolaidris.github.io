import React, { useEffect } from "react";
import idris from "../../imgs/idris.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Progress from "./Progress";
import Resume from "../../imgs/Resume.pdf";
function Welcome() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="wrapper" id="about">
      <div className="title">
        <h2>About</h2>
        <div className="underline"></div>
      </div>
      <div className="welcome">
        <div className="div" data-aos="fade-right">
          <div className="img-container">
            <img src={idris} alt="" />
          </div>
          <h3>Hi, I'm Idris. Nice to meet you.</h3>
          <p>
            Self taught full-stack developer, Proficient In HTML, CSS, and
            Javascript and train as a MERN stack. seeking new opportunities in
            the development. My primary objective is to apply my technical
            expertise all throughout the full software life cycle to ensure
            production and delivery of products and services that meet client
            specifications. My experience as software developer enhanced my
            abilities in designing, implementing, testing, and upgrading
            software.
          </p>
        </div>
        <div className="progressive" data-aos="fade-left">
          <Progress />
        </div>
        <div className="download">
          <div>
            <a href={Resume} download="Resume">
              <i className="fas fa-download"></i>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
