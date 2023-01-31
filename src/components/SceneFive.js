import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as FifthScene } from "../assets/scene5/five.svg";

import BottleRum from "../assets/bottlerum.png";
import HindiLogo from "../assets/hindilogo.png";
import EnglishLogo from "../assets/englishlogo.png";
import Card from "react-bootstrap/Card";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import useSound from "use-sound";
import music from "../assets/music.mp3";
import click from "../assets/click.wav";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { BsSoundwave, BsPlay } from "react-icons/bs";
import Captions from "./Captions";
import { CustomModal } from "./Modal";
// import CamikarraBottle from "./Camikkara";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import riverAni from "../assets/scene5/river.json";
import outlineAni from "../assets/scene5/outlineman.json";

import { Liquor } from "./vectors";
import { KeyImages } from "./KeyImages";
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
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [overlay, setOverlay] = React.useState(false);
  const [note, setNote] = React.useState(false);
  const [caption, setCaption] = React.useState(4);

  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });
  const [playClick] = useSound(click);

  const [on, setOn] = React.useState(false);
  const [isOpen, setOpen] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 8000);
  }, []);
  const lottieRef = useRef();

  const outlineRef = useRef();

  useEffect(() => {
    lottieRef.current.stop();
  }, []);

  React.useLayoutEffect(() => {
    gsap.to("#liquor", {
      opacity: 0,
    });
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
    gsap.to("#river", {
      opacity: 0,
    });

    gsap.from(".play", {
      duration: 2,
      xPercent: 300,
      ease: "power4",
    });
    // gsap.from("#greens1", {
    //   xPercent: 1400,
    //   transform: "scale(-1)",
    // });
    gsap.from("#greens1", {
      keyframes: {
        "0%": { x: -520 },
        "50%": {
          x: -500,
        },
        "100%": {
          x: -500,
        },
      },
      yoyo: true,
      repeat: -1,
      duration: 4,
    });
    gsap.from("#greens2", {
      keyframes: {
        "0%": { x: -100 },
        "50%": {
          x: -90,
        },
        "100%": {
          x: -100,
        },
      },
      yoyo: true,
      repeat: -1,
      duration: 4,
    });
    // document.getElementById("greens1").style.animationDuration = "1s";

    gsap.from(".next", {
      duration: 4,
      yPercent: 300,
      ease: "power4",
      delay: 4,
    });
    // gsap.from(".bottle", {
    //   opacity: 0,
    // });
    const scene = document.querySelector("#mainlogo");
    scene.addEventListener("click", () => {
      gsap.from("#liquor", {
        opacity: 1,
        duration: 1,
        yPercent: 300,
        ease: "power4",
        delay: 2,
      });
      gsap.from(".bottle", {
        opacity: 1,
        duration: 1,
        yPercent: 300,
        ease: "power4",
        delay: 1,
      });
      gsap.from(".overlay", {
        keyframes: {
          "0%": { filter: "brightness(100%)" },

          "100%": {
            filter: "brightness(70%)",
          },
        },
        duration: 1,
      });
    });
  }, []);
  const [liquid, setLiquid] = React.useState(false);
  React.useEffect(() => {
    if (overlay) {
      setTimeout(() => {
        setLiquid(true);
      }, 2500);
    } else {
      setLiquid(false);
    }
  }, [overlay]);
  React.useEffect(() => {
    const greens1 = document.querySelector("#greens1");
    const river = document.querySelector("#hour-glass");

    const greens2 = document.querySelector("#greens1");
    river.addEventListener("click", () => {
      setTimeout(() => {
        lottieRef.current.play();
      }, 20);
    });
    greens1.addEventListener("mousedown", () => {
      gsap.from("#greens1", {
        keyframes: {
          "0%": { x: -520 },
          "50%": {
            x: -500,
          },
          "100%": {
            x: -500,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 2,
      });
      gsap.from("#greens2", {
        keyframes: {
          "0%": { x: -100 },
          "50%": {
            x: -90,
          },
          "100%": {
            x: -100,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 2,
      });
      gsap.to("#cloud", {
        keyframes: {
          "0%": { xPercent: -85 },
          // "50%": {
          //   xPercent: 10,
          // },
          "100%": {
            xPercent: 85,
          },
        },
        repeat: -1,
        duration: 4.5,
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
    greens1.addEventListener("mouseup", () => {
      gsap.from("#greens2", {
        keyframes: {
          "0%": { x: -100 },
          "50%": {
            x: -90,
          },
          "100%": {
            x: -100,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 4,
      });
      gsap.from("#greens1", {
        keyframes: {
          "0%": { x: -520 },
          "50%": {
            x: -500,
          },
          "100%": {
            x: -500,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 4,
      });

      gsap.to("#cloud", {
        keyframes: {
          "0%": { x: 0 },
          "50%": {
            x: 140,
          },
          "100%": {
            x: 0,
          },
        },
        repeat: -1,
        duration: 3,
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

    greens2.addEventListener("mousedown", () => {
      gsap.from("#greens2", {
        keyframes: {
          "0%": { x: -100 },
          "50%": {
            x: -90,
          },
          "100%": {
            x: -100,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 2,
      });
      gsap.from("#greens1", {
        keyframes: {
          "0%": { x: -520 },
          "50%": {
            x: -500,
          },
          "100%": {
            x: -500,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 2,
      });

      gsap.to("#cloud", {
        keyframes: {
          "0%": { xPercent: -85 },
          // "50%": {
          //   xPercent: 10,
          // },
          "100%": {
            xPercent: 85,
          },
        },
        repeat: -1,
        duration: 4.5,
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
    greens2.addEventListener("mouseup", () => {
      gsap.from("#greens2", {
        keyframes: {
          "0%": { x: -100 },
          "50%": {
            x: -90,
          },
          "100%": {
            x: -100,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 4,
      });
      gsap.from("#greens1", {
        keyframes: {
          "0%": { x: -520 },
          "50%": {
            x: -500,
          },
          "100%": {
            x: -500,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 4,
      });
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
  React.useEffect(() => {
    if (!overlay) {
      gsap.to(".overlay", {
        filter: "brightness(100%)",
        duration: 1,
      });
    }
  }, [overlay]);

  return (
    <>
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          height: "100vh",
          width: "100vw",
          zIndex: "2",
        }}
        globalFactorX={0.3}
        globalFactorY={0.1}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0}
          factorY={0.05}
          containerStyle={{
            height: "100vh",
            width: "100vw",
            zIndex: "3",
          }}
        >
          <div className={"overlay"}>
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
                top: "3.6%",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <Lottie
                animationData={riverAni}
                loop={false}
                lottieRef={lottieRef}
                onComplete={() => lottieRef.current.goToAndStop(10000, false)}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "0%",
                left: "-8px",
                scale: "1.3",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <Lottie
                animationData={outlineAni}
                loop={false}
                lottieRef={outlineRef}
                onComplete={() => outlineRef.current.goToAndStop(11500, false)}
              />
            </div>
            <FifthScene />
            <Captions scene={caption} />
          </div>
        </MouseParallaxChild>
        {overlay && (
          <>
            <div
              style={{
                position: "absolute",
                bottom: "20%",
                right: "42%",
                // zIndex: "3",
              }}
              onClick={() => {
                // console.log("irem");
                setNote((o) => !o);
              }}
            >
              <img
                src={BottleRum}
                alt="logo"
                style={{ width: "220px", height: "400px" }}
              />
            </div>

            {/* <div
              className="bottle"
              id={"model"}
              style={{
                position: "absolute",
                bottom: "20%",
                right: "20%",
                zIndex: "3",
              }}
              onClick={() => {
                // console.log("irem");
                setNote((o) => !o);
              }}
            >
              <CamikarraBottle />
            </div> */}
            {/* {liquid && (
              <div
                id={"liquor"}
                style={{
                  position: "absolute",
                  bottom: "25%",
                  right: "45.2%",
                  borderRadius: "18px",
                  zIndex: "2",
                  maxWidth: "9.3vw",
                  maxHeight: "30vh",
                  // height: "60vh", width: "60vw",
                  overflow: "hidden",
                }}
              >
                <Liquor />
              </div>
            )} */}
          </>
        )}
        {overlay && (
          <>
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "4%",
              }}
            >
              <Card
                body
                style={{
                  maxWidth: "30vw",
                  minWidth: "60%",
                  marginLeft: "6px",
                  position: "relative",
                  background: "transparent",
                  borderColor: "transparent",
                }}
              >
                <KeyImages image={0} />
              </Card>
            </div>
            <div
              className="bottle"
              style={{
                position: "absolute",
                top: "10%",
                right: "4%",
              }}
            >
              <Card
                body
                style={{
                  maxWidth: "30vw",
                  minWidth: "60%",
                  background: "transparent",
                  borderColor: "transparent",
                  marginLeft: "6px",
                  position: "relative",
                }}
              >
                <KeyImages image={1} />
              </Card>
            </div>
          </>
        )}

        <div
          style={{
            position: "absolute",
            bottom: "12px",
            display: "flex",
            justifyContent: "center",
            marginRight: "12px",
            width: "100%",
            gap: ".8em",
          }}
        >
          {!overlay && (
            <button
              className="btn btn-three next"
              style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
              onClick={() => {
                setTimeout(() => {
                  lottieRef.current.play();
                }, 20);
              }}
            >
              Click here
            </button>
          )}

          <Link to={overlay ? "/five" : "/four"}>
            <button
              className="btn btn-three next"
              style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
              onClick={() => {
                playClick();
                stop();
                setOverlay(false);
              }}
            >
              Prev act
            </button>
          </Link>
          {overlay && (
            <button
              onClick={() => {
                setIsOpen(true);
                playClick();
              }}
              className="btn btn-three next"
              style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            >
              Contact
            </button>
          )}

          {!overlay && (
            <button
              onClick={() => {
                setOverlay(true);
                playClick();
                setCaption(5);
              }}
              className="btn btn-three next"
              id={"mainlogo"}
              style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            >
              Next act
            </button>
          )}
          {overlay && (
            <Link to="/">
              <button
                className="btn btn-three next"
                style={{
                  fontWeight: "bold",
                  fontSize: "large",
                  color: "white",
                }}
                onClick={() => {
                  playClick();
                  stop();
                }}
              >
                Restart journey{" "}
              </button>
            </Link>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
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
              zIndex:1
            }}
          >
            {on ? <BsSoundwave /> : <BsPlay />}
          </button>
        </div>

        <ReactTooltip
          isOpen={isOpen}
          content="Click & hold"
          anchorId="greens11"
          className="tooltip-container move-tip-right "
          place="right"
          offset={5}
          effect="solid"
        />
        <ReactTooltip
          isOpen={isOpen}
          content="Click & hold"
          anchorId="greens21"
          className="tooltip-container move-tip-river"
          place="left"
          offset={5}
          effect="solid"
        />
        <ReactTooltip
          // isOpen={isOpen}
          content="Click & hold"
          anchorId="model"
          className="tooltip-container"
          place="right"
          offset={5}
          float={true}
          effect="solid"
        />
        <ReactTooltip
          isOpen={isOpen}
          content="Click & hold"
          anchorId="hour-glass-outline1"
          className="tooltip-container "
          place="right"
          effect="solid"
        />
        {!isOpen && (
          <>
            <ReactTooltip
              // isOpen={isOpen}
              content="Click & hold"
              anchorId="greens1"
              className="tooltip-container"
              place="right"
              offset={5}
              float={true}
              effect="solid"
            />
            <ReactTooltip
              // isOpen={isOpen}
              content="Click & hold"
              anchorId="greens2"
              className="tooltip-container"
              place="right"
              offset={5}
              float={true}
              effect="solid"
            />
          </>
        )}
        {!overlay && (
          <>
            {" "}
            <div
              style={{
                position: "absolute",
                // top: "30%",
                right: "18%",
                textAlign: "center",
                color: "white",
                display: "flex",
                // padding: "0.8em",
                fontWeight: "bold",
                transform: "translateY(-63vh)",
              }}
            >
              <img
                src={HindiLogo}
                alt="logo"
                style={{ width: "260px", height: "140px" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                // top: "0%",
                left: "12%",
                textAlign: "center",
                color: "white",
                display: "flex",
                // padding: "0.8em",
                fontWeight: "bold",
                transform: "translateY(-78vh)",
              }}
            >
              <img
                src={EnglishLogo}
                alt="englishlogo"
                style={{
                  width: "350px",
                  height: "350px",
                }}
              />
            </div>
          </>
        )}
      </MouseParallaxContainer>
      <CustomModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </>
  );
}
