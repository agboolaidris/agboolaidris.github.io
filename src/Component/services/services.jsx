import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);
  return (
    <div className="services">
      <div className="services-title">
        <h2>Offered services</h2>
        <p>
          Web development have been part of my daily routine for more than 2
          years. During that time I've discovered that I can help startups and
          companies with the following services
        </p>
      </div>
      <div className="service-card-wrapper">
        <div className="service-card" data-aos="flip-down">
          <span>
            <i className="fas fa-code"></i>
          </span>
          <h3>Development</h3>
          <p>
            I develop software with modern technology and follow the client
            requirement. My focus is to generate clean code that's well
            structured for reliability
          </p>
        </div>
        <div className="service-card" data-aos="flip-down">
          <span>
            <i className="fas fa-pencil-ruler"></i>
          </span>
          <h3>Design</h3>
          <p>
            Successful online projects start with good design. It establishes a
            solid foundation for future development and allows for long term
            growth
          </p>
        </div>
        <div className="service-card" data-aos="flip-down">
          <span>
            <i className="fas fa-tv"></i>
          </span>
          <h3>Basic SEO</h3>
          <p>
            During development, I make sure my project follow the basic SEO
            principle,which will push our project to the first page on search
            engines and save us ads money.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
