import React from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as SecondScene } from "../assets/scene2/second.svg";
// import Liquid from "../assets/scene2/liquid.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import useSound from "use-sound";

import music from "../assets/music.mp3";
import click from "../assets/click.wav";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import shareAni from "../assets/scene3/liquiddrops.json";
import angel2Ani from "../assets/angels2.json";
// import cloudAni from "../assets/cloud2.json";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { BsSoundwave, BsPlay } from "react-icons/bs";
import Captions from "./Captions";
import Socials from "./Socials";
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
  const [isOpen, setIsOpen] = React.useState(true);

  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });
  const [playClick] = useSound(click);

  const [on, setOn] = React.useState(false);
  const lottieRef = React.useRef();
  const angelRef = React.useRef();
  // const cloudRef = React.useRef();


  const sceneRef = React.useRef();

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#group-of-men", {
        delay: 2,
        opacity: 0,
        duration: 4,
        ease: "power2",
      });
      // gsap.from("#angel", {
      //   delay: 6,
      //   opacity: 0,
      //   yPercent: 50,
      //   duration: 4,
      //   ease: "power2",
      // });
      // gsap.from("#wings", {
      //   delay: 6,
      //   opacity: 0,
      //   yPercent: 20,
      //   duration: 4,
      //   ease: "power2",
      // });
      // gsap.to("#cloud", {
      //   keyframes: {
      //     "0%": { x: 0 },
      //     "50%": {
      //       x: 100,
      //     },
      //     "100%": {
      //       x: 0,
      //     },
      //   },
      //   repeat: -1,
      //   duration: 8,
      // });
      gsap.to("#whisp-lower1", {
        keyframes: {
          "0%": { xPercent: 10 },
          "100%": {
            xPercent: 50,
          },
        },
        repeat: -1,
        yoyo: true,
        duration: 30,
      });
      gsap.to("#whisp-lower", {
        keyframes: {
          "0%": { xPercent: 150 },
          "100%": {
            xPercent: 10,
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

      gsap.to("#angel", {
        opacity: 0,
      });
      gsap.to("#wings", {
        opacity: 0,
      });

      gsap.from("#men1-hand", {
        keyframes: {
          "0%": { rotateZ: -20, translateX: -20, translateY: -10 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });

      gsap.from("#men1-fist", {
        keyframes: {
          "0%": { rotateZ: -20, translateX: -40, translateY: -80 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#men1-cup", {
        keyframes: {
          "0%": { rotateZ: -20, translateX: -40, translateY: -80 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      // men 2
      gsap.from("#men2-hand", {
        keyframes: {
          "0%": { rotateZ: 10, translateX: 20, translateY: -30 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#men2-handline", {
        keyframes: {
          "0%": { rotateZ: 10, translateX: 20, translateY: -30 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });

      gsap.from("#men2-fist", {
        keyframes: {
          "0%": { rotateZ: 30, translateX: -30, translateY: -80 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#men2-cup", {
        keyframes: {
          "0%": { rotateZ: 5, translateX: 20, translateY: -30 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#men2-lid", {
        keyframes: {
          "0%": { rotateZ: 5, translateX: 20, translateY: -30 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      // men 3
      gsap.from("#men3-hand", {
        keyframes: {
          "0%": { rotateZ: 20, translateX: 20, translateY: -60 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#men3-handline", {
        keyframes: {
          "0%": { rotateZ: 16, translateX: 20, translateY: -60 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });

      gsap.from("#men3-fist", {
        keyframes: {
          "0%": { rotateZ: 20, translateX: 40, translateY: -80 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#men3-cup", {
        keyframes: {
          "0%": { rotateZ: 20, translateX: 40, translateY: -80 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        delay: 2,

        yoyo: true,
        duration: 4,
        repeat: -1,
        ease: "power2",
      });
    }, sceneRef);
    return () => ctx.revert();
  }, []);
  const [speed, setSpeed] = React.useState(1);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 8000);
  }, []);
  // Interactions
  React.useLayoutEffect(() => {
    const pots = document.querySelector("#pots");
    const angel = document.querySelector("#angel");
    const greens = document.querySelector("#greens");
    let shareHover = gsap.to(lottieRef.current, {
      keyframes: {
        "0%": { y: 0 },
        "100%": {
          y: 20,
        },
      },
      repeat: -1,
      duration: 2,
    });
    let cloudHover = gsap
      .from("#cloud", {
        keyframes: {
          "0%": { xPercent: -80 },
          "100%": {
            xPercent: 84,
          },
        },
        repeat: -1,
        duration: 20,
        ease: "power0",
      })
      .progress(0.5);
    let potshover1 = gsap.to("#pots", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let potshover2 = gsap.to("#pots", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    let angelhover = gsap.from("#angel", {
      scale: 1.2,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });
    let angelwing = gsap.from("#wings", {
      scale: 1.2,
      duration: 0.6,
      stagger: 0.1,
      zIndex:2,
      ease: "back.out(1.7)",
    });

    pots.addEventListener("mousemove", () => {
      potshover1.play();
      potshover2.play();
    });
    pots.addEventListener("mouseout", () => {
      potshover1.reverse();
      potshover2.reverse();
    });
    pots.addEventListener("mousedown", () => {
      setSpeed(4);
      shareHover.play();
    });
    pots.addEventListener("mouseup", () => {
      setSpeed(1);
      shareHover.reverse();
    });
    angel.addEventListener("mousemove", () => {
      angelhover.play();
      angelwing.play();
    });
    angel.addEventListener("mouseout", () => {
      angelhover.reverse();
      angelwing.reverse();
    });

    greens.addEventListener("mousedown", () => {
      document.getElementById("greens").style.animationDuration = "1s";
      cloudHover.totalDuration(4.5);

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
    greens.addEventListener("mouseup", () => {
      document.getElementById("greens").style.animationDuration = "2.5s";
      cloudHover.totalDuration(20);

      gsap.to("#whisp-lower1", {
        keyframes: {
          "0%": { xPercent: 0 },
          "100%": {
            xPercent: 130,
          },
        },
        repeat: -1,
        yoyo: true,
        duration: 30,
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
        duration: 30,
      });
    });
  }, []);
  React.useEffect(() => {
    if (speed < 20) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);
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
      ref={sceneRef}
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

        <SecondScene />
      </MouseParallaxChild>
      <Captions scene={1} />
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
        <Socials />
        <button
          className="btn btn-three next"
          style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
          onClick={() => {
            gsap.to("#angel", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
            gsap.to("#wings", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
          }}
        >
          Click here
        </button>
        <Link to="/one">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
              playClick();
              stop();
            }}
          >
            {" "}
            Prev act
          </button>
        </Link>
        <Link to="/three">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
              playClick();
              stop();
            }}
          >
            Next act
          </button>
        </Link>
      </div>
      <ReactTooltip
        isOpen={isOpen}
        className="tooltip-container"
        anchorId="pot1"
        place="right"
        content="Click & hold"
        offset={5}
      />
      <ReactTooltip
        isOpen={isOpen}
        className="tooltip-container move-tip-top"
        anchorId="greens1"
        place="right"
        content="Click & hold"
        offset={5}
      />
      {!isOpen && (
        <>
          <ReactTooltip
            // isOpen={isOpen}
            className="tooltip-container"
            anchorId="pots"
            place="right"
            content="Click & hold"
            offset={5}
            float={true}
          />
          <ReactTooltip
            // isOpen={isOpen}
            className="tooltip-container"
            anchorId="greens"
            place="right"
            content="Click & hold"
            offset={5}
            float={true}
          />
        </>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "0%",
          width: "100%",
          height: "100%",
          scale: "0.4",
          pointerEvents: "none",
        }}
      >
        <Lottie animationData={shareAni} loop={true} lottieRef={lottieRef} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1%",
          left: "0%",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          scale:"1.2"
        }}
      >
        <Lottie animationData={angel2Ani} loop={true} lottieRef={angelRef} />
      </div>
      {/* <div
        style={{
          position: "absolute",
          bottom: "1%",
          left: "0%",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex:1
        }}
      >
        <Lottie animationData={cloudAni} loop={true} lottieRef={cloudRef} />
      </div> */}
    </MouseParallaxContainer>
  );
}
