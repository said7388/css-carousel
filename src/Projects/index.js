import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useProject from '../Hooks/useProject';
import Project from './Project';
import './Projects.css';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { projects } = useProject();

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const goToNextSlide = () => {
    if (currentSlide === projects.length - 3) return;

    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <div className="projects-section">
      <div className="overview">
        <h2 className="overview-title">
          OVERVIEW
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi tempore, ab reiciendis libero, autem numquam nihil officia sit quasi vero neque totam voluptas dignissimos molestias voluptates, provident distinctio eaque iure placeat aut expedita nesciunt consequatur? Molestiae dolore ipsam itaque quas, magnam officia esse sint beatae eaque voluptas blanditiis corporis quos sequi, architecto eius quod aut aperiam fugit accusamus laudantium rem.
        </p>
      </div>

      <div className="projects-container">
        <div
          className="projects-wrapper"
          style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
          {
            projects.map((project, index) => (
              <Project key={index} project={project} currentSlide={currentSlide} />
            ))
          }
        </div>
        <button className="project-prev-btn" onClick={goToPreviousSlide}>
          <FaArrowLeftLong />
        </button>
        <button className="project-next-btn" onClick={goToNextSlide}>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default Projects;