import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 100, 
          },
          shape: {
            type: "circle", 
          },
          size: {
            value: 8, 
            random: true, 
          },
          move: {
            enable: true,
            speed: 2, 
            direction: "none",
            random: false,
            straight: false,
            outMode: "out", 
            bounce: false,
          },
          links: {
            enable: true, 
            distance: 150,
            color: "#ffffff", 
            opacity: 0.5,
            width: 1,
          },
          color: {
            value: "#ff0000", 
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", 
            },
            onClick: {
              enable: true,
              mode: "push", 
            },
            resize: true, 
          },
        },
        retina_detect: true, 
      }}
    />
  );
};

export default ParticlesBackground;
