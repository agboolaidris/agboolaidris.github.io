import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="container">
      <div data-aos="flip-down">
        <div className="card">
          <div className="imgBx">
            <i className="fas fa-code 5x"></i>
          </div>
          <div className="contents">
            <span>front-end skill</span>
            <p>
              Writing well designed, efficient code by using best software
              development practices.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="flip-down">
        <div className="card">
          <div className="imgBx">
            <i className="fas fa-database"></i>
          </div>
          <div className="contents">
            <span>Back-end skill</span>
            <p>
              Design and implementation of low-latency, high-availabilty, and
              performance application
            </p>
          </div>
        </div>
      </div>
      <div data-aos="flip-down">
        <div className="card">
          <div className="imgBx">
            <i className="fas fa-drafting-compass"></i>
          </div>
          <div className="contents">
            <span>design skill</span>
            <p>
              Creative, analytical, and understand interaction design principles
            </p>
          </div>
        </div>
      </div>
      <div data-aos="flip-down">
        <div className="card">
          <div className="imgBx">
            <i className="fas fa-handshake"></i>
          </div>
          <div className="contents">
            <span>Soft skill</span>
            <p>
              Excellent communication and demonstrate good leadership, trust and
              support with the entire team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
