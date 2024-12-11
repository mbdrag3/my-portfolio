// src/components/pages/Intro.jsx
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../../styles/intro.css';

function Intro() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/app/home');
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: '#121212',
      },
    },
    fpsLimit: 60,
    particles: {
      color: { value: '#7DF9FF' },
      links: {
        color: '#7DF9FF',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 40,
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  
    /* Add the interactivity configuration here */
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',  // When hovering over particles, lines connect them to the cursor
        },
        onClick: {
          enable: true,
          mode: 'push',  // On click, more particles are added
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,  // Number of particles added on each click
        },
      },
    },
  };
  

  return (
    <div className="intro">
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <div className="intro-content">
        <h1>Click below to get to know more about me</h1>
        <p>Discover my projects, experience, and ideas</p>
        <button onClick={handleEnter} className='intro-button'>Enter</button>
      </div>
    </div>
  );
}

export default Intro;
