// @flow strict
import * as React from 'react';
import { FaRegHeart } from "react-icons/fa6";

function Project({ project, currentSlide, index }) {

  return (
    <div className="project-container">
      <img
        src={project.data.images?.list[0]?.full_path}
        alt={project.data.product_data.title}
        className='project-image'
      />
      <button className="favorite">
        <FaRegHeart />
      </button>
      <div className="project-details">
        <p className='project-title'>
          {project.data.product_data.title}
        </p>
        <p className='project-area'>
          <span>{project.data.product_data.location}</span>
          <span> - </span>
          <span>{project.data.product_data.area}</span>
        </p>
      </div>
    </div>
  );
};

export default Project;