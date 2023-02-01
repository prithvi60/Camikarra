import React from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as FourthScene } from "../assets/scene4/four.svg";
import useSound from "use-sound";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import music from "../assets/music.mp3";
import click from "../assets/click.wav";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import windowAni from "../assets/scene4/window.json";
import mans4Ani from "../assets/scene4/mans4.json";
import rainAni from "../assets/rain.json";

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

  const seasonsRef = React.useRef();
  const rainRef = React.useRef();

  const manRef = React.useRef();
  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });
  const [playClick] = useSound(click);

  const [on, setOn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 8000);
  }, []);
  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#owner", {
        opacity: 1,
        delay: 20,
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
      gsap.from("#owner-head", {
        keyframes: {
          "0%": { x: -30, y: 5, rotate: -10 },
          "100%": {
            rotate: 0,
          },
        },
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#owner-hand", {
        keyframes: {
          "0%": { rotateZ: -20, translateX: -300, translateY: -20 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2",
      });
      gsap.from("#owner-glass", {
        keyframes: {
          "0%": { rotateZ: -20, translateX: -320, translateY: -100 },
          "100%": {
            x: 0,
            rotateZ: 0,
            translateY: 0,
          },
        },
        yoyo: true,

        duration: 4,
        repeat: -1,
        ease: "power2",
      });
      gsap.from("#owner", {
        delay: 6,
        opacity: 0,
        duration: 6,
        ease: "power2",
      });
      gsap.from("#greens", {
        keyframes: {
          "0%": { xPercent: 0 },
          "50%": {
            xPercent: 0.2,
          },
          "100%": {
            xPercent: 0,
          },
        },
        yoyo: true,
        repeat: -1,
        duration: 4,
      });
    }, sceneRef);
    return () => ctx.revert();
  }, []);

  // Interactions
  React.useLayoutEffect(() => {
    gsap.to("#grp1", {
      opacity: 0,
    });
    gsap.to("#grp2", {
      opacity: 0,
    });
    gsap.to("#grp3", {
      opacity: 0,
    });

    gsap.to("#grp4", {
      opacity: 0,
    });
    gsap.to("#grp5", {
      opacity: 0,
    });
    gsap.to("#grp6", {
      opacity: 0,
    });
    gsap.to("#grp7", {
      opacity: 0,
    });
    gsap.to("#grp8", {
      opacity: 0,
    });
    gsap.to("#grp9", {
      opacity: 0,
    });
    gsap.to("#grp10", {
      opacity: 0,
    });
    gsap.from("#rain", {
      keyframes: {
        "0%": { opacity: 1 },

        "100%": {
          opacity: 0,
        },
      },
      delay: 4,
      duration: 10,
    });
    const bottle1 = document.querySelector("#grp1");
    const bottle2 = document.querySelector("#grp2");
    const bottle3 = document.querySelector("#grp3");
    const bottle4 = document.querySelector("#grp4");
    const bottle5 = document.querySelector("#grp5");
    const bottle6 = document.querySelector("#grp6");
    const bottle7 = document.querySelector("#grp7");
    const bottle8 = document.querySelector("#grp8");
    const bottle9 = document.querySelector("#grp9");
    const bottle10 = document.querySelector("#grp10");

    // 1
    let bottle1hover1 = gsap.to("#grp1", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle1hover2 = gsap.to("#grp1", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle1.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp1", {
        opacity: 1,
        duration: 0,
      });
    });
    bottle1.addEventListener("mouseenter", () => {
      bottle1hover1.play();
      bottle1hover2.play();
    });
    bottle1.addEventListener("mouseout", () => {
      bottle1hover1.reverse();
      bottle1hover2.reverse();
    });
    // 2
    let bottle2hover1 = gsap.to("#grp2", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle2hover2 = gsap.to("#grp2", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle2.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp2", {
        opacity: 1,
        duration: 0,
      });
    });
    bottle2.addEventListener("mouseenter", () => {
      bottle2hover1.play();
      bottle2hover2.play();
    });
    bottle2.addEventListener("mouseout", () => {
      bottle2hover1.reverse();
      bottle2hover2.reverse();
    });
    // 3
    let bottle3hover1 = gsap.to("#grp3", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle3hover2 = gsap.to("#grp3", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle3.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp3", {
        opacity: 1,
        duration: 2,
      });
    });
    bottle3.addEventListener("mouseenter", () => {
      bottle3hover1.play();
      bottle3hover2.play();
    });
    bottle3.addEventListener("mouseout", () => {
      bottle3hover1.reverse();
      bottle3hover2.reverse();
    });
    // 4
    let bottle4hover1 = gsap.to("#grp4", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle4hover2 = gsap.to("#grp4", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle4.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp4", {
        opacity: 1,
        duration: 2,
      });
    });
    bottle4.addEventListener("mouseenter", () => {
      bottle4hover1.play();
      bottle4hover2.play();
    });
    bottle4.addEventListener("mouseout", () => {
      bottle4hover1.reverse();
      bottle4hover2.reverse();
    });
    // 5
    let bottle5hover1 = gsap.to("#grp5", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle5hover2 = gsap.to("#grp5", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle5.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp5", {
        opacity: 1,
        duration: 2,
      });
    });
    bottle5.addEventListener("mouseenter", () => {
      bottle5hover1.play();
      bottle5hover2.play();
    });
    bottle5.addEventListener("mouseout", () => {
      bottle5hover1.reverse();
      bottle5hover2.reverse();
    });
    // 6
    let bottle6hover1 = gsap.to("#grp6", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle6hover2 = gsap.to("#grp6", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle6.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp6", {
        opacity: 1,
        duration: 2,
      });
    });
    bottle6.addEventListener("mouseenter", () => {
      bottle6hover1.play();
      bottle6hover2.play();
    });
    bottle6.addEventListener("mouseout", () => {
      bottle6hover1.reverse();
      bottle6hover2.reverse();
    });
    // 3
    let bottle7hover1 = gsap.to("#grp7", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle7hover2 = gsap.to("#grp7", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle7.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp7", {
        opacity: 1,
        duration: 2,
      });
    });
    bottle7.addEventListener("mouseenter", () => {
      bottle7hover1.play();
      bottle7hover2.play();
    });
    bottle7.addEventListener("mouseout", () => {
      bottle7hover1.reverse();
      bottle7hover2.reverse();
    });
    // 8
    let bottle8hover1 = gsap.to("#grp8", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle8hover2 = gsap.to("#grp8", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle8.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp8", {
        opacity: 1,
        duration: 2,
      });
    });
    bottle8.addEventListener("mouseenter", () => {
      bottle8hover1.play();
      bottle8hover2.play();
    });
    bottle8.addEventListener("mouseout", () => {
      bottle8hover1.reverse();
      bottle8hover2.reverse();
    });
    // 9
    let bottle9hover1 = gsap.to("#grp9", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle9hover2 = gsap.to("#grp9", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });

    bottle9.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp9", {
        opacity: 1,
        duration: 2,
      });
    });
    bottle9.addEventListener("mouseenter", () => {
      bottle9hover1.play();
      bottle9hover2.play();
    });
    bottle9.addEventListener("mouseout", () => {
      bottle9hover1.reverse();
      bottle9hover2.reverse();
    });
    // 10
    let bottle10hover1 = gsap.to("#grp10", 0.1, {
      x: "+=20",
      yoyo: true,
      repeat: 5,
    });
    let bottle10hover2 = gsap.to("#grp10", 0.1, {
      x: "-=20",
      yoyo: true,
      repeat: 5,
    });
    bottle10.addEventListener("click", () => {
      setCount((o) => o + 1);
      gsap.to("#grp10", {
        opacity: 1,
        duration: 0,
      });
    });
    bottle10.addEventListener("mouseenter", () => {
      bottle10hover1.play();
      bottle10hover2.play();
    });
    bottle10.addEventListener("mouseout", () => {
      bottle10hover1.reverse();
      bottle10hover2.reverse();
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
    if (count === 1) {
      gsap.to("#grp2", {
        opacity: 1,
        duration: 0,
      });

      gsap.to("#grp4", {
        opacity: 1,
        duration: 0,
      });

      gsap.to("#grp6", {
        opacity: 1,
        duration: 0,
      });

      gsap.to("#grp8", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp1", {
        opacity: 1,
        duration: 0,
      });

      gsap.to("#grp10", {
        opacity: 1,
        duration: 0,
      });
    }
    if (count >= 2) {
      gsap.to("#grp1", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp2", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp3", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp4", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp5", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp6", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp7", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp8", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp1", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp9", {
        opacity: 1,
        duration: 0,
      });
      gsap.to("#grp10", {
        opacity: 1,
        duration: 0,
      });
    }
  }, [count]);

  return (
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
        ref={sceneRef}
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
          id={"season1"}
          style={{
            position: "absolute",
            // bottom: "-28%",
            // right: "5%",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <Lottie
            animationData={windowAni}
            loop={false}
            lottieRef={seasonsRef}
            onComplete={() => {
              seasonsRef.current.goToAndStop(15000, false);
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            // bottom: "-28%",
            // right: "5%",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            scale: "1.1",
          }}
        >
          <Lottie
            animationData={mans4Ani}
            loop={false}
            lottieRef={manRef}
            onLoopComplete={() => {
              manRef.current.setDirection(1);
            }}
          />
        </div>
        <FourthScene />
      </MouseParallaxChild>
      <Captions scene={3} />
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
        <Link to="/three">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
              playClick();
              stop();
            }}
          >
            Prev act{" "}
          </button>
        </Link>
        <Link to="/five">
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
        content="Click any barrel"
        anchorId="bar1"
        className="tooltip-container"
        place="right"
        offset={5}
        effect="solid"
      />

      {!isOpen && (
        <>
          <ReactTooltip
            // isOpen={isOpen}
            content="Click & hold"
            anchorId="barrels"
            className="tooltip-container"
            place="right"
            offset={5}
            float={true}
            effect="solid"
          />
          <ReactTooltip
            // isOpen={isOpen}
            content="Click & hold"
            anchorId="seasons"
            className="tooltip-container"
            place="right"
            offset={5}
            float={true}
            effect="solid"
          />
        </>
      )}
      <div
        id={"rain"}
        style={{
          position: "absolute",
          // bottom: "-28%",
          top: "14%",
          left: "22%",
          width: "30%",
          height: "30%",
          pointerEvents: "none",
          scale: "0.9",
        }}
      >
        <Lottie
          animationData={rainAni}
          loop={true}
          lottieRef={rainRef}
          // onLoopComplete={() => {
          //   manRef.current.setDirection(1);
          // }}
        />
      </div>
    </MouseParallaxContainer>
  );
}
