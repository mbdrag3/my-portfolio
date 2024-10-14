// src/components/pages/Intro.jsx
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import '../../styles/intro.css';
import background from '../../assets/81676-576083179_small.mp4'; // Import the video

function Intro() {
  const navigate = useNavigate();
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    // Add specific classes to root and body elements for the Intro page
    document.body.classList.add('intro-page');
    document.getElementById('root').classList.add('intro-root');

    return () => {
      document.body.classList.remove('intro-page');
      document.getElementById('root').classList.remove('intro-root');
    };
  }, []);

  // React Spring animation for expanding circle
  const circleProps = useSpring({
    transform: reveal ? 'scale(20)' : 'scale(0)',
    config: { duration: 1500 },
    onRest: () => {
      if (reveal) {
        navigate('/app/home');
      }
    },
  });

  const handleEnter = () => {
    setReveal(true);
  };

  return (
    <div className="intro">
      <video className="background-video" autoPlay muted loop>
        <source src={background} type="video/mp4" />
      </video>

      {!reveal && (
        <div className="intro-content">
          <h1>Welcome!! Click to start exploring!</h1>
          <button onClick={handleEnter}>Enter</button>
        </div>
      )}
      <animated.div className="circle-reveal" style={circleProps} />
    </div>
  );
}

export default Intro;
