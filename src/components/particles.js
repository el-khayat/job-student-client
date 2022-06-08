import React from "react";
import Particles from "react-tsparticles";
// import './Particles.css'

const particles = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        // url="http://foo.bar/particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              // value: "#ff0000",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
              onclick: { enable: false, mode: "repulse" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 10, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#6b85ff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 3 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 0.9744926547616141,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 70,
              color: "#ffffff",
              opacity: 1,
              width: 1.4430708547789706
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default particles;
