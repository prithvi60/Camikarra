import React from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as FirstScene } from "../assets/scene1/first.svg";
import useSound from "use-sound";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

import music from "../assets/music.mp3";
import click from "../assets/click.wav";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import oldmanAni from "../assets/scene1/oldmans1.json";
import ownerAni from "../assets/scene1/owner.json";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { BsSoundwave, BsPlay } from "react-icons/bs";
import Captions from "./Captions";
const settings = {
  canvas: {
    canvasFillSpace: true,
    width: "100%",
    height: "100%",
    useBouncyWalls: false,
  },
  particle: {
    particleCount: 50,
    color: "#edd78a",
    minSize: 2,
    maxSize: 5,
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 360,
    minSpeed: 1,
    maxSpeed: 3,
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.5,
    opacityTransitionTime: 3000,
  },
};
export default function SceneOne({ ref }) {
  // const timeLine = React.useRef();

  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });
  const [playClick] = useSound(click);
  const [isOpen, setIsOpen] = React.useState(true);
  const [on, setOn] = React.useState(false);
  const oldmanRef = React.useRef();
  const ownerRef = React.useRef();
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 8000);
  }, []);
  // console.log("default set", isOpen);
  React.useLayoutEffect(() => {
    gsap.to("#cloud", {
      keyframes: {
        "0%": { x: 0 },
        "50%": {
          x: 100,
        },
        "100%": {
          x: 0,
        },
      },
      repeat: -1,
      duration: 8,
    });
    gsap.to("#whisp-lower1", {
      keyframes: {
        "0%": { xPercent: 10 },
        "100%": {
          xPercent: 150,
        },
      },
      repeat: -1,
      yoyo: true,
      duration: 30,
    });
    gsap.to("#whisp-lower", {
      keyframes: {
        "0%": { xPercent: 10 },
        "100%": {
          xPercent: 150,
        },
      },
      repeat: -1,
      yoyo: true,
      duration: 30,
    });

    gsap.from(".play", {
      duration: 2,
      xPercent: 300,
      ease: "power4",
    });
    gsap.from(".next", {
      duration: 2,
      yPercent: 300,
      ease: "power4",
      delay: 6,
    });
    
    gsap.to("#greens", {
      opacity:0
      });
    // gsap.from("#sugarcane", {
    //   keyframes: {
    //     "0%": { transform: "skew(1deg)" },

    //     "100%": {
    //       transform: "skew(-1deg)",
    //     },
    //   },
    //   yoyo: true,
    //   repeat: -1,
    //   duration: 1,
    //   ease: "elastic",
    // });

    gsap.to("#owner", {
      opacity: 0,
    });
    gsap.to("#old-man", {
      opacity: 0,
    });
  }, []);
  // Interactions
  React.useLayoutEffect(() => {
    const cane = document.querySelector("#sugarcane");
    const peacock = document.querySelector("#peacock");

    let birdhover = gsap.from("#peacock", {
      scale: 1.2,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    cane.addEventListener("mousedown", () => {
      document.getElementById("sugarcane").style.animationDuration = "1s";
      gsap.to("#cloud", {
        keyframes: {
          "0%": { xPercent: -100 },
          "100%": {
            xPercent: 400,
          },
        },
        repeat: -1,
        duration: 6,
      });
      gsap.to("#whisp-lower1", {
        keyframes: {
          "0%": { xPercent: 0 },
          "100%": {
            xPercent: 130,
          },
        },
        repeat: -1,
        yoyo: true,
        duration: 10,
      });
      gsap.to("#whisp-lower", {
        keyframes: {
          "0%": { xPercent: 0 },
          "100%": {
            xPercent: 130,
          },
        },
        repeat: -1,
        yoyo: true,
        duration: 10,
      });
    });
    cane.addEventListener("mouseup", () => {
      document.getElementById("sugarcane").style.animationDuration = "2.5s";
      gsap.to("#cloud", {
        keyframes: {
          "0%": { xPercent: 0 },
          "50%": {
            xPercent: 100,
          },
          "100%": {
            xPercent: 0,
          },
        },
        repeat: -1,
        duration: 30,
      });
      gsap.to("#whisp-lower1", {
        keyframes: {
          "0%": { xPercent: 10 },
          "100%": {
            xPercent: 150,
          },
        },
        repeat: -1,
        yoyo: true,
        duration: 12,
      });
      gsap.to("#whisp-lower", {
        keyframes: {
          "0%": { xPercent: 10 },
          "100%": {
            xPercent: 150,
          },
        },
        repeat: -1,
        yoyo: true,
        duration: 12,
      });
    });

    peacock.addEventListener("mousemove", () => {
      birdhover.play();
    });
    peacock.addEventListener("mouseout", () => {
      birdhover.reverse();
    });
  }, []);
  React.useEffect(() => {
    if (on) {
      playmusic();
    } else {
      stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on]);
  React.useEffect(() => {
    setTimeout(() => {
      setOn(true);
    }, 1500);
  }, []);

  return (
    <MouseParallaxContainer
      className="parallax"
      containerStyle={{
        height: "100vh",
        width: "100vw",
        zIndex: "2",
      }}
      globalFactorX={0.3}
      globalFactorY={0.3}
      resetOnLeave
    >
      <MouseParallaxChild
        factorX={0}
        factorY={0.2}
        containerStyle={{
          height: "100vh",
          width: "100vw",
          zIndex: "3",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <ParticleBackground settings={settings} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-28%",
            right: "5%",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            scale: "1.1",
          }}
        >
          <Lottie
            animationData={ownerAni}
            loop={true}
            lottieRef={ownerRef}
            onLoopComplete={() => {
              ownerRef.current.goToAndPlay(1750, false);
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-28%",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            scale: "1.1",
          }}
        >
          <Lottie
            animationData={oldmanAni}
            loop={true}
            lottieRef={oldmanRef}
            onLoopComplete={() => {
              oldmanRef.current.goToAndPlay(1750, false);
            }}
          />
        </div>
        <FirstScene />
      </MouseParallaxChild>
      <Captions scene={0} />
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: ".8em",
        }}
      >
        <button
          onClick={() => {
            setOn((o) => !o);
            playClick();
          }}
          className={"btn btn-three"}
          style={{
            position: "absolute",
            bottom: "0px",
            right: "32px",
            textAlign: "center",
            color: "white",
            display: "flex",
            padding: "0.8em",
            fontWeight: "bold",
          }}
        >
          {on ? <BsSoundwave /> : <BsPlay />}
        </button>
        <Link to="/">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
              playClick();
              stop();
            }}
          >
            prev
          </button>
        </Link>
        <Link to="/two">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
              playClick();
              stop();
            }}
          >
            Next...
          </button>
        </Link>
      </div>
      <ReactTooltip
        isOpen={isOpen}
        className="tooltip-container move-tip"
        anchorId="green-terrain"
        place="top"
        offset={20}
        content="Click to interact"
      />
      {!isOpen && (
        <ReactTooltip
          className="tooltip-container "
          anchorId="sugarcane"
          place="right"
          content="Click to interact"
          offset={5}
          float={true}
        />
      )}
    </MouseParallaxContainer>
  );
}
