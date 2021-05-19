import React from "react";

function CardGroup({ project }) {
  return (
    <div className="project-card">
      <div className="project-imgBox">
        <img src={project.imageURL} alt="" />
      </div>
      <div className="details">
        <p>
          <span className="content">Name:</span>
          <span className="detail"> {project.name} </span>
        </p>
        <p>
          <span className="content">Detail: </span>
          <span className="detail">{project.description}</span>
        </p>
        <a href={project.websiteURL} target="_blank" rel="noopener noreferrer">
          View Site
        </a>
      </div>
    </div>
  );
}

export default CardGroup;
