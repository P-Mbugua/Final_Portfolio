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
            value: 100, // Number of particles
          },
          shape: {
            type: "circle", // Particle shape
          },
          size: {
            value: 8, // Larger particle size for visibility
            random: true, // Randomize size
          },
          move: {
            enable: true,
            speed: 2, // Speed of particle movement
            direction: "none",
            random: false,
            straight: false,
            outMode: "out", // Ensure particles move outside the canvas
            bounce: false,
          },
          links: {
            enable: true, // Enable lines between particles
            distance: 150,
            color: "#ffffff", // Line color (white for visibility)
            opacity: 0.5,
            width: 1,
          },
          color: {
            value: "#ff0000", // Bright red particles for high visibility
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Repulse effect on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Add particles on click
            },
            resize: true, // Ensure particles adapt to screen resize
          },
        },
        retina_detect: true, // High DPI support
      }}
    />
  );
};

export default ParticlesBackground;
