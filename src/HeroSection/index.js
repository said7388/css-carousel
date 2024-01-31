import React, { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong, FaRegHeart } from "react-icons/fa6";
import useProject from '../Hooks/useProject';
import './HeroSection.css';
import SelectedProject from './SelectedProject';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { projects } = useProject();

  const goToPreviousSlide = () => {
    if (currentSlide === 0) return;

    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const goToNextSlide = () => {
    if (currentSlide === projects.length - 2) return;
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <div className="hero-section">
      <div className="projects-area">
        <div className="hero-project-wrapper">
          <SelectedProject project={projects[currentSlide]} />

          <div className="slide-container">
            <div className="slide-wrapper"
              style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
              {
                projects.map((project, index) => (
                  <div key={index}
                    className={`hero-slide ${currentSlide === index && "active-slide"}`}>
                    <img
                      className='hero-img'
                      src={project.data.images?.list[0]?.full_path}
                      alt={`slide-${index}`}
                    />
                    <button className="favorite">
                      <FaRegHeart />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="controller-buttons">
          <button className="hero-btn" onClick={goToPreviousSlide}>
            <FaArrowLeftLong />
          </button>
          <button className="hero-btn" onClick={goToNextSlide}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="bg-area"></div>
    </div>
  );
}

export default HeroSection;