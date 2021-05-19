import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CardGroup from "./ProjectCard/CardGroup";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const projects = [
    {
      id: "1",
      name: "Reddit Clone",
      websiteURL: "https://clone-reddit-app.herokuapp.com",
      description:
        "Reddit web appliaction clone built using Nextjs and built response layout with Tailwindcss. create Backend RestAPI server with ExpressJS and Manage store data with MySQL database",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd9ZC-jUmpELkpk6UC4sqkZeYE7s0PrH7gA&usqp=CAU",
    },
    {
      id: "2",
      name: "E-commerce",
      description:
        "A clone of FlipKart an indian based e-commerce website, implement the main application page with React with Redux and TailwindCSS for the client side. create Backend RestAPI server with ExpressJS and Manage store data with MoongoDB database",
      imageURL:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--sxby4dcG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/kcv0c0itp9fv0hbafo3y.jpg",
    },
    {
      id: "3",
      name: "Blog-website",
      description:
        "Dynamic Blog website created the server with Nodejs/Express and manage the database with MongoDB and Moongose.",
      imageURL:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div id="project">
      <div className="project-title" data-aos="flip-up">
        <h2>Projects</h2>
      </div>
      <div className="project">
        {projects.map((project) => {
          return <CardGroup project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Project;
