import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="services">
      <div className="services-title">
        <h2>Offered services</h2>
        <p>
          Web design and development have been my bread and butter for more than
          5 years. During that time I've discovered that I can help startups and
          companies with the following services
        </p>
      </div>
      <div className="service-card-wrapper">
        <div className="service-card">
          <span>
            <i className="fas fa-code"></i>
          </span>
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            iure culpa soluta earum vero sed fugit corporis minus.
            Exercitationem consequuntur maxime provident iste odit excepturi
            tempora magni distinctio perferendis nulla.
          </p>
        </div>
        <div className="service-card">
          <span>
            <i className="fas fa-pencil-ruler"></i>
          </span>
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            iure culpa soluta earum vero sed fugit corporis minus.
            Exercitationem consequuntur maxime provident iste odit excepturi
            tempora magni distinctio perferendis nulla.
          </p>
        </div>
        <div className="service-card">
          <span>
            <i className="fas fa-tv"></i>
          </span>
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            iure culpa soluta earum vero sed fugit corporis minus.
            Exercitationem consequuntur maxime provident iste odit excepturi
            tempora magni distinctio perferendis nulla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
