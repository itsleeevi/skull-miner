import { useSpring, animated } from "react-spring";
import Image from "next/image";
import skull1 from "../public/image/skull1.png";
import skull2 from "../public/image/skull2.png";
import skull3 from "../public/image/skull3.png";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: {
          value: "#000",
        },
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      fullScreen: {
        zIndex: 1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onDiv: {
            selectors: "#repulse-div",
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              force: 60,
            },
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          grab: {
            distance: 400,
          },
          repulse: {
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: {
            value: "#000",
          },
          distance: 150,
          opacity: 0.4,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          enable: true,
          outModes: {
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          random: {
            enable: true,
          },
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.2,
          },
        },
        rotate: {
          random: {
            enable: true,
          },
          animation: {
            enable: true,
            speed: 5,
          },
          direction: "random",
        },
        shape: {
          options: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            char: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            polygon: {
              sides: 5,
            },
            star: {
              sides: 5,
            },
            image: [
              {
                src: "https://i.ibb.co/5K8MtW3/skull1.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://i.ibb.co/BHJVFTZ/icons8-pumpkin-64.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://i.ibb.co/rsWbD9x/skull2.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://i.ibb.co/C9jy9vH/skull3.png",
                width: 42,
                height: 32,
              },
            ],
            images: [
              {
                src: "https://i.ibb.co/5K8MtW3/skull1.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://i.ibb.co/BHJVFTZ/icons8-pumpkin-64.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://i.ibb.co/rsWbD9x/skull2.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://i.ibb.co/C9jy9vH/skull3.png",
                width: 42,
                height: 32,
              },
            ],
          },
          type: "image",
        },
        size: {
          value: 16,
          animation: {
            speed: 40,
            minimumValue: 0.1,
          },
        },
        stroke: {
          color: {
            value: "#000000",
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
            },
          },
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
