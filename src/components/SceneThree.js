import React from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as ThirdScene } from "../assets/scene3/three.svg";
import useSound from "use-sound";
import music from "../assets/music.mp3";
import click from "../assets/click.wav";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Lottie from "lottie-react";
import shareAni from "../assets/scene3/liquiddrops.json";

import angelsAni from "../assets/scene3/angels.json";

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
  const sceneRef = React.useRef();

  const lottieRef = React.useRef();
  const angelRef = React.useRef();

  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });
  const [playClick] = useSound(click);

  const [on, setOn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 8000);
  }, []);
  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to("#clouds", {
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

      // gsap.from("#pot", {
      //   keyframes: {
      //     "0%": { rotateZ: 20 },
      //     "100%": {
      //       rotateZ: 15,
      //     },
      //   },
      //   yoyo: true,
      //   duration: 2,
      //   repeat: -1,
      //   ease: "power2",
      // });
    }, sceneRef);
    return () => ctx.revert();
  }, []);
  // Interactions
  React.useLayoutEffect(() => {
    gsap.to("#sun", {
      duration: 0,
      xPercent: 1400,
    });
    gsap.to("#share", {
      opacity: 0,
    });
    gsap.to("#man", {
      opacity: 0,
    });
    gsap.to("#man-2", {
      opacity: 0,
    });
    gsap.to("#old-woman", {
      opacity: 0,
    });
    gsap.to("#woman-in-saree", {
      opacity: 0,
    });
    gsap.to("#man-with-photo", {
      opacity: 0,
    });
    const pots = document.querySelector("#pot");
    const angel = document.querySelector("#angel");
    // const angelwings1 = document.querySelector("#angel-wings1");
    // const angelwings = document.querySelector("#angel-wings");

    // const wings = document.querySelector("#wings");

    let potshover1 = gsap.to("#pot", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let potshover2 = gsap.to("#pot", 0.1, {
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
    let angelwing1 = gsap.from("#angel-wings1", {
      scale: 1.2,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });
    let angelwing = gsap.from("#angel-wings", {
      scale: 1.2,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    pots.addEventListener("mouseenter", () => {
      potshover1.play();
      potshover2.play();
    });
    pots.addEventListener("mouseout", () => {
      potshover1.reverse();
      potshover2.reverse();
    });

    angel.addEventListener("mousemove", () => {
      angelhover.play();
      angelwing.play();
      angelwing1.play();
    });
    angel.addEventListener("mouseout", () => {
      angelhover.reverse();
      angelwing.reverse();
      angelwing1.reverse();
    });
  }, []);
  const [speed, setSpeed] = React.useState(1);

  React.useEffect(() => {
    if (speed < 20) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);
  React.useEffect(() => {
    gsap.to("#angel", {
      opacity: 0,
    });
    gsap.to("#angel-wings", {
      opacity: 0,
    });
    gsap.to("#angel-wings1", {
      opacity: 0,
    });
    const pots = document.querySelector("#pot");
    const man = document.querySelector("#man-2");
    const man2 = document.querySelector("#man");
    const man3 = document.querySelector("#man-with-photo");
    const woman = document.querySelector("#woman-in-saree");
    let cloudHover = gsap
      .from("#clouds", {
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
    woman.addEventListener("click", () => {
      gsap.to("#share", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-2", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#old-woman", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#woman-in-saree", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-with-photo", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
    });
    man3.addEventListener("click", () => {
      gsap.to("#share", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-2", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#old-woman", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#woman-in-saree", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-with-photo", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
    });
    man.addEventListener("click", () => {
      gsap.to("#share", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-2", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#old-woman", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#woman-in-saree", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-with-photo", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
    });
    man2.addEventListener("click", () => {
      gsap.to("#share", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-2", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#old-woman", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#woman-in-saree", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
      gsap.to("#man-with-photo", {
        opacity: 1,
        duration: 2,
        ease: "power2",
      });
    });
    pots.addEventListener("mousedown", () => {
      setSpeed(4);
    });
    pots.addEventListener("mouseup", () => {
      setSpeed(1);
    });
    const greens = document.querySelector("#Greens");

    greens.addEventListener("mousedown", () => {
      document.getElementById("Greens").style.animationDuration = "1s";
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
      document.getElementById("Greens").style.animationDuration = "2.5s";

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
    if (on) {
      playmusic();
    } else {
      stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on]);
  React.useEffect(() => {
    angelRef.current.stop();
    setTimeout(() => {
      setOn(true);
    }, 1500);
  }, []);

  return (
    <MouseParallaxContainer
      ref={sceneRef}
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
            top: "-10%",
            right: "-20%",
            // width: "100%",
            // height: "100%",
            // scaleX: "0.8",
            pointerEvents: "none",
          }}
        >
          <Lottie animationData={angelsAni} loop={true} lottieRef={angelRef} />
        </div>
        <ThirdScene />
      </MouseParallaxChild>
      <Captions scene={2} />
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
        {/* <button
          className="btn btn-three next"
          style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
          onClick={() => {
            gsap.to("#share", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
            gsap.to("#man", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
            gsap.to("#man-2", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
            gsap.to("#old-woman", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
            gsap.to("#woman-in-saree", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
            gsap.to("#man-with-photo", {
              opacity: 1,
              duration: 2,
              ease: "power2",
            });
          }}
        >
          click here
        </button> */}
        <Socials />
        <Link to="/two">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
              playClick();
              stop();
            }}
          >
            Prev act
          </button>
        </Link>
        <Link to="/four">
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
      {/* <ReactTooltip
        isOpen={isOpen}
        className="tooltip-container"
        anchorId="pot1"
        place="right"
        content="Click & hold"
        offset={5}
      /> */}
      <ReactTooltip
        isOpen={isOpen}
        content="Click & hold"
        anchorId="Greens1"
        className="tooltip-container move-tip-top"
        place="right"
        offset={5}
        effect="solid"
      />
      <ReactTooltip
        isOpen={isOpen}
        content="Click & hold"
        anchorId="man-2"
        className="tooltip-container"
        place="right"
        offset={5}
        effect="solid"
      />
      {!isOpen && (
        <>
          <ReactTooltip
            // isOpen={isOpen}
            className="tooltip-container"
            anchorId="pot"
            place="right"
            content="Click & hold"
            offset={5}
            float={true}
          />
          <ReactTooltip
            // isOpen={isOpen}
            content="Click & hold"
            anchorId="Greens"
            className="tooltip-container"
            place="right"
            offset={5}
            float={true}
            effect="solid"
          />
        </>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "12%",
          width: "100%",
          height: "100%",
          scale: "0.4",
          pointerEvents: "none",
        }}
        id={"share"}
      >
        <Lottie animationData={shareAni} loop={true} lottieRef={lottieRef} />
      </div>
    </MouseParallaxContainer>
  );
}
