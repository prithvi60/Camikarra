import React from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as SecondScene } from "../assets/scene2/second.svg";
// import Liquid from "../assets/scene2/liquid.svg";

import useSound from "use-sound";
// import line1 from "../assets/scene1line1.mp3";
// import line2 from "../assets/scene1line2.mp3";
// import line3 from "../assets/scene1line3.mp3";
import music from "../assets/music.mp3";
import click from "../assets/click.wav";
import { Link } from "react-router-dom";

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

  const [on, setOn] = React.useState(false);

  React.useLayoutEffect(() => {
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

    gsap.from("#greens", {
      keyframes: {
        "0%": { x: 0 },
        "50%": {
          x: -20,
        },
        "100%": {
          x: 0,
        },
      },
      yoyo: true,
      repeat: -1,
      duration: 4,
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
  }, []);
  // Interactions
  React.useLayoutEffect(() => {
    const pots = document.querySelector("#pots");
    const angel = document.querySelector("#angel");
    // const wings = document.querySelector("#wings");
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

    angel.addEventListener("mousemove", () => {
      angelhover.play();
      angelwing.play();
    });
    angel.addEventListener("mouseout", () => {
      angelhover.reverse();
      angelwing.reverse();
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

        <SecondScene />
        {/* Svg with JS  */}
        <object
          style={{
            position: "absolute",
            bottom: "6%",
            left: "24%",
            pointerEvents: "none",
          }}
          data={`data:image/svg+xml;base64,PHN2ZyBpZD0iZTRTVUwyR3hndWgxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDUgNDkiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj48ZyBpZD0iZTRTVUwyR3hndWgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDAwMDAxKSI+PGcgaWQ9ImU0U1VMMkd4Z3VoMyIgb3BhY2l0eT0iMC41MiI+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoNCIgZD0iTTMwLjQyODQsMTUuODcxN2MuMDMtLjA1MTEtLjA0MTItLjA3MzMtLjA2NzgtLjA3ODItLjA2MzUtLjAxMTgtLjExMDQtLjAwNjYtLjE3NDQuMDE3OS0uMDc2Mi4wMjk0LS4xMjQ3LjExMjgtLjE2NTcuMTgyMy0uMTA1Ni4xODAxLS4xMTE3LjQ2MTkuMDcwOS41NTQ4LjAyMzkuMDEyMi4wNDkzLjAyMjcuMDc2Mi4wMjYxLjAzMzkuMDA0My4wNjk2LjAwNDkuMTA0MS0uMDAyOS4yOTgyLS4wNjc3LjM3MTMtLjU1MzEuMTY1OS0uNzI2OWwtLjAwOTIuMDI2OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoNSIgZD0iTTQxLjgwNDEsMTQuODUwM2MuMDQ2Ny0uMDM2NS0uMDExNC0uMDgzMy0uMDM0My0uMDk3Ni0uMDU0OC0uMDM0My0uMTAwMy0uMDQ2Ni0uMTY4OC0uMDQ3My0uMDgxNy0uMDAwNi0uMTU3NC4wNTkyLS4yMjExLjEwODgtLjE2NDMuMTI4OC0uMjczMy4zODg3LS4xMzc1LjU0MjIuMDE3OC4wMjAxLjAzNzUuMDM5MS4wNjEzLjA1MjIuMDI5OS4wMTY1LjA2MjkuMDMwMS4wOTc5LjAzNTUuMzAyMi4wNDYzLjU0ODMtLjM3ODQuNDIwOS0uNjE1NGwtLjAxODQuMDIxNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoNiIgZD0iTTIzLjM2NDIsMjQuMjM5OWMwLDAtLjM3OS4wNjY5LS40NTMuMTg3Ni0uMDkyNC4xNTEtLjE1OTEuMzg2My0uMDE3Ny41My4wNDI2LjA0MzQuMDk1NC4wNzgyLjE1MTMuMTAxOS4wMzY4LjAxNTUuMDc0NC4wMzA4LjExMzYuMDM4NC4zMDQ0LjA1OTQuNzEwMS0uMjI2OC41ODI2LS41NjM3LS4wNjA2LS4xNTk4LS4yMjQtLjI0NTUtLjM3NjgtLjI5NDJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDciIGQ9Ik0zMi4xNjMxLDIwLjA0MzhjMCwwLS4zNzcyLS4wNzY4LS40OTA0LjAwODQtLjE0MTIuMTA2NS0uMjg5Ni4zMDEtLjIxMDguNDg2NS4wMjM3LjA1Ni4wNi4xMDc4LjEwMzQuMTUwMy4wMjg1LjAyOC4wNTc5LjA1NTkuMDkxNi4wNzc0LjI2MTMuMTY2OS43NDM4LjA0OTUuNzQ4OC0uMzEwNy4wMDIyLS4xNzA5LS4xMTg0LS4zMTA2LS4yNDI2LS40MTE5WiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWg4IiBkPSJNMjkuMzY3LDE5LjYyNWMwLDAtLjI2MjctLjA2ODUtLjQ4MDIuMDQxNC0uNzEzOS4zNjA2LjIzNywxLjg1MjQuMjM3LDEuODUyNHMxLjM0ODMtLjk3MTcuOTI1Ny0xLjU4M2MtLjA5ODMtLjE0MjMtLjI1NTEtLjI0OTctLjQyMjMtLjI5MjUtLjA4NDQtLjAyMTYtLjE3NzMuMDA4MS0uMjYwMi0uMDE4M1oiIHRyYW5zZm9ybT0ibWF0cml4KDIgMCAwIDEtMjkuMjkwNDUxIDApIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvZz48ZyBpZD0iZTRTVUwyR3hndWg5Ij48cGF0aCBpZD0iZTRTVUwyR3hndWgxMCIgZD0iTTM3LjUxNDMsMTguNTgwNGMwLDAtLjEtLjA3MTItLjIwODQtLjA2NDQtLjM1NTcuMDIyMy0uNTU1OC41OTYyLS4xODQ1Ljc3MTIuMjk5LjE0MS43MTY0LS4xNTY5LjYzMjQtLjQ2OTMtLjAxOTYtLjA3MjctLjA2OS0uMTQxNS0uMTMyOC0uMTg2NS0uMDMyMi0uMDIyNy0uMDc1OS0uMDI2Ni0uMTA2Ny0uMDUxWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgxMSIgZD0iTTIxLjI5ODgsMjQuNDUyMmMwLDAtLjA4OTguMDk5OC0uMDgzNy4xODAyLjAwNDcuMDYyLjAwMzguMTI0Mi4wMTIzLjE4Ni4wMTkuMTQ0NS4wNDMzLjMwOC4xNDk3LjQyMjguMDQ4NC4wNTIyLjEyMDUuMTA3NC4xOTc5LjA5MjcuMDMzOC0uMDA2NS4wNjc2LS4wMTU5LjA5ODEtLjAzMDYuMDQyNS0uMDE5Ny4wODI3LS4wNDQzLjExOTktLjA3MTkuMjE3Mi0uMTYwNy4yMDU5LS41MTU1LjAwNTQtLjY5MzktLjEyMTktLjEwODQtLjM2OTQtLjI1NzQtLjQ5OTYtLjA4NTNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDEyIiBkPSJNMTguNTc3NywyNS42MTkyYy0uNDMwNC0uOTUzNC0yLjA3MzItMS44MDYxLTIuODU4OC0uODg2NC0uMTAyMi4xMTk3LS4xNjkyLjIzODctLjIxODkuMzg2NS0uMDYxMS4xODE4LS4xMDgyLjM4ODMtLjA5MzguNTg1Ni4wNzE0Ljk3NzYsMS4yMDUsMS42MjM0LDIuMTU5MywxLjYzNjMuMzE4OC4wMDQzLjY0MS0uMDUxMS44ODk1LS4yMzE2LjMwOTUtLjIyNDUuNDQ0OS0uNjIxOC4zMzk0LS45OTMzLS4wNDI3LS4xNTA1LS4xODE3LS4yODgxLS4xNTY4LS40NTA5bC0uMDU5OS0uMDQ2MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMTMiIGQ9Ik0xMy43MTk4LDI4LjQ0MjNjMCwwLS4yMTguMDU1OS0uMzUxMS4xODEzLS4yMDY1LjE5NDUtLjE5Mi42MjM4LjAzNzIuODAwNC4xMjQxLjA5NTUuMTkyOC4xMjEzLjM0NzIuMTQzNy40NzA1LjA2ODkuODk1Ny0uNTU3NC41NDg5LS45MzU4LS4xMDA0LS4xMDk2LS4xNTYxLS4xNDU4LS4yODk3LS4yMDk0LS4wMzctLjAxNzQtLjI2MDUtLjAyMzItLjI5MjUuMDE5OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMTQiIGQ9Ik0xMS4wMjAyLDI2LjgzOTFjLS4zNDYyLS4xNDU5LS43MjEzLS4zNDcxLTEuMTE0OTMtLjI4NjgtLjE3NjA5LjAyNzEtLjQ0ODE3LjEzODctLjU5OTI3LjIzMDYtLjE4MzEzLjExMTgtLjM0NjczLjI1ODMtLjQ2MzMzLjQzOTktLjQ0NTY0LjY5NDIuMDkxMTIsMS41NjMxLjcwODUzLDEuOTM1MS41MS4zMDcxLDEuMjkzNi4yMjIsMS42MjQ0LS4zMTAyLjE3NjItLjI4MzkuMTkyOS0uNjI3MS4yMTk1LS45NDk0LjAyODctLjM0Ny4wMTY4LS43NzUyLS4yOTM4LTEuMDA1OGwtLjA4MTEtLjA1MzRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDE1IiBkPSJNNS40MDU0MywzMS4wNTU0Yy4xMzgxMy0uMzc5NS0uMzIzLS42OTM1LS41OTkzNi0uNTk1MS0uMDE4NDQuMDA2My0uMDc1MjguMDE3Ny0uMDg5NjguMDI4NC0uMTEwMTguMDgwMy0uMjAzNDcuMjA2NC0uMjEzMjIuMzQ2Ni0uMDIzMzcuMzQyMi4zMDguNjg2NC42NTg0Mi41NjIzLjE0MjE4LS4wNTA1LjE5NDMxLS4yMDU3LjI0Mzg0LS4zNDIyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgxNiIgZD0iTTYuNzQzMDMsMjguODcxOWMtLjE2NjEtLjEwNDItLjQzOTQzLjAwOTEtLjQ4NDA3LjAxODEtLjA2OTg2LjAxNC0uMTE0OTkuMTE1Ni0uMTQ0NjUuMTcxOC0uMDU4MjQuMTExLS4wODIwNS4yMzUzLS4wMjMzLjM1MTYuMDkxNDcuMTgwOC4zNjQ1OC4xNjI1LjUyNjkzLjEzNjcuMTAzOTItLjAxNjUuMjAwMzYtLjA3NDEuMjU1NDUtLjE2NTEuMTAxNTgtLjE2NzcuMDMyMjYtLjQxMDktLjEzMDM2LS41MTMxWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgxNyIgZD0iTTYuNDE5NjQsMzIuMTYxNmMtLjA0MzIxLjAwNjgtLjE3OTA4LjA4MTMtLjI3MDg3LjE0MTEtLjE1NjkuMTAxMy0uMjc1NzIuMTk5MS0uMzU2MzkuMzczMS0uMTMyOTguMjg3OC0uMDEyNy42NTMxLjIzMjU3Ljg0MDQuMzI4OTguMjUwNi44Mjc4Ny4zNjczLDEuMTg2NzcuMTExNC4wNTYzLS4wNC4xMTIyOS0uMDgxNy4xNTc2LS4xMzM1LjM5MTAxLS40NDUyLS4wMjAyMy0xLjAwNzMtLjM5MDg2LTEuMjk0OC0uMTQ3MzctLjExNDMtLjQwMjEzLS4wNjItLjU1ODgyLS4wMzc3WiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGcgaWQ9ImU0U1VMMkd4Z3VoMTgiIG9wYWNpdHk9IjAuNzYiPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDE5IiBkPSJNMTkuODcxNCwyNi4zOTI2Yy0uMDI4MS4wMDUxLS4xMTcyLjA1NzItLjE3NzUuMDk4Ny0uMTAzMS4wNzA1LS4xODE1LjEzOC0uMjM2MS4yNTY0LS4wOTAxLjE5NTktLjAxNy40NDA3LjEzOTUuNTYzNi4yMS4xNjQ3LjUzMTkuMjM2Ny43NjgxLjA1OTMuMDM3MS0uMDI3OC4wNzM5LS4wNTY2LjEwNC0uMDkyMi4yNTk1LS4zMDU1LjAwMDQtLjY3OS0uMjM2MS0uODY3OS0uMDk0MS0uMDc1MS0uMjYtLjAzNjQtLjM2MTktLjAxNzlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDIwIiBkPSJNNC44NDIwOSwzMy4xODgxYy0uMDU3OTQuMDMzNy0uMTkyNTMuMTYyMS0uMTk0NTguMjIzMS0uMDAzODIuMTE2MS4xMjQzLjI0NC4yNDM2OS4yMTM3LjA5MzgzLS4wMjM5LjE4MDI2LS4wOTI1LjIwMjgtLjE5MDUuMDIwNTctLjA4OTItLjAyNTY5LS4xNzgtLjA5OTM0LS4yMjYzLS4wNDE5LS4wMjc0LS4xMDgzNS0uMDQ1OS0uMTUyNTctLjAyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgyMSIgZD0iTTAuODg3MjI1LDM2LjQ2NjJjLS4wMzE4MzIuMDE2LS4xMDQ1NTYuMDc5MS0uMTA0MjMyLjExMDYuMDAwNjQ4LjA1OTkuMDc1OTIyLjEyOS4xNDI0NDcuMTE2My4wNTIyODYtLjAxMDEuMDk5MzItLjA0MzQuMTA5NjUtLjA5MzUuMDA5NDQtLjA0NTYtLjAxODc3LS4wOTI3LS4wNjE0MjktLjExOTQtLjAyNDI2NS0uMDE1MS0uMDYyMTU0LS4wMjYzLS4wODY0MzYtLjAxNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMjIiIGQ9Ik01LjEzMjk1LDM1LjUyNjVjMCwwLS4xMjA5LjA3ODEtLjExMTY3LjEzMzUuMDE2NTkuMDk5Ni4xMDE0LjI0Ni4yMjQuMTk4NS4wMTY5Ni0uMDA2NS4wMzMyNy0uMDE1LjA0NzY0LS4wMjYyLjA2OTYyLS4wNTQ3LjEwNTQtLjE0NS4wOTcxOS0uMjMyNy0uMDA1OTctLjA2MzctLjA2MzM3LS4xNy0uMTQxMzYtLjE1NzEtLjA0NzEzLjAwNzYtLjA4ODc3LjA0NzgtLjExNTguMDg0WiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgyMyIgZD0iTTMuNzUzNDUsMzQuNDU1OGMwLDAtLjA3MDg4LjA0NDUtLjEyOTI2LjAyOTYtLjAzNjE1LS4wMDkyLS4wNjI1NS4wMzIxLS4wNzE0LjA1OTYtLjAxNDM3LjA0NDYtLjAxOTUyLjExMTItLjAwNjE5LjE1NjkuMDQ0MDcuMTQ5MS4xODEzNy4zMjgzLjM1ODY5LjI2OTEuMDIxNjItLjAwNzQuMDQyMTktLjAxODIuMDYxNC0uMDMwNi4xMjY4NS0uMDgxNC4xNzE2MS0uMzE0My4wMTg3Ni0uMzk0MS0uMDc2Ni0uMDQwMS0uMTU4MjctLjEyOC0uMjMyLS4wOTA1WiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgyNCIgZD0iTTEuNjExMjksMzUuNzMxYzAsMC0uMDcwODguMDQ0NS0uMTI5MjUuMDI5Ni0uMDM2MTYtLjAwOTMtLjA2MjU2LjAzMjEtLjA3MTQxLjA1OTUtLjAxNDM2LjA0NDYtLjAxOTUyLjExMTItLjAwNjE5LjE1NjkuMDQ0MDcuMTQ5MS4xODEzNy4zMjgzLjM1ODY5LjI2OTEuMDIxNjItLjAwNzMuMDQyMTktLjAxODEuMDYxNC0uMDMwNS4xMjY4NS0uMDgxNC4xNzE2MS0uMzE0My4wMTg3Ni0uMzk0MS0uMDc2NTktLjA0MDEtLjE1ODI3LS4xMjgtLjIzMi0uMDkwNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMjUiIGQ9Ik0yMy40Mjg3LDI1LjYyOTdjMCwwLS4xNjIxLjAwMi0uMjk2NS4wMzY5LS41ODE5LjE1MTQtMS4xNDY2LjQwMDMtMS42MzU2Ljc3ODYtLjE4MDkuMTQwMi0uMzAwMS40MTktLjE4MzIuNjQ4Ni4xMjY3LjI0ODguNDE4Ny4zMTY2LjY1NzkuMjk5OC41NDAzLS4wMzc0LDEuMDgyMS0uMTY3NCwxLjU1ODUtLjQ1NDguMTM1OC0uMDgyMS4zNTA4LS4yNjMuNDQ3Mi0uMzk3NS4xNjktLjIzNjEuMjc4NC0uNzk1My0uMDkxNi0uODkyOC0uMDY4NS0uMDE4LS4xMzkzLS4wMzI5LS4yMDk2LS4wMjkzLS4wNzA3LjAwMzYtLjM2NDc5LjAxMDUtLjI0NzEuMDEwNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMjYiIGQ9Ik0yNi4zNDI1LDIyLjYwMDNjMCwwLS4wOTU1LjAxNjUtLjE0NTIuMDM4MS0uMTA1NS4wNDU3LS4xNTc1LjE2MTQtLjIxNTUuMjUwNC0uMTA3NS4xNjQyLS4zNDQ2LjQ1MTgtLjE1ODMuNjQ4Ny4wMjY0LjAyNzkuMDU2Ny4wNTM1LjA5MDguMDcxMi4wOTc1LjA1MDkuMjIxOS0uMDI3My4zMDU3LS4wNTk3LjE3NC0uMDY3MS40NDI2LS4xMjQ5LjUyLS4zMjM0LjAyNjMtLjA2NzctLjAyMTctLjE5MDItLjA0NTQtLjI0NTUtLjA2ODItLjE1OTItLjE2MjYtLjQwOC0uMzUyMS0uMzc5OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMjciIGQ9Ik0zNS41MzUyLDE5LjYxMTJjMCwwLS4wOTQ5LS4wMTk3LS4xNDkxLS4wMTc5LS4xMTQ5LjAwMzgtLjIwNTcuMDkyNC0uMjkyMy4xNTM5LS4xNjAzLjExMzMtLjQ4NjMuMjkzOS0uMzg1Mi41NDU0LjAxNDIuMDM1Ny4wMzMuMDcwNi4wNTgyLjA5OTYuMDcyMi4wODMuMjE2Ni4wNTU5LjMwNjQuMDU2Ni4xODY0LjAwMTQuNDU3NS4wNDYxLjYwMjQtLjExMDEuMDQ5My0uMDUzNC4wNDk1LS4xODQ5LjA0NzgtLjI0NTEtLjAwNS0uMTczMS0uMDAxNS0uNDM5Mi0uMTg4Mi0uNDgyNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjxnIGlkPSJlNFNVTDJHeGd1aDI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMDAwMDAxIDApIj48cGF0aCBpZD0iZTRTVUwyR3hndWgyOSIgZD0iTTI3Ljg5NzQsMTcuOTE5YzAsMC0uMjg2MS4wNDAyLS40MzQ1LjE3NzItLjEwMDEuMDkyMS0uMTU1Ni4yMTA3LS4xMTA5LjM0MjUuMDEwNy4wMzE1LjAyOC4wNTk2LjA0NjQuMDg1OS4wMzMuMDQ3Mi4xMDY0LjAzNi4xNTIzLjA0ODQuMDg0OC4wMjI5LjIyNzIuMTA3NC4zMzE2LjA0ODUuMDcxNC0uMDQwNi4xMTM2LS4xMzk3LjEzNi0uMjE2NS4wMzk1LS4xMzY0LjE0NTctLjQxNzgtLjAzNjYtLjQ2OS0uMDI3Ny0uMDA3OC0uMDU2LS4wMTM2LS4wODQzLS4wMTdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDMwIiBkPSJNNDAuMzg0OCwxNC45Njc3YzAsMC0uMjgwOS0uMDY3NS0uNDY5Mi4wMDU1LS4xMjY5LjA0ODktLjIyMjEuMTM4OS0uMjI4OS4yNzc5LS4wMDE1LjAzMzMuMDA0Mi4wNjU3LjAxMTcuMDk3LjAxMzQuMDU1OS4wODU4LjA3MjUuMTI0LjEwMDguMDcwNC4wNTI0LjE3MTkuMTgzMy4yOTA2LjE2NjguMDgxNC0uMDExNi4xNTctLjA4ODMuMjA2LS4xNTE1LjA4NjctLjExMjQuMjg4OC0uMzM1My4xMzc5LS40NDk3LS4wMjI5LS4wMTc0LS4wNDctLjAzMzMtLjA3MjEtLjA0NjhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDMxIiBkPSJNMjQuNjk2MSwyMi44MjEzYzAsMC0uMjg2MS4wNDAzLS40MzQ0LjE3NzMtLjEwMDIuMDkyLS4xNTU3LjIxMDYtLjExMS4zNDI1LjAxMDcuMDMxNS4wMjguMDU5NS4wNDY0LjA4NTkuMDMzLjA0NzEuMTA2NS4wMzYuMTUyNC4wNDgzLjA4NDcuMDIyOS4yMjcxLjEwNzUuMzMxNS4wNDg1LjA3MTQtLjA0MDUuMTEzNy0uMTM5Ny4xMzYtLjIxNjUuMDM5NS0uMTM2My4xNDU4LS40MTc4LS4wMzY2LS40Njg5LS4wMjc3LS4wMDc4LS4wNTU5LS4wMTM3LS4wODQzLS4wMTcxWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgzMiIgZD0iTTMzLjkyMjIsMTkuMjEyNmMwLDAtLjI4MDktLjA2NzYtLjQ2OTIuMDA1NS0uMTI3LjA0ODktLjIyMjEuMTM4OC0uMjI4OS4yNzc5LS4wMDE2LjAzMzIuMDA0Mi4wNjU3LjAxMTcuMDk3LjAxMzQuMDU1OS4wODU4LjA3MjUuMTI0LjEwMDguMDcwNC4wNTI0LjE3MTguMTgzMy4yOTA2LjE2NjcuMDgxMy0uMDExNS4xNTctLjA4ODIuMjA1OS0uMTUxNS4wODY4LS4xMTIzLjI4ODktLjMzNTIuMTM4LS40NDk3LS4wMjI5LS4wMTc0LS4wNDctLjAzMzItLjA3MjEtLjA0NjdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDMzIiBkPSJNMzAuNTQ0NiwxMy4yNTY3YzAsMC0uMTY3MS4wOTkxLS4xODU1LjE4MDMtLjAyNTYuMTEzMi4wNTI3LjI2MDEuMTcwMS4yMzAyLjA4OTktLjAyMjkuMjA0Ni0uMDY3OS4yNTQtLjE2NTUuMDE2NC0uMDMyNS4wMjcxLS4wODAyLjAyNTYtLjExNC0uMDA1Ny0uMTQwMS0uMTU1Mi0uMTk3NS0uMjY0Mi0uMTMxWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgzNCIgZD0iTTQyLjg3MTYsMTIuNDYwM2MwLDAtLjE5MTguMDMxLS4yMzg3LjA5OTgtLjA2NTMuMDk1OS0uMDQ2My4yNjEzLjA3MzguMjc2NS4wOTIuMDExNy4yMTUzLjAxMTkuMjk3LS4wNjA4LjAyNzItLjAyNDIuMDU0Ni0uMDY0Ni4wNjU3LS4wOTY2LjA0NjEtLjEzMjUtLjA3Mi0uMjQwNy0uMTk3OC0uMjE4OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMzUiIGQ9Ik0yNS43NzI1LDIxLjcxM2MwLDAtLjE2NzEuMDk5MS0uMTg1NC4xODAzLS4wMjU2LjExMzIuMDUyNy4yNjAxLjE3LjIzMDIuMDg5OS0uMDIyOS4yMDQ3LS4wNjc5LjI1NC0uMTY1NS4wMTY1LS4wMzI1LjAyNzEtLjA4MDIuMDI1Ny0uMTE0LS4wMDU3LS4xNDAxLS4xNTUzLS4xOTc1LS4yNjQzLS4xMzFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZThhMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGlkPSJlNFNVTDJHeGd1aDM2IiBkPSJNMzUuMzMwMSwxOC41NzYzYzAsMC0uMTkxOS4wMzA5LS4yMzg3LjA5OTgtLjA2NTMuMDk1OC0uMDQ2NC4yNjEzLjA3MzguMjc2NS4wOTIuMDExNy4yMTUyLjAxMTkuMjk3LS4wNjA4LjAyNzItLjAyNDIuMDU0Ni0uMDY0Ny4wNjU2LS4wOTY3LjA0NjEtLjEzMjQtLjA3Mi0uMjQwNy0uMTk3Ny0uMjE4OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggaWQ9ImU0U1VMMkd4Z3VoMzciIGQ9Ik0zMS41MzA0LDEyLjI5N2MtLjAzNTUuMDA4Mi0uMTU2OC4wNTMtLjE0OTEuMDkxNy4wMDkxLjA0NzIuMDAwNy4wOTMxLjAwNjIuMTM5Ny4wMTA2LjA5MTEuMTI0Ny4wOTgyLjIwMDkuMDYxMS4wMzY4LS4wMTgxLjA2MjYtLjA2OTIuMDYwOS0uMTEwMy0uMDAzNC0uMDgyNy0uMDE5LS4yMDUyLS4xMTg5LS4xODIyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgzOCIgZD0iTTQ0LjE0MDgsMTEuOTI5MWMtLjAzNi0uMDA1NC0uMTY1My0uMDA4Mi0uMTcyMy4wMzA2LS4wMDg5LjA0NzMtLjAzMzUuMDg2OS0uMDQ1NS4xMzIzLS4wMjM2LjA4ODYuMDguMTM3MS4xNjQ1LjEzMDUuMDQwOS0uMDAzMy4wODM1LS4wNDE0LjA5NzEtLjA4MDIuMDI3Mi0uMDc4My4wNTc2LS4xOTc5LS4wNDM4LS4yMTMyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWgzOSIgZD0iTTI2LjM0MDcsMjAuNzcyMWMtLjAzNTUuMDA4Mi0uMTU2OC4wNTMtLjE0OTEuMDkxNy4wMDkxLjA0NzIuMDAwNy4wOTMxLjAwNjIuMTM5Ny4wMTA2LjA5MTEuMTI0Ny4wOTgyLjIwMDkuMDYxMS4wMzY4LS4wMTgxLjA2MjYtLjA2OTIuMDYwOS0uMTEwMy0uMDAzNC0uMDgyNy0uMDE5LS4yMDUyLS4xMTg5LS4xODIyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmU4YTAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBpZD0iZTRTVUwyR3hndWg0MCIgZD0iTTM2LjIwMzgsMTcuOTA5NmMtLjAzNi0uMDA1NC0uMTY1My0uMDA4My0uMTcyMy4wMzA1LS4wMDg4LjA0NzMtLjAzMzUuMDg3LS4wNDU1LjEzMjQtLjAyMzYuMDg4Ni4wOC4xMzcuMTY0NS4xMzA1LjA0MDktLjAwMzQuMDgzNi0uMDQxNC4wOTcxLS4wODAzLjAyNzItLjA3ODIuMDU3Ni0uMTk3OS0uMDQzOC0uMjEzMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZlOGEwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvZz4NCjxzY3JpcHQ+PCFbQ0RBVEFbDQohZnVuY3Rpb24odCxuKXsib2JqZWN0Ij09dHlwZW9mIGV4cG9ydHMmJiJ1bmRlZmluZWQiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKToiZnVuY3Rpb24iPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTooKHQ9InVuZGVmaW5lZCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuX19TVkdBVE9SX1BMQVlFUl9fPXQuX19TVkdBVE9SX1BMQVlFUl9ffHx7fSx0Ll9fU1ZHQVRPUl9QTEFZRVJfX1siNWM3ZjM2MGMiXT1uKCkpfSh0aGlzLChmdW5jdGlvbigpeyJ1c2Ugc3RyaWN0IjtmdW5jdGlvbiB0KHQsbil7dmFyIGU9T2JqZWN0LmtleXModCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtuJiYocj1yLmZpbHRlcigoZnVuY3Rpb24obil7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKS5lbnVtZXJhYmxlfSkpKSxlLnB1c2guYXBwbHkoZSxyKX1yZXR1cm4gZX1mdW5jdGlvbiBuKG4pe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1tlXT9hcmd1bWVudHNbZV06e307ZSUyP3QoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtvKG4sdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhuLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTp0KE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBufWZ1bmN0aW9uIGUodCl7cmV0dXJuKGU9ImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmInN5bWJvbCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/InN5bWJvbCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiByKHQsbil7aWYoISh0IGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcigiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uIil9ZnVuY3Rpb24gaSh0LG4pe2Zvcih2YXIgZT0wO2U8bi5sZW5ndGg7ZSsrKXt2YXIgcj1uW2VdO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLCJ2YWx1ZSJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fWZ1bmN0aW9uIHUodCxuLGUpe3JldHVybiBuJiZpKHQucHJvdG90eXBlLG4pLGUmJmkodCxlKSx0fWZ1bmN0aW9uIG8odCxuLGUpe3JldHVybiBuIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbbl09ZSx0fWZ1bmN0aW9uIGEodCl7cmV0dXJuKGE9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KX0pKHQpfWZ1bmN0aW9uIGwodCxuKXtyZXR1cm4obD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQsbil7cmV0dXJuIHQuX19wcm90b19fPW4sdH0pKHQsbil9ZnVuY3Rpb24gcygpe2lmKCJ1bmRlZmluZWQiPT10eXBlb2YgUmVmbGVjdHx8IVJlZmxlY3QuY29uc3RydWN0KXJldHVybiExO2lmKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pcmV0dXJuITE7aWYoImZ1bmN0aW9uIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sW10sKGZ1bmN0aW9uKCl7fSkpKSwhMH1jYXRjaCh0KXtyZXR1cm4hMX19ZnVuY3Rpb24gZih0LG4sZSl7cmV0dXJuKGY9cygpP1JlZmxlY3QuY29uc3RydWN0OmZ1bmN0aW9uKHQsbixlKXt2YXIgcj1bbnVsbF07ci5wdXNoLmFwcGx5KHIsbik7dmFyIGk9bmV3KEZ1bmN0aW9uLmJpbmQuYXBwbHkodCxyKSk7cmV0dXJuIGUmJmwoaSxlLnByb3RvdHlwZSksaX0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBjKHQsbil7aWYobiYmKCJvYmplY3QiPT10eXBlb2Ygbnx8ImZ1bmN0aW9uIj09dHlwZW9mIG4pKXJldHVybiBuO2lmKHZvaWQgMCE9PW4pdGhyb3cgbmV3IFR5cGVFcnJvcigiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWQiKTtyZXR1cm4gZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZCIpO3JldHVybiB0fSh0KX1mdW5jdGlvbiBoKHQsbixlKXtyZXR1cm4oaD0idW5kZWZpbmVkIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuZ2V0P1JlZmxlY3QuZ2V0OmZ1bmN0aW9uKHQsbixlKXt2YXIgcj1mdW5jdGlvbih0LG4pe2Zvcig7IU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiZudWxsIT09KHQ9YSh0KSk7KTtyZXR1cm4gdH0odCxuKTtpZihyKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsbik7cmV0dXJuIGkuZ2V0P2kuZ2V0LmNhbGwoZSk6aS52YWx1ZX19KSh0LG4sZXx8dCl9ZnVuY3Rpb24gdih0KXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4geSh0KX0odCl8fGZ1bmN0aW9uKHQpe2lmKCJ1bmRlZmluZWQiIT10eXBlb2YgU3ltYm9sJiZudWxsIT10W1N5bWJvbC5pdGVyYXRvcl18fG51bGwhPXRbIkBAaXRlcmF0b3IiXSlyZXR1cm4gQXJyYXkuZnJvbSh0KX0odCl8fGZ1bmN0aW9uKHQsbil7aWYoIXQpcmV0dXJuO2lmKCJzdHJpbmciPT10eXBlb2YgdClyZXR1cm4geSh0LG4pO3ZhciBlPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTsiT2JqZWN0Ij09PWUmJnQuY29uc3RydWN0b3ImJihlPXQuY29uc3RydWN0b3IubmFtZSk7aWYoIk1hcCI9PT1lfHwiU2V0Ij09PWUpcmV0dXJuIEFycmF5LmZyb20odCk7aWYoIkFyZ3VtZW50cyI9PT1lfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChlKSlyZXR1cm4geSh0LG4pfSh0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKX0oKX1mdW5jdGlvbiB5KHQsbil7KG51bGw9PW58fG4+dC5sZW5ndGgpJiYobj10Lmxlbmd0aCk7Zm9yKHZhciBlPTAscj1uZXcgQXJyYXkobik7ZTxuO2UrKylyW2VdPXRbZV07cmV0dXJuIHJ9TnVtYmVyLmlzSW50ZWdlcnx8KE51bWJlci5pc0ludGVnZXI9ZnVuY3Rpb24odCl7cmV0dXJuIm51bWJlciI9PXR5cGVvZiB0JiZpc0Zpbml0ZSh0KSYmTWF0aC5mbG9vcih0KT09PXR9KSxOdW1iZXIuRVBTSUxPTnx8KE51bWJlci5FUFNJTE9OPTIyMjA0NDYwNDkyNTAzMTNlLTMxKTt2YXIgZz1kKE1hdGgucG93KDEwLC02KSk7ZnVuY3Rpb24gZCh0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06NjtpZihOdW1iZXIuaXNJbnRlZ2VyKHQpKXJldHVybiB0O3ZhciBlPU1hdGgucG93KDEwLG4pO3JldHVybiBNYXRoLnJvdW5kKCgrdCtOdW1iZXIuRVBTSUxPTikqZSkvZX1mdW5jdGlvbiBwKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOmc7cmV0dXJuIE1hdGguYWJzKHQtbik8ZX12YXIgbT1NYXRoLlBJLzE4MDtmdW5jdGlvbiBiKHQpe3JldHVybiB0fWZ1bmN0aW9uIHcodCxuLGUpe3ZhciByPTEtZTtyZXR1cm4gMyplKnIqKHQqcituKmUpK2UqZSplfWZ1bmN0aW9uIHgoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjEscj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106MTtyZXR1cm4gdDwwfHx0PjF8fGU8MHx8ZT4xP251bGw6cCh0LG4pJiZwKGUscik/YjpmdW5jdGlvbihpKXtpZihpPD0wKXJldHVybiB0PjA/aSpuL3Q6MD09PW4mJmU+MD9pKnIvZTowO2lmKGk+PTEpcmV0dXJuIGU8MT8xKyhpLTEpKihyLTEpLyhlLTEpOjE9PT1lJiZ0PDE/MSsoaS0xKSoobi0xKS8odC0xKToxO2Zvcih2YXIgdSxvPTAsYT0xO288YTspe3ZhciBsPXcodCxlLHU9KG8rYSkvMik7aWYocChpLGwpKWJyZWFrO2w8aT9vPXU6YT11fXJldHVybiB3KG4scix1KX19ZnVuY3Rpb24gQSgpe3JldHVybiAxfWZ1bmN0aW9uIGsodCl7cmV0dXJuIDE9PT10PzE6MH1mdW5jdGlvbiBfKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MDtpZigxPT09dCl7aWYoMD09PW4pcmV0dXJuIGs7aWYoMT09PW4pcmV0dXJuIEF9dmFyIGU9MS90O3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdD49MT8xOih0Kz1uKmUpLXQlZX19dmFyIFM9TWF0aC5zaW4sTz1NYXRoLmNvcyxqPU1hdGguYWNvcyxNPU1hdGguYXNpbixQPU1hdGgudGFuLEU9TWF0aC5hdGFuMixJPU1hdGguUEkvMTgwLFI9MTgwL01hdGguUEksRj1NYXRoLnNxcnQsTj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjAsdT1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106MSxvPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTowLGE9YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOjA7cih0aGlzLHQpLHRoaXMubT1bbixlLGksdSxvLGFdLHRoaXMuaT1udWxsLHRoaXMudz1udWxsLHRoaXMucz1udWxsfXJldHVybiB1KHQsW3trZXk6ImRldGVybWluYW50IixnZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm07cmV0dXJuIHRbMF0qdFszXS10WzFdKnRbMl19fSx7a2V5OiJpc0lkZW50aXR5IixnZXQ6ZnVuY3Rpb24oKXtpZihudWxsPT09dGhpcy5pKXt2YXIgdD10aGlzLm07dGhpcy5pPTE9PT10WzBdJiYwPT09dFsxXSYmMD09PXRbMl0mJjE9PT10WzNdJiYwPT09dFs0XSYmMD09PXRbNV19cmV0dXJuIHRoaXMuaX19LHtrZXk6InBvaW50Iix2YWx1ZTpmdW5jdGlvbih0LG4pe3ZhciBlPXRoaXMubTtyZXR1cm57eDplWzBdKnQrZVsyXSpuK2VbNF0seTplWzFdKnQrZVszXSpuK2VbNV19fX0se2tleToidHJhbnNsYXRlU2VsZiIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowO2lmKCF0JiYhbilyZXR1cm4gdGhpczt2YXIgZT10aGlzLm07cmV0dXJuIGVbNF0rPWVbMF0qdCtlWzJdKm4sZVs1XSs9ZVsxXSp0K2VbM10qbix0aGlzLnc9dGhpcy5zPXRoaXMuaT1udWxsLHRoaXN9fSx7a2V5OiJyb3RhdGVTZWxmIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowO2lmKHQlPTM2MCl7dmFyIG49Uyh0Kj1JKSxlPU8odCkscj10aGlzLm0saT1yWzBdLHU9clsxXTtyWzBdPWkqZStyWzJdKm4sclsxXT11KmUrclszXSpuLHJbMl09clsyXSplLWkqbixyWzNdPXJbM10qZS11Km4sdGhpcy53PXRoaXMucz10aGlzLmk9bnVsbH1yZXR1cm4gdGhpc319LHtrZXk6InNjYWxlU2VsZiIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToxO2lmKDEhPT10fHwxIT09bil7dmFyIGU9dGhpcy5tO2VbMF0qPXQsZVsxXSo9dCxlWzJdKj1uLGVbM10qPW4sdGhpcy53PXRoaXMucz10aGlzLmk9bnVsbH1yZXR1cm4gdGhpc319LHtrZXk6InNrZXdTZWxmIix2YWx1ZTpmdW5jdGlvbih0LG4pe2lmKG4lPTM2MCwodCU9MzYwKXx8bil7dmFyIGU9dGhpcy5tLHI9ZVswXSxpPWVbMV0sdT1lWzJdLG89ZVszXTt0JiYodD1QKHQqSSksZVsyXSs9cip0LGVbM10rPWkqdCksbiYmKG49UChuKkkpLGVbMF0rPXUqbixlWzFdKz1vKm4pLHRoaXMudz10aGlzLnM9dGhpcy5pPW51bGx9cmV0dXJuIHRoaXN9fSx7a2V5OiJyZXNldFNlbGYiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MCxlPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTowLHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOjEsaT1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCx1PWFyZ3VtZW50cy5sZW5ndGg+NSYmdm9pZCAwIT09YXJndW1lbnRzWzVdP2FyZ3VtZW50c1s1XTowLG89dGhpcy5tO3JldHVybiBvWzBdPXQsb1sxXT1uLG9bMl09ZSxvWzNdPXIsb1s0XT1pLG9bNV09dSx0aGlzLnc9dGhpcy5zPXRoaXMuaT1udWxsLHRoaXN9fSx7a2V5OiJyZWNvbXBvc2VTZWxmIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsLG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGwsZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbCxyPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsLGk9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOm51bGw7cmV0dXJuIHRoaXMuaXNJZGVudGl0eXx8dGhpcy5yZXNldFNlbGYoKSx0JiYodC54fHx0LnkpJiZ0aGlzLnRyYW5zbGF0ZVNlbGYodC54LHQueSksbiYmdGhpcy5yb3RhdGVTZWxmKG4pLGUmJihlLngmJnRoaXMuc2tld1NlbGYoZS54LDApLGUueSYmdGhpcy5za2V3U2VsZigwLGUueSkpLCFyfHwxPT09ci54JiYxPT09ci55fHx0aGlzLnNjYWxlU2VsZihyLngsci55KSxpJiYoaS54fHxpLnkpJiZ0aGlzLnRyYW5zbGF0ZVNlbGYoaS54LGkueSksdGhpc319LHtrZXk6ImRlY29tcG9zZSIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowLGU9dGhpcy5tLHI9ZVswXSplWzBdK2VbMV0qZVsxXSxpPVtbZVswXSxlWzFdXSxbZVsyXSxlWzNdXV0sdT1GKHIpO2lmKDA9PT11KXJldHVybntvcmlnaW46e3g6ZChlWzRdKSx5OmQoZVs1XSl9LHRyYW5zbGF0ZTp7eDpkKHQpLHk6ZChuKX0sc2NhbGU6e3g6MCx5OjB9LHNrZXc6e3g6MCx5OjB9LHJvdGF0ZTowfTtpWzBdWzBdLz11LGlbMF1bMV0vPXU7dmFyIG89ZVswXSplWzNdLWVbMV0qZVsyXTwwO28mJih1PS11KTt2YXIgYT1pWzBdWzBdKmlbMV1bMF0raVswXVsxXSppWzFdWzFdO2lbMV1bMF0tPWlbMF1bMF0qYSxpWzFdWzFdLT1pWzBdWzFdKmE7dmFyIGw9RihpWzFdWzBdKmlbMV1bMF0raVsxXVsxXSppWzFdWzFdKTtpZigwPT09bClyZXR1cm57b3JpZ2luOnt4OmQoZVs0XSkseTpkKGVbNV0pfSx0cmFuc2xhdGU6e3g6ZCh0KSx5OmQobil9LHNjYWxlOnt4OmQodSkseTowfSxza2V3Ont4OjAseTowfSxyb3RhdGU6MH07aVsxXVswXS89bCxpWzFdWzFdLz1sLGEvPWw7dmFyIHM9MDtyZXR1cm4gaVsxXVsxXTwwPyhzPWooaVsxXVsxXSkqUixpWzBdWzFdPDAmJihzPTM2MC1zKSk6cz1NKGlbMF1bMV0pKlIsbyYmKHM9LXMpLGE9RShhLEYoaVswXVswXSppWzBdWzBdK2lbMF1bMV0qaVswXVsxXSkpKlIsbyYmKGE9LWEpLHtvcmlnaW46e3g6ZChlWzRdKSx5OmQoZVs1XSl9LHRyYW5zbGF0ZTp7eDpkKHQpLHk6ZChuKX0sc2NhbGU6e3g6ZCh1KSx5OmQobCl9LHNrZXc6e3g6ZChhKSx5OjB9LHJvdGF0ZTpkKHMpfX19LHtrZXk6ImNsb25lIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMubTtyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodFswXSx0WzFdLHRbMl0sdFszXSx0WzRdLHRbNV0pfX0se2tleToidG9TdHJpbmciLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOiIgIjtpZihudWxsPT09dGhpcy5zKXt2YXIgbj10aGlzLm0ubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gZCh0KX0pKTsxPT09blswXSYmMD09PW5bMV0mJjA9PT1uWzJdJiYxPT09blszXT90aGlzLnM9InRyYW5zbGF0ZSgiK25bNF0rdCtuWzVdKyIpIjp0aGlzLnM9Im1hdHJpeCgiK24uam9pbih0KSsiKSJ9cmV0dXJuIHRoaXMuc319XSxbe2tleToiY3JlYXRlIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdD9BcnJheS5pc0FycmF5KHQpP2YodGhpcyx2KHQpKTp0IGluc3RhbmNlb2YgdGhpcz90LmNsb25lKCk6KG5ldyB0aGlzKS5yZWNvbXBvc2VTZWxmKHQub3JpZ2luLHQucm90YXRlLHQuc2tldyx0LnNjYWxlLHQudHJhbnNsYXRlKTpuZXcgdGhpc319XSksdH0oKTtmdW5jdGlvbiBUKHQsbixlKXtyZXR1cm4gdD49LjU/ZTpufWZ1bmN0aW9uIHEodCxuLGUpe3JldHVybiAwPT09dHx8bj09PWU/bjp0KihlLW4pK259ZnVuY3Rpb24gQih0LG4sZSl7dmFyIHI9cSh0LG4sZSk7cmV0dXJuIHI8PTA/MDpyfWZ1bmN0aW9uIEwodCxuLGUpe3ZhciByPXEodCxuLGUpO3JldHVybiByPD0wPzA6cj49MT8xOnJ9ZnVuY3Rpb24gQyh0LG4sZSl7cmV0dXJuIDA9PT10P246MT09PXQ/ZTp7eDpxKHQsbi54LGUueCkseTpxKHQsbi55LGUueSl9fWZ1bmN0aW9uIEQodCxuLGUpe3ZhciByPWZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gTWF0aC5yb3VuZChxKHQsbixlKSl9KHQsbixlKTtyZXR1cm4gcjw9MD8wOnI+PTI1NT8yNTU6cn1mdW5jdGlvbiB6KHQsbixlKXtyZXR1cm4gMD09PXQ/bjoxPT09dD9lOntyOkQodCxuLnIsZS5yKSxnOkQodCxuLmcsZS5nKSxiOkQodCxuLmIsZS5iKSxhOnEodCxudWxsPT1uLmE/MTpuLmEsbnVsbD09ZS5hPzE6ZS5hKX19ZnVuY3Rpb24gVih0LG4pe2Zvcih2YXIgZT1bXSxyPTA7cjx0O3IrKyllLnB1c2gobik7cmV0dXJuIGV9ZnVuY3Rpb24gRyh0LG4pe2lmKC0tbjw9MClyZXR1cm4gdDt2YXIgZT0odD1PYmplY3QuYXNzaWduKFtdLHQpKS5sZW5ndGg7ZG97Zm9yKHZhciByPTA7cjxlO3IrKyl0LnB1c2godFtyXSl9d2hpbGUoLS1uPjApO3JldHVybiB0fXZhciBZLCQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KG4pe3IodGhpcyx0KSx0aGlzLmxpc3Q9bix0aGlzLmxlbmd0aD1uLmxlbmd0aH1yZXR1cm4gdSh0LFt7a2V5OiJzZXRBdHRyaWJ1dGUiLHZhbHVlOmZ1bmN0aW9uKHQsbil7Zm9yKHZhciBlPXRoaXMubGlzdCxyPTA7cjx0aGlzLmxlbmd0aDtyKyspZVtyXS5zZXRBdHRyaWJ1dGUodCxuKX19LHtrZXk6InJlbW92ZUF0dHJpYnV0ZSIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBuPXRoaXMubGlzdCxlPTA7ZTx0aGlzLmxlbmd0aDtlKyspbltlXS5yZW1vdmVBdHRyaWJ1dGUodCl9fSx7a2V5OiJzdHlsZSIsdmFsdWU6ZnVuY3Rpb24odCxuKXtmb3IodmFyIGU9dGhpcy5saXN0LHI9MDtyPHRoaXMubGVuZ3RoO3IrKyllW3JdLnN0eWxlW3RdPW59fV0pLHR9KCksVT0vLS4vZyxRPWZ1bmN0aW9uKHQsbil7cmV0dXJuIG4udG9VcHBlckNhc2UoKX07ZnVuY3Rpb24gSCh0KXtyZXR1cm4iZnVuY3Rpb24iPT10eXBlb2YgdD90OlR9ZnVuY3Rpb24gSih0KXtyZXR1cm4gdD8iZnVuY3Rpb24iPT10eXBlb2YgdD90OkFycmF5LmlzQXJyYXkodCk/ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOmI7aWYoIUFycmF5LmlzQXJyYXkodCkpcmV0dXJuIG47c3dpdGNoKHQubGVuZ3RoKXtjYXNlIDE6cmV0dXJuIF8odFswXSl8fG47Y2FzZSAyOnJldHVybiBfKHRbMF0sdFsxXSl8fG47Y2FzZSA0OnJldHVybiB4KHRbMF0sdFsxXSx0WzJdLHRbM10pfHxufXJldHVybiBufSh0LG51bGwpOmZ1bmN0aW9uKHQsbil7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOmI7c3dpdGNoKHQpe2Nhc2UibGluZWFyIjpyZXR1cm4gYjtjYXNlInN0ZXBzIjpyZXR1cm4gXyhuLnN0ZXBzfHwxLG4uanVtcHx8MCl8fGU7Y2FzZSJiZXppZXIiOmNhc2UiY3ViaWMtYmV6aWVyIjpyZXR1cm4geChuLngxfHwwLG4ueTF8fDAsbi54Mnx8MCxuLnkyfHwwKXx8ZX1yZXR1cm4gZX0odC50eXBlLHQudmFsdWUsbnVsbCk6bnVsbH1mdW5jdGlvbiBaKHQsbixlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSYmYXJndW1lbnRzWzNdLGk9bi5sZW5ndGgtMTtpZih0PD1uWzBdLnQpcmV0dXJuIHI/WzAsMCxuWzBdLnZdOm5bMF0udjtpZih0Pj1uW2ldLnQpcmV0dXJuIHI/W2ksMSxuW2ldLnZdOm5baV0udjt2YXIgdSxvPW5bMF0sYT1udWxsO2Zvcih1PTE7dTw9aTt1Kyspe2lmKCEodD5uW3VdLnQpKXthPW5bdV07YnJlYWt9bz1uW3VdfXJldHVybiBudWxsPT1hP3I/W2ksMSxuW2ldLnZdOm5baV0udjpvLnQ9PT1hLnQ/cj9bdSwxLGEudl06YS52Oih0PSh0LW8udCkvKGEudC1vLnQpLG8uZSYmKHQ9by5lKHQpKSxyP1t1LHQsZSh0LG8udixhLnYpXTplKHQsby52LGEudikpfWZ1bmN0aW9uIEsodCxuKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtyZXR1cm4gdCYmdC5sZW5ndGg/ImZ1bmN0aW9uIiE9dHlwZW9mIG4/bnVsbDooImZ1bmN0aW9uIiE9dHlwZW9mIGUmJihlPW51bGwpLGZ1bmN0aW9uKHIpe3ZhciBpPVoocix0LG4pO3JldHVybiBudWxsIT1pJiZlJiYoaT1lKGkpKSxpfSk6bnVsbH1mdW5jdGlvbiBXKHQsbil7cmV0dXJuIHQudC1uLnR9ZnVuY3Rpb24gWCh0LG4scixpLHUpe3ZhciBvLGE9IkAiPT09clswXSxsPSIjIj09PXJbMF0scz1ZW3JdLGY9VDtzd2l0Y2goYT8obz1yLnN1YnN0cigxKSxyPW8ucmVwbGFjZShVLFEpKTpsJiYocj1yLnN1YnN0cigxKSksZShzKSl7Y2FzZSJmdW5jdGlvbiI6aWYoZj1zKGksdSxaLEoscixhLG4sdCksbClyZXR1cm4gZjticmVhaztjYXNlInN0cmluZyI6Zj1LKGksSChzKSk7YnJlYWs7Y2FzZSJvYmplY3QiOmlmKChmPUsoaSxIKHMuaSkscy5mKSkmJiJmdW5jdGlvbiI9PXR5cGVvZiBzLnUpcmV0dXJuIHMudShuLGYscixhLHQpfXJldHVybiBmP2Z1bmN0aW9uKHQsbixlKXtpZihhcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSYmYXJndW1lbnRzWzNdKXJldHVybiB0IGluc3RhbmNlb2YgJD9mdW5jdGlvbihyKXtyZXR1cm4gdC5zdHlsZShuLGUocikpfTpmdW5jdGlvbihyKXtyZXR1cm4gdC5zdHlsZVtuXT1lKHIpfTtpZihBcnJheS5pc0FycmF5KG4pKXt2YXIgcj1uLmxlbmd0aDtyZXR1cm4gZnVuY3Rpb24oaSl7dmFyIHU9ZShpKTtpZihudWxsPT11KWZvcih2YXIgbz0wO288cjtvKyspdFtvXS5yZW1vdmVBdHRyaWJ1dGUobik7ZWxzZSBmb3IodmFyIGE9MDthPHI7YSsrKXRbYV0uc2V0QXR0cmlidXRlKG4sdSl9fXJldHVybiBmdW5jdGlvbihyKXt2YXIgaT1lKHIpO251bGw9PWk/dC5yZW1vdmVBdHRyaWJ1dGUobik6dC5zZXRBdHRyaWJ1dGUobixpKX19KG4scixmLGEpOm51bGx9ZnVuY3Rpb24gdHQodCxuLHIsaSl7aWYoIWl8fCJvYmplY3QiIT09ZShpKSlyZXR1cm4gbnVsbDt2YXIgdT1udWxsLG89bnVsbDtyZXR1cm4gQXJyYXkuaXNBcnJheShpKT9vPWZ1bmN0aW9uKHQpe2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXS5lJiYodFtuXS5lPUoodFtuXS5lKSk7cmV0dXJuIHQuc29ydChXKX0oaSk6KG89aS5rZXlzLHU9aS5kYXRhfHxudWxsKSxvP1godCxuLHIsbyx1KTpudWxsfWZ1bmN0aW9uIG50KHQsbixlKXtpZighZSlyZXR1cm4gbnVsbDt2YXIgcj1bXTtmb3IodmFyIGkgaW4gZSlpZihlLmhhc093blByb3BlcnR5KGkpKXt2YXIgdT10dCh0LG4saSxlW2ldKTt1JiZyLnB1c2godSl9cmV0dXJuIHIubGVuZ3RoP3I6bnVsbH1mdW5jdGlvbiBldCh0LG4pe2lmKCFuLnNldHRpbmdzLmR1cmF0aW9ufHxuLnNldHRpbmdzLmR1cmF0aW9uPDApcmV0dXJuIG51bGw7dmFyIGUscixpLHUsbyxhPWZ1bmN0aW9uKHQsbil7aWYoIW4pcmV0dXJuIG51bGw7dmFyIGU9W107aWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIHI9bi5sZW5ndGgsaT0wO2k8cjtpKyspe3ZhciB1PW5baV07aWYoMj09PXUubGVuZ3RoKXt2YXIgbz1udWxsO2lmKCJzdHJpbmciPT10eXBlb2YgdVswXSlvPXQuZ2V0RWxlbWVudEJ5SWQodVswXSk7ZWxzZSBpZihBcnJheS5pc0FycmF5KHVbMF0pKXtvPVtdO2Zvcih2YXIgYT0wO2E8dVswXS5sZW5ndGg7YSsrKWlmKCJzdHJpbmciPT10eXBlb2YgdVswXVthXSl7dmFyIGw9dC5nZXRFbGVtZW50QnlJZCh1WzBdW2FdKTtsJiZvLnB1c2gobCl9bz1vLmxlbmd0aD8xPT09by5sZW5ndGg/b1swXTpuZXcgJChvKTpudWxsfWlmKG8pe3ZhciBzPW50KHQsbyx1WzFdKTtzJiYoZT1lLmNvbmNhdChzKSl9fX1lbHNlIGZvcih2YXIgZiBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkoZikpe3ZhciBjPXQuZ2V0RWxlbWVudEJ5SWQoZik7aWYoYyl7dmFyIGg9bnQodCxjLG5bZl0pO2gmJihlPWUuY29uY2F0KGgpKX19cmV0dXJuIGUubGVuZ3RoP2U6bnVsbH0odCxuLmVsZW1lbnRzKTtyZXR1cm4gYT8oZT1hLHI9bi5zZXR0aW5ncyxpPXIuZHVyYXRpb24sdT1lLmxlbmd0aCxvPW51bGwsZnVuY3Rpb24odCxuKXt2YXIgYT1yLml0ZXJhdGlvbnN8fDEvMCxsPShyLmFsdGVybmF0ZSYmYSUyPT0wKV5yLmRpcmVjdGlvbj4wP2k6MCxzPXQlaSxmPTErKHQtcykvaTtuKj1yLmRpcmVjdGlvbixyLmFsdGVybmF0ZSYmZiUyPT0wJiYobj0tbik7dmFyIGM9ITE7aWYoZj5hKXM9bCxjPSEwLC0xPT09ci5maWxsJiYocz1yLmRpcmVjdGlvbj4wPzA6aSk7ZWxzZSBpZihuPDAmJihzPWktcykscz09PW8pcmV0dXJuITE7bz1zO2Zvcih2YXIgaD0wO2g8dTtoKyspZVtoXShzKTtyZXR1cm4gY30pOm51bGx9ZnVuY3Rpb24gcnQodCxuKXtpZihZPW4sIXR8fCF0LnJvb3R8fCFBcnJheS5pc0FycmF5KHQuYW5pbWF0aW9ucykpcmV0dXJuIG51bGw7dmFyIGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJzdmciKSxlPTA7ZTxuLmxlbmd0aDtlKyspaWYobltlXS5pZD09PXQucm9vdCYmIW5bZV0uc3ZnYXRvckFuaW1hdGlvbilyZXR1cm4gbltlXS5zdmdhdG9yQW5pbWF0aW9uPSEwLG5bZV07cmV0dXJuIG51bGx9KHQpO2lmKCFlKXJldHVybiBudWxsO3ZhciByPXQuYW5pbWF0aW9ucy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBldChlLHQpfSkpLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuISF0fSkpO3JldHVybiByLmxlbmd0aD97c3ZnOmUsYW5pbWF0aW9uczpyLGFuaW1hdGlvblNldHRpbmdzOnQuYW5pbWF0aW9uU2V0dGluZ3Msb3B0aW9uczp0Lm9wdGlvbnN8fHZvaWQgMH06bnVsbH1mdW5jdGlvbiBpdCh0KXtyZXR1cm4rKCIweCIrKHQucmVwbGFjZSgvW14wLTlhLWZBLUZdKy9nLCIiKXx8MjcpKX1mdW5jdGlvbiB1dCh0LG4sZSl7cmV0dXJuIXR8fCFlfHxuPnQubGVuZ3RoP3Q6dC5zdWJzdHJpbmcoMCxuKSt1dCh0LnN1YnN0cmluZyhuKzEpLGUsZSl9ZnVuY3Rpb24gb3QodCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjI3O3JldHVybiF0fHx0JW4/dCVuOm90KHQvbixuKX1mdW5jdGlvbiBhdCh0LG4sZSl7aWYodCYmdC5sZW5ndGgpe3ZhciByPWl0KGUpLGk9aXQobiksdT1vdChyKSs1LG89dXQodCxvdChyLDUpLHUpO3JldHVybiBvPW8ucmVwbGFjZSgvXHg3YyQvZywiPT0iKS5yZXBsYWNlKC9ceDJmJC9nLCI9Iiksbz1mdW5jdGlvbih0LG4sZSl7dmFyIHI9KygiMHgiK3Quc3Vic3RyaW5nKDAsNCkpO3Q9dC5zdWJzdHJpbmcoNCk7Zm9yKHZhciBpPW4lcitlJTI3LHU9W10sbz0wO288dC5sZW5ndGg7bys9MilpZigifCIhPT10W29dKXt2YXIgYT0rKCIweCIrdFtvXSt0W28rMV0pLWk7dS5wdXNoKGEpfWVsc2V7dmFyIGw9KygiMHgiK3Quc3Vic3RyaW5nKG8rMSxvKzErNCkpLWk7bys9Myx1LnB1c2gobCl9cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLHUpfShvPShvPWF0b2IobykpLnJlcGxhY2UoL1tceDQxLVx4NUFdL2csIiIpLGksciksbz1KU09OLnBhcnNlKG8pfX12YXIgbHQ9W3trZXk6ImFsdGVybmF0ZSIsZGVmOiExfSx7a2V5OiJmaWxsIixkZWY6MX0se2tleToiaXRlcmF0aW9ucyIsZGVmOjB9LHtrZXk6ImRpcmVjdGlvbiIsZGVmOjF9LHtrZXk6InNwZWVkIixkZWY6MX0se2tleToiZnBzIixkZWY6MTAwfV0sc3Q9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KG4sZSl7dmFyIGk9dGhpcyx1PWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO3IodGhpcyx0KSx0aGlzLl9pZD0wLHRoaXMuX3J1bm5pbmc9ITEsdGhpcy5fcm9sbGluZ0JhY2s9ITEsdGhpcy5fYW5pbWF0aW9ucz1uLHRoaXMuX3NldHRpbmdzPWUsKCF1fHx1PCIyMDIyLTA1LTAyIikmJmRlbGV0ZSB0aGlzLl9zZXR0aW5ncy5zcGVlZCxsdC5mb3JFYWNoKChmdW5jdGlvbih0KXtpLl9zZXR0aW5nc1t0LmtleV09aS5fc2V0dGluZ3NbdC5rZXldfHx0LmRlZn0pKSx0aGlzLmR1cmF0aW9uPWUuZHVyYXRpb24sdGhpcy5vZmZzZXQ9ZS5vZmZzZXR8fDAsdGhpcy5yb2xsYmFja1N0YXJ0T2Zmc2V0PTB9cmV0dXJuIHUodCxbe2tleToiYWx0ZXJuYXRlIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc2V0dGluZ3MuYWx0ZXJuYXRlfX0se2tleToiZmlsbCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NldHRpbmdzLmZpbGx9fSx7a2V5OiJpdGVyYXRpb25zIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc2V0dGluZ3MuaXRlcmF0aW9uc319LHtrZXk6ImRpcmVjdGlvbiIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NldHRpbmdzLmRpcmVjdGlvbn19LHtrZXk6InNwZWVkIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc2V0dGluZ3Muc3BlZWR9fSx7a2V5OiJmcHMiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zZXR0aW5ncy5mcHN9fSx7a2V5OiJtYXhGaW5pdGVEdXJhdGlvbiIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlcmF0aW9ucz4wP3RoaXMuaXRlcmF0aW9ucyp0aGlzLmR1cmF0aW9uOnRoaXMuZHVyYXRpb259fSx7a2V5OiJfYXBwbHkiLHZhbHVlOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sZT10aGlzLl9hbmltYXRpb25zLHI9ZS5sZW5ndGgsaT0wLHU9MDt1PHI7dSsrKW5bdV0/aSsrOihuW3VdPWVbdV0odCwxKSxuW3VdJiZpKyspO3JldHVybiBpfX0se2tleToiX3JvbGxiYWNrIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgbj10aGlzLGU9MS8wLHI9bnVsbDt0aGlzLnJvbGxiYWNrU3RhcnRPZmZzZXQ9dCx0aGlzLl9yb2xsaW5nQmFjaz0hMCx0aGlzLl9ydW5uaW5nPSEwO3RoaXMuX2lkPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uIGkodSl7aWYobi5fcm9sbGluZ0JhY2spe251bGw9PXImJihyPXUpO3ZhciBvPU1hdGgucm91bmQodC0odS1yKSpuLnNwZWVkKTtpZihvPm4uZHVyYXRpb24mJmUhPT0xLzApe3ZhciBhPSEhbi5hbHRlcm5hdGUmJm8vbi5kdXJhdGlvbiUyPjEsbD1vJW4uZHVyYXRpb247bz0obCs9YT9uLmR1cmF0aW9uOjApfHxuLmR1cmF0aW9ufXZhciBzPShuLmZwcz8xZTMvbi5mcHM6MCkqbi5zcGVlZCxmPU1hdGgubWF4KDAsbyk7Zjw9ZS1zJiYobi5vZmZzZXQ9ZixlPWYsbi5fYXBwbHkoZikpO3ZhciBjPW4uaXRlcmF0aW9ucz4wJiYtMT09PW4uZmlsbCYmbz49bi5tYXhGaW5pdGVEdXJhdGlvbjsobzw9MHx8bi5vZmZzZXQ8b3x8YykmJm4uc3RvcCgpLG4uX2lkPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaSl9fSkpfX0se2tleToiX3N0YXJ0Iix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MCxlPS0xLzAscj1udWxsLGk9e307dGhpcy5fcnVubmluZz0hMDt2YXIgdT1mdW5jdGlvbiB1KG8pe251bGw9PXImJihyPW8pO3ZhciBhPU1hdGgucm91bmQoKG8tcikqdC5zcGVlZCtuKSxsPSh0LmZwcz8xZTMvdC5mcHM6MCkqdC5zcGVlZDtpZihhPj1lK2wmJiF0Ll9yb2xsaW5nQmFjayYmKHQub2Zmc2V0PWEsZT1hLHQuX2FwcGx5KGEsaSk9PT10Ll9hbmltYXRpb25zLmxlbmd0aCkpcmV0dXJuIHZvaWQgdC5wYXVzZSghMCk7dC5faWQ9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1KX07dGhpcy5faWQ9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1KX19LHtrZXk6Il9wYXVzZSIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9pZCYmd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2lkKSx0aGlzLl9ydW5uaW5nPSExfX0se2tleToicGxheSIsdmFsdWU6ZnVuY3Rpb24oKXtpZighdGhpcy5fcnVubmluZylyZXR1cm4gdGhpcy5fcm9sbGluZ0JhY2s/dGhpcy5fcm9sbGJhY2sodGhpcy5vZmZzZXQpOnRoaXMuX3N0YXJ0KHRoaXMub2Zmc2V0KX19LHtrZXk6InN0b3AiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fcGF1c2UoKSx0aGlzLm9mZnNldD0wLHRoaXMucm9sbGJhY2tTdGFydE9mZnNldD0wLHRoaXMuX3JvbGxpbmdCYWNrPSExLHRoaXMuX2FwcGx5KDApfX0se2tleToicmVhY2hlZFRvRW5kIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLml0ZXJhdGlvbnM+MCYmdGhpcy5vZmZzZXQ+PXRoaXMuaXRlcmF0aW9ucyp0aGlzLmR1cmF0aW9ufX0se2tleToicmVzdGFydCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO3RoaXMuc3RvcCh0KSx0aGlzLnBsYXkodCl9fSx7a2V5OiJwYXVzZSIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9wYXVzZSgpfX0se2tleToicmV2ZXJzZSIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmRpcmVjdGlvbj0tdGhpcy5kaXJlY3Rpb259fV0sW3trZXk6ImJ1aWxkIix2YWx1ZTpmdW5jdGlvbih0LG4pe2RlbGV0ZSB0LmFuaW1hdGlvblNldHRpbmdzLHQub3B0aW9ucz1hdCh0Lm9wdGlvbnMsdC5yb290LCI1YzdmMzYwYyIpLHQuYW5pbWF0aW9ucy5tYXAoKGZ1bmN0aW9uKG4pe24uc2V0dGluZ3M9YXQobi5zLHQucm9vdCwiNWM3ZjM2MGMiKSxkZWxldGUgbi5zLHQuYW5pbWF0aW9uU2V0dGluZ3N8fCh0LmFuaW1hdGlvblNldHRpbmdzPW4uc2V0dGluZ3MpfSkpO3ZhciBlPXQudmVyc2lvbjtpZighKHQ9cnQodCxuKSkpcmV0dXJuIG51bGw7dmFyIHI9dC5vcHRpb25zfHx7fSxpPW5ldyB0aGlzKHQuYW5pbWF0aW9ucyx0LmFuaW1hdGlvblNldHRpbmdzLGUpO3JldHVybntlbDp0LnN2ZyxvcHRpb25zOnIscGxheWVyOml9fX0se2tleToicHVzaCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuYnVpbGQodCl9fSx7a2V5OiJpbml0Iix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsbj13aW5kb3cuX19TVkdBVE9SX1BMQVlFUl9fJiZ3aW5kb3cuX19TVkdBVE9SX1BMQVlFUl9fWyI1YzdmMzYwYyJdO0FycmF5LmlzQXJyYXkobikmJm4uc3BsaWNlKDApLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiB0LmJ1aWxkKG4pfSkpfX1dKSx0fSgpO2Z1bmN0aW9uIGZ0KHQpe3JldHVybiBkKHQpKyIifWZ1bmN0aW9uIGN0KHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToiICI7cmV0dXJuIHQmJnQubGVuZ3RoP3QubWFwKGZ0KS5qb2luKG4pOiIifWZ1bmN0aW9uIGh0KHQpe2lmKCF0KXJldHVybiJ0cmFuc3BhcmVudCI7aWYobnVsbD09dC5hfHx0LmE+PTEpe3ZhciBuPWZ1bmN0aW9uKHQpe3JldHVybiAxPT09KHQ9cGFyc2VJbnQodCkudG9TdHJpbmcoMTYpKS5sZW5ndGg/IjAiK3Q6dH0sZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5jaGFyQXQoMCk9PT10LmNoYXJBdCgxKX0scj1uKHQuciksaT1uKHQuZyksdT1uKHQuYik7cmV0dXJuIGUocikmJmUoaSkmJmUodSkmJihyPXIuY2hhckF0KDApLGk9aS5jaGFyQXQoMCksdT11LmNoYXJBdCgwKSksIiMiK3IraSt1fXJldHVybiJyZ2JhKCIrdC5yKyIsIit0LmcrIiwiK3QuYisiLCIrdC5hKyIpIn1mdW5jdGlvbiB2dCh0KXtyZXR1cm4gdD8idXJsKCMiK3QrIikiOiJub25lIn0hZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxuPVsibXMiLCJtb3oiLCJ3ZWJraXQiLCJvIl0sZT0wO2U8bi5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrZSl3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tuW2VdKyJSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W25bZV0rIkNhbmNlbEFuaW1hdGlvbkZyYW1lIl18fHdpbmRvd1tuW2VdKyJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXTt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihuKXt2YXIgZT1EYXRlLm5vdygpLHI9TWF0aC5tYXgoMCwxNi0oZS10KSksaT13aW5kb3cuc2V0VGltZW91dCgoZnVuY3Rpb24oKXtuKGUrcil9KSxyKTtyZXR1cm4gdD1lK3IsaX0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvdy5jbGVhclRpbWVvdXQpfSgpO3ZhciB5dD17ZjpudWxsLGk6ZnVuY3Rpb24odCxuLGUpe3JldHVybiAwPT09dD9uOjE9PT10P2U6e3g6Qih0LG4ueCxlLngpLHk6Qih0LG4ueSxlLnkpfX0sdTpmdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj1uKGUpO3Quc2V0QXR0cmlidXRlKCJyeCIsZnQoci54KSksdC5zZXRBdHRyaWJ1dGUoInJ5IixmdChyLnkpKX19fSxndD17ZjpudWxsLGk6ZnVuY3Rpb24odCxuLGUpe3JldHVybiAwPT09dD9uOjE9PT10P2U6e3dpZHRoOkIodCxuLndpZHRoLGUud2lkdGgpLGhlaWdodDpCKHQsbi5oZWlnaHQsZS5oZWlnaHQpfX0sdTpmdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj1uKGUpO3Quc2V0QXR0cmlidXRlKCJ3aWR0aCIsZnQoci53aWR0aCkpLHQuc2V0QXR0cmlidXRlKCJoZWlnaHQiLGZ0KHIuaGVpZ2h0KSl9fX07T2JqZWN0LmZyZWV6ZSh7TToyLEw6MixaOjAsSDoxLFY6MSxDOjYsUTo0LFQ6MixTOjQsQTo3fSk7dmFyIGR0PXt9LHB0PW51bGw7ZnVuY3Rpb24gbXQodCl7dmFyIG49ZnVuY3Rpb24oKXtpZihwdClyZXR1cm4gcHQ7aWYoIm9iamVjdCIhPT0oInVuZGVmaW5lZCI9PXR5cGVvZiBkb2N1bWVudD8idW5kZWZpbmVkIjplKGRvY3VtZW50KSl8fCFkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMpcmV0dXJue307dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIsInN2ZyIpO3JldHVybiB0JiZ0LnN0eWxlPyh0LnN0eWxlLnBvc2l0aW9uPSJhYnNvbHV0ZSIsdC5zdHlsZS5vcGFjaXR5PSIwLjAxIix0LnN0eWxlLnpJbmRleD0iLTk5OTkiLHQuc3R5bGUubGVmdD0iLTk5OTlweCIsdC5zdHlsZS53aWR0aD0iMXB4Iix0LnN0eWxlLmhlaWdodD0iMXB4IixwdD17c3ZnOnR9KTp7fX0oKS5zdmc7aWYoIW4pcmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBudWxsfTt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobi5uYW1lc3BhY2VVUkksInBhdGgiKTtyLnNldEF0dHJpYnV0ZU5TKG51bGwsImQiLHQpLHIuc2V0QXR0cmlidXRlTlMobnVsbCwiZmlsbCIsIm5vbmUiKSxyLnNldEF0dHJpYnV0ZU5TKG51bGwsInN0cm9rZSIsIm5vbmUiKSxuLmFwcGVuZENoaWxkKHIpO3ZhciBpPXIuZ2V0VG90YWxMZW5ndGgoKTtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49ci5nZXRQb2ludEF0TGVuZ3RoKGkqdCk7cmV0dXJue3g6bi54LHk6bi55fX19ZnVuY3Rpb24gYnQodCl7cmV0dXJuIGR0W3RdP2R0W3RdOmR0W3RdPW10KHQpfWZ1bmN0aW9uIHd0KHQsbixlLHIpe2lmKCF0fHwhcilyZXR1cm4hMTt2YXIgaT1bIk0iLHQueCx0LnldO2lmKG4mJmUmJihpLnB1c2goIkMiKSxpLnB1c2gobi54KSxpLnB1c2gobi55KSxpLnB1c2goZS54KSxpLnB1c2goZS55KSksbj8hZTplKXt2YXIgdT1ufHxlO2kucHVzaCgiUSIpLGkucHVzaCh1LngpLGkucHVzaCh1LnkpfXJldHVybiBufHxlfHxpLnB1c2goIkwiKSxpLnB1c2goci54KSxpLnB1c2goci55KSxpLmpvaW4oIiAiKX1mdW5jdGlvbiB4dCh0LG4sZSxyKXt2YXIgaT1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MSx1PXd0KHQsbixlLHIpLG89YnQodSk7dHJ5e3JldHVybiBvKGkpfWNhdGNoKHQpe3JldHVybiBudWxsfX1mdW5jdGlvbiBBdCh0LG4sZSl7cmV0dXJuIHQrKG4tdCkqZX1mdW5jdGlvbiBrdCh0LG4sZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10mJmFyZ3VtZW50c1szXSxpPXt4OkF0KHQueCxuLngsZSkseTpBdCh0Lnksbi55LGUpfTtyZXR1cm4gciYmKGkuYT1fdCh0LG4pKSxpfWZ1bmN0aW9uIF90KHQsbil7cmV0dXJuIE1hdGguYXRhbjIobi55LXQueSxuLngtdC54KX1mdW5jdGlvbiBTdCh0LG4sZSxyKXt2YXIgaT0xLXI7cmV0dXJuIGkqaSp0KzIqaSpyKm4rcipyKmV9ZnVuY3Rpb24gT3QodCxuLGUscil7cmV0dXJuIDIqKDEtcikqKG4tdCkrMipyKihlLW4pfWZ1bmN0aW9uIGp0KHQsbixlLHIpe3ZhciBpPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdJiZhcmd1bWVudHNbNF0sdT14dCh0LG4sbnVsbCxlLHIpO3JldHVybiB1fHwodT17eDpTdCh0Lngsbi54LGUueCxyKSx5OlN0KHQueSxuLnksZS55LHIpfSksaSYmKHUuYT1NdCh0LG4sZSxyKSksdX1mdW5jdGlvbiBNdCh0LG4sZSxyKXtyZXR1cm4gTWF0aC5hdGFuMihPdCh0Lnksbi55LGUueSxyKSxPdCh0Lngsbi54LGUueCxyKSl9ZnVuY3Rpb24gUHQodCxuLGUscixpKXt2YXIgdT1pKmk7cmV0dXJuIGkqdSooci10KzMqKG4tZSkpKzMqdSoodCtlLTIqbikrMyppKihuLXQpK3R9ZnVuY3Rpb24gRXQodCxuLGUscixpKXt2YXIgdT0xLWk7cmV0dXJuIDMqKHUqdSoobi10KSsyKnUqaSooZS1uKStpKmkqKHItZSkpfWZ1bmN0aW9uIEl0KHQsbixlLHIsaSl7dmFyIHU9YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0mJmFyZ3VtZW50c1s1XSxvPXh0KHQsbixlLHIsaSk7cmV0dXJuIG98fChvPXt4OlB0KHQueCxuLngsZS54LHIueCxpKSx5OlB0KHQueSxuLnksZS55LHIueSxpKX0pLHUmJihvLmE9UnQodCxuLGUscixpKSksb31mdW5jdGlvbiBSdCh0LG4sZSxyLGkpe3JldHVybiBNYXRoLmF0YW4yKEV0KHQueSxuLnksZS55LHIueSxpKSxFdCh0Lngsbi54LGUueCxyLngsaSkpfWZ1bmN0aW9uIEZ0KHQsbixlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXSYmYXJndW1lbnRzWzNdO2lmKFR0KG4pKXtpZihxdChlKSlyZXR1cm4ganQobixlLnN0YXJ0LGUsdCxyKX1lbHNlIGlmKFR0KGUpKXtpZihCdChuKSlyZXR1cm4ganQobixuLmVuZCxlLHQscil9ZWxzZXtpZihCdChuKSlyZXR1cm4gcXQoZSk/SXQobixuLmVuZCxlLnN0YXJ0LGUsdCxyKTpqdChuLG4uZW5kLGUsdCxyKTtpZihxdChlKSlyZXR1cm4ganQobixlLnN0YXJ0LGUsdCxyKX1yZXR1cm4ga3QobixlLHQscil9ZnVuY3Rpb24gTnQodCxuLGUpe3ZhciByPUZ0KHQsbixlLCEwKTtyZXR1cm4gci5hPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdP3QrTWF0aC5QSTp0fShyLmEpL20scn1mdW5jdGlvbiBUdCh0KXtyZXR1cm4hdC50eXBlfHwiY29ybmVyIj09PXQudHlwZX1mdW5jdGlvbiBxdCh0KXtyZXR1cm4gbnVsbCE9dC5zdGFydCYmIVR0KHQpfWZ1bmN0aW9uIEJ0KHQpe3JldHVybiBudWxsIT10LmVuZCYmIVR0KHQpfXZhciBMdD1uZXcgTjt2YXIgQ3Q9e2Y6ZnQsaTpxfSxEdD17ZjpmdCxpOkx9O2Z1bmN0aW9uIHp0KHQsbixlKXtyZXR1cm4gdC5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0LG4sZSl7dmFyIHI9dC52O2lmKCFyfHwiZyIhPT1yLnR8fHIuc3x8IXIudnx8IXIucilyZXR1cm4gdDt2YXIgaT1lLmdldEVsZW1lbnRCeUlkKHIuciksdT1pJiZpLnF1ZXJ5U2VsZWN0b3JBbGwoInN0b3AiKXx8W107cmV0dXJuIHIucz1yLnYubWFwKChmdW5jdGlvbih0LG4pe3ZhciBlPXVbbl0mJnVbbl0uZ2V0QXR0cmlidXRlKCJvZmZzZXQiKTtyZXR1cm57Yzp0LG86ZT1kKHBhcnNlSW50KGUpLzEwMCl9fSkpLGRlbGV0ZSByLnYsdH0odCwwLGUpfSkpfXZhciBWdD17Z3Q6ImdyYWRpZW50VHJhbnNmb3JtIixjOnt4OiJjeCIseToiY3kifSxyZDoiciIsZjp7eDoieDEiLHk6InkxIn0sdG86e3g6IngyIix5OiJ5MiJ9fTtmdW5jdGlvbiBHdCh0LG4scixpLHUsbyxhLGwpe3JldHVybiB6dCh0LDAsbCksbj1mdW5jdGlvbih0LG4sZSl7Zm9yKHZhciByLGksdSxvPXQubGVuZ3RoLTEsYT17fSxsPTA7bDw9bztsKyspKHI9dFtsXSkuZSYmKHIuZT1uKHIuZSkpLHIudiYmImciPT09KGk9ci52KS50JiZpLnImJih1PWUuZ2V0RWxlbWVudEJ5SWQoaS5yKSkmJihhW2kucl09e2U6dSxzOnUucXVlcnlTZWxlY3RvckFsbCgic3RvcCIpfSk7cmV0dXJuIGF9KHQsaSxsKSxmdW5jdGlvbihpKXt2YXIgdT1yKGksdCxZdCk7aWYoIXUpcmV0dXJuIm5vbmUiO2lmKCJjIj09PXUudClyZXR1cm4gaHQodS52KTtpZigiZyI9PT11LnQpe2lmKCFuW3Uucl0pcmV0dXJuIHZ0KHUucik7dmFyIG89blt1LnJdO3JldHVybiBmdW5jdGlvbih0LG4pe2Zvcih2YXIgZT10LnMscj1lLmxlbmd0aDtyPG4ubGVuZ3RoO3IrKyl7dmFyIGk9ZVtlLmxlbmd0aC0xXS5jbG9uZU5vZGUoKTtpLmlkPVF0KGkuaWQpLHQuZS5hcHBlbmRDaGlsZChpKSxlPXQucz10LmUucXVlcnlTZWxlY3RvckFsbCgic3RvcCIpfWZvcih2YXIgdT0wLG89ZS5sZW5ndGgsYT1uLmxlbmd0aC0xO3U8bzt1KyspZVt1XS5zZXRBdHRyaWJ1dGUoInN0b3AtY29sb3IiLGh0KG5bTWF0aC5taW4odSxhKV0uYykpLGVbdV0uc2V0QXR0cmlidXRlKCJvZmZzZXQiLG5bTWF0aC5taW4odSxhKV0ubyl9KG8sdS5zKSxPYmplY3Qua2V5cyhWdCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7aWYodm9pZCAwIT09dVt0XSlpZigib2JqZWN0IiE9PWUoVnRbdF0pKXt2YXIgbixyPSJndCI9PT10PyhuPXVbdF0sQXJyYXkuaXNBcnJheShuKT8ibWF0cml4KCIrbi5qb2luKCIgIikrIikiOiIiKTp1W3RdLGk9VnRbdF07by5lLnNldEF0dHJpYnV0ZShpLHIpfWVsc2UgT2JqZWN0LmtleXMoVnRbdF0pLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKHZvaWQgMCE9PXVbdF1bbl0pe3ZhciBlPXVbdF1bbl0scj1WdFt0XVtuXTtvLmUuc2V0QXR0cmlidXRlKHIsZSl9fSkpfSkpLHZ0KHUucil9cmV0dXJuIm5vbmUifX1mdW5jdGlvbiBZdCh0LGUscil7aWYoMD09PXQpcmV0dXJuIGU7aWYoMT09PXQpcmV0dXJuIHI7aWYoZSYmcil7dmFyIGk9ZS50O2lmKGk9PT1yLnQpc3dpdGNoKGUudCl7Y2FzZSJjIjpyZXR1cm57dDppLHY6eih0LGUudixyLnYpfTtjYXNlImciOmlmKGUucj09PXIucil7dmFyIHU9e3Q6aSxzOiR0KHQsZS5zLHIucykscjplLnJ9O3JldHVybiBlLmd0JiZyLmd0JiYodS5ndD1mdW5jdGlvbih0LG4sZSl7dmFyIHI9bi5sZW5ndGg7aWYociE9PWUubGVuZ3RoKXJldHVybiBUKHQsbixlKTtmb3IodmFyIGk9bmV3IEFycmF5KHIpLHU9MDt1PHI7dSsrKWlbdV09cSh0LG5bdV0sZVt1XSk7cmV0dXJuIGl9KHQsZS5ndCxyLmd0KSksZS5jPyh1LmM9Qyh0LGUuYyxyLmMpLHUucmQ9Qih0LGUucmQsci5yZCkpOmUuZiYmKHUuZj1DKHQsZS5mLHIuZiksdS50bz1DKHQsZS50byxyLnRvKSksdX19aWYoImMiPT09ZS50JiYiZyI9PT1yLnR8fCJjIj09PXIudCYmImciPT09ZS50KXt2YXIgbz0iYyI9PT1lLnQ/ZTpyLGE9ImciPT09ZS50P24oe30sZSk6bih7fSxyKSxsPWEucy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybntjOm8udixvOnQub319KSk7cmV0dXJuIGEucz0iYyI9PT1lLnQ/JHQodCxsLGEucyk6JHQodCxhLnMsbCksYX19cmV0dXJuIFQodCxlLHIpfWZ1bmN0aW9uICR0KHQsbixlKXtpZihuLmxlbmd0aD09PWUubGVuZ3RoKXJldHVybiBuLm1hcCgoZnVuY3Rpb24obixyKXtyZXR1cm4gVXQodCxuLGVbcl0pfSkpO2Zvcih2YXIgcj1NYXRoLm1heChuLmxlbmd0aCxlLmxlbmd0aCksaT1bXSx1PTA7dTxyO3UrKyl7dmFyIG89VXQodCxuW01hdGgubWluKHUsbi5sZW5ndGgtMSldLGVbTWF0aC5taW4odSxlLmxlbmd0aC0xKV0pO2kucHVzaChvKX1yZXR1cm4gaX1mdW5jdGlvbiBVdCh0LG4sZSl7cmV0dXJue286TCh0LG4ubyxlLm98fDApLGM6eih0LG4uYyxlLmN8fHt9KX19ZnVuY3Rpb24gUXQodCl7cmV0dXJuIHQucmVwbGFjZSgvLWZpbGwtKFswLTldKykkLywoZnVuY3Rpb24odCxuKXtyZXR1cm4iLWZpbGwtIisoK24rMSl9KSl9dmFyIEh0PXtmaWxsOkd0LCJmaWxsLW9wYWNpdHkiOkR0LHN0cm9rZTpHdCwic3Ryb2tlLW9wYWNpdHkiOkR0LCJzdHJva2Utd2lkdGgiOkN0LCJzdHJva2UtZGFzaG9mZnNldCI6e2Y6ZnQsaTpxfSwic3Ryb2tlLWRhc2hhcnJheSI6e2Y6ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOiIgIjtyZXR1cm4gdCYmdC5sZW5ndGg+MCYmKHQ9dC5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBkKHQsNCl9KSkpLGN0KHQsbil9LGk6ZnVuY3Rpb24odCxuLGUpe3ZhciByLGksdSxvPW4ubGVuZ3RoLGE9ZS5sZW5ndGg7aWYobyE9PWEpaWYoMD09PW8pbj1WKG89YSwwKTtlbHNlIGlmKDA9PT1hKWE9byxlPVYobywwKTtlbHNle3ZhciBsPSh1PShyPW8pKihpPWEpL2Z1bmN0aW9uKHQsbil7Zm9yKHZhciBlO247KWU9bixuPXQlbix0PWU7cmV0dXJuIHR8fDF9KHIsaSkpPDA/LXU6dTtuPUcobixNYXRoLmZsb29yKGwvbykpLGU9RyhlLE1hdGguZmxvb3IobC9hKSksbz1hPWx9Zm9yKHZhciBzPVtdLGY9MDtmPG87ZisrKXMucHVzaChkKEIodCxuW2ZdLGVbZl0pKSk7cmV0dXJuIHN9fSxvcGFjaXR5OkR0LHRyYW5zZm9ybTpmdW5jdGlvbih0LG4scixpKXtpZighKHQ9ZnVuY3Rpb24odCxuKXtpZighdHx8Im9iamVjdCIhPT1lKHQpKXJldHVybiBudWxsO3ZhciByPSExO2Zvcih2YXIgaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldJiZ0W2ldLmxlbmd0aD8odFtpXS5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmUmJih0LmU9bih0LmUpKX0pKSxyPSEwKTpkZWxldGUgdFtpXSk7cmV0dXJuIHI/dDpudWxsfSh0LGkpKSlyZXR1cm4gbnVsbDt2YXIgdT1mdW5jdGlvbihlLGksdSl7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJuIHRbZV0/cihpLHRbZV0sdSk6biYmbltlXT9uW2VdOm99O3JldHVybiBuJiZuLmEmJnQubz9mdW5jdGlvbihuKXt2YXIgZT1yKG4sdC5vLE50KTtyZXR1cm4gTHQucmVjb21wb3NlU2VsZihlLHUoInIiLG4scSwwKStlLmEsdSgiayIsbixDKSx1KCJzIixuLEMpLHUoInQiLG4sQykpLnRvU3RyaW5nKCl9OmZ1bmN0aW9uKHQpe3JldHVybiBMdC5yZWNvbXBvc2VTZWxmKHUoIm8iLHQsRnQsbnVsbCksdSgiciIsdCxxLDApLHUoImsiLHQsQyksdSgicyIsdCxDKSx1KCJ0Iix0LEMpKS50b1N0cmluZygpfX0scjpDdCwiI3NpemUiOmd0LCIjcmFkaXVzIjp5dCxfOmZ1bmN0aW9uKHQsbil7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl0aGlzW3RbZV1dPW47ZWxzZSB0aGlzW3RdPW59fSxKdD1mdW5jdGlvbih0KXshZnVuY3Rpb24odCxuKXtpZigiZnVuY3Rpb24iIT10eXBlb2YgbiYmbnVsbCE9PW4pdGhyb3cgbmV3IFR5cGVFcnJvcigiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG4mJm4ucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksbiYmbCh0LG4pfShvLHQpO3ZhciBuLGUsaT0obj1vLGU9cygpLGZ1bmN0aW9uKCl7dmFyIHQscj1hKG4pO2lmKGUpe3ZhciBpPWEodGhpcykuY29uc3RydWN0b3I7dD1SZWZsZWN0LmNvbnN0cnVjdChyLGFyZ3VtZW50cyxpKX1lbHNlIHQ9ci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGModGhpcyx0KX0pO2Z1bmN0aW9uIG8oKXtyZXR1cm4gcih0aGlzLG8pLGkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiB1KG8sbnVsbCxbe2tleToiYnVpbGQiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBuPWgoYShvKSwiYnVpbGQiLHRoaXMpLmNhbGwodGhpcyx0LEh0KTtpZighbilyZXR1cm4gbnVsbDtuLmVsLG4ub3B0aW9ucyxmdW5jdGlvbih0LG4sZSl7dC5wbGF5KCl9KG4ucGxheWVyKX19XSksb30oc3QpO3JldHVybiBKdC5pbml0KCksSnR9KSk7CihmdW5jdGlvbihzLGksbyx3LGEsYil7d1tvXT13W29dfHx7fTt3W29dW3NdPXdbb11bc118fFtdO3dbb11bc10ucHVzaChpKTt9KSgnNWM3ZjM2MGMnLHsicm9vdCI6ImU0U1VMMkd4Z3VoMSIsInZlcnNpb24iOiIyMDIyLTA1LTA0IiwiYW5pbWF0aW9ucyI6W3siZWxlbWVudHMiOnsiZTRTVUwyR3hndWgyIjp7InRyYW5zZm9ybSI6eyJkYXRhIjp7InQiOnsieCI6LTIyLjQ5NzAyNSwieSI6LTI0LjMxMDMwN319LCJrZXlzIjp7Im8iOlt7InQiOjAsInYiOnsieCI6MjIuNDk3MDI1LCJ5IjoyNC4zMTAzMDgsInR5cGUiOiJjb3JuZXIifX0seyJ0IjoxMDAwLCJ2Ijp7IngiOjI0LjUsInkiOjIyLjMxLCJ0eXBlIjoiY29ybmVyIn19LHsidCI6MjAwMCwidiI6eyJ4IjoyNi41LCJ5IjoyMC4zMSwidHlwZSI6ImNvcm5lciJ9fSx7InQiOjMwMDAsInYiOnsieCI6MjguNSwieSI6MTguMzEsInR5cGUiOiJjb3JuZXIifX1dfX19LCJlNFNVTDJHeGd1aDMiOnsib3BhY2l0eSI6W3sidCI6MCwidiI6MC41Mn0seyJ0Ijo5MzAsInYiOjF9XX0sImU0U1VMMkd4Z3VoNCI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjMwLjI1MDI3LCJ5IjoxNi4xODI1ODksInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotMzAuMjUwMjcsInkiOi0xNi4xODI1ODl9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDUiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4Ijo0MS41MTg5NDQsInkiOjE1LjA3NjQ5NiwidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi00MS41MTg5NDQsInkiOi0xNS4wNzY0OTZ9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDYiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjoyMy4yODg1MTIsInkiOjI0LjY3Mjc3OCwidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi0yMy4yODg1MTIsInkiOi0yNC42NzI3Nzh9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDciOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjozMS45MjI4NTUsInkiOjIwLjQyNjQ5NywidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi0zMS45MjI4NTUsInkiOi0yMC40MjY0OTd9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDgiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjoyOS4yOTA0NTEsInkiOjIwLjU2MjE0LCJ0eXBlIjoiY29ybmVyIn19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV0sInMiOlt7InQiOjAsInYiOnsieCI6MiwieSI6MX19LHsidCI6MTIwMCwidiI6eyJ4IjoxLjIsInkiOjEuMn19LHsidCI6MTM4MCwidiI6eyJ4IjoxLCJ5IjoxLjI4fX0seyJ0IjoyMTAwLCJ2Ijp7IngiOjEuNiwieSI6MS42fX0seyJ0IjoyODAwLCJ2Ijp7IngiOjEuNiwieSI6MS42fX0seyJ0IjoyODQwLCJ2Ijp7IngiOjEsInkiOjF9fSx7InQiOjMwMDAsInYiOnsieCI6MS40LCJ5IjoxLjR9fV0sInQiOlt7InQiOjAsInYiOnsieCI6LTI5LjI5MDQ1MSwieSI6LTIwLjU2MjE0fX0seyJ0IjoxMzgwLCJ2Ijp7IngiOi0yOC4yOSwieSI6LTIwLjU2MjE0fX0seyJ0IjozMDAwLCJ2Ijp7IngiOi0yOS4yOSwieSI6LTIwLjU2MjE0fX1dfX19LCJlNFNVTDJHeGd1aDkiOnsib3BhY2l0eSI6W3sidCI6MCwidiI6MX0seyJ0IjoxNjAwLCJ2IjowLjM3fSx7InQiOjI5OTAsInYiOjAuMzV9LHsidCI6MzAwMCwidiI6MC4xfV19LCJlNFNVTDJHeGd1aDEwIjp7InRyYW5zZm9ybSI6eyJkYXRhIjp7Im8iOnsieCI6MzcuMzQzNzg0LCJ5IjoxOC45MTkzNTksInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotMzcuMzQzNzg0LCJ5IjotMTguOTE5MzU5fX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgxMSI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjIxLjU4MzU3MywieSI6MjQuODU1MDE5LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTIxLjU4MzU3MywieSI6LTI0Ljg1NTAxOX19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMTIiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjoxNy4xMTY2ODksInkiOjI1LjgzOTk0MiwidHlwZSI6ImNvcm5lciJ9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjIyMTAsInYiOjQ0LjJ9LHsidCI6MzAwMCwidiI6NjB9XSwicyI6W3sidCI6MCwidiI6eyJ4IjoxLCJ5IjoxfX0seyJ0IjoxNDAwLCJ2Ijp7IngiOjEuMiwieSI6MS4yfX0seyJ0IjoyNTAwLCJ2Ijp7IngiOjEuNCwieSI6MS4yfX0seyJ0IjozMDAwLCJ2Ijp7IngiOjEsInkiOjF9fV0sInQiOlt7InQiOjAsInYiOnsieCI6LTE3LjExNjY4OSwieSI6LTI1LjgzOTk0Mn19LHsidCI6OTAwLCJ2Ijp7IngiOi0xNi4xMiwieSI6LTI1LjgzOTk0Mn19LHsidCI6MzAwMCwidiI6eyJ4IjotMTUuMTIsInkiOi0yNS44Mzk5NDJ9fV19fX0sImU0U1VMMkd4Z3VoMTMiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjoxMy44MjYwNDYsInkiOjI4Ljk5MTE5LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTEzLjgyNjA0NiwieSI6LTI4Ljk5MTE5fX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgxNCI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjEwLjA0MTkyNywieSI6MjcuOTM4MjA1LCJ0eXBlIjoiY29ybmVyIn19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6NDB9XSwicyI6W3sidCI6MCwidiI6eyJ4IjoxLCJ5IjoxfX0seyJ0Ijo3MDAsInYiOnsieCI6MS4yLCJ5IjoxLjN9fSx7InQiOjE2MDAsInYiOnsieCI6MS42LCJ5IjoxLjZ9fSx7InQiOjI4MDAsInYiOnsieCI6MS40LCJ5IjoxLjR9fV0sInQiOlt7InQiOjAsInYiOnsieCI6LTEwLjA0MTkyNywieSI6LTI3LjkzODIwNX19LHsidCI6MTgwMCwidiI6eyJ4IjotOS4wNCwieSI6LTI3LjkzODIwNX19LHsidCI6MzAwMCwidiI6eyJ4IjotOS4wNCwieSI6LTI3LjkzODIwNX19XX19fSwiZTRTVUwyR3hndWgxNSI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjQuOTY2MzM3LCJ5IjozMC45MzI3NjksInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotNC45NjYzMzcsInkiOi0zMC45MzI3Njl9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDE2Ijp7InRyYW5zZm9ybSI6eyJkYXRhIjp7Im8iOnsieCI6Ni40ODkwMDMsInkiOjI5LjE5NzIwOCwidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi02LjQ4OTAwMywieSI6LTI5LjE5NzIwOH19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMTciOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4Ijo2LjYzMjU0MywieSI6MzIuOTQ5NzQzLCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTYuNjMyNTQzLCJ5IjotMzIuOTQ5NzQzfX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoyNzB9XX19fSwiZTRTVUwyR3hndWgxOCI6eyJvcGFjaXR5IjpbeyJ0IjoxMzAwLCJ2IjowLjc2fSx7InQiOjI5NTAsInYiOjB9LHsidCI6MzAwMCwidiI6MC4zMX1dfSwiZTRTVUwyR3hndWgxOSI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjE5Ljk5ODA4OCwieSI6MjYuOTE5OTM0LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTE5Ljk5ODA4OCwieSI6LTI2LjkxOTkzNH19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMjAiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4Ijo0Ljg3MzE2NSwieSI6MzMuNDAyNTUsInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotNC44NzMxNjUsInkiOi0zMy40MDI1NX19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMjEiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjowLjkwOTk1MywieSI6MzYuNTc3Nzg1LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTAuOTA5OTUzLCJ5IjotMzYuNTc3Nzg1fX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgyMiI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjUuMjA2MDIzLCJ5IjozNS42NTQ1NzcsInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotNS4yMDYwMjMsInkiOi0zNS42NTQ1Nzd9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDIzIjp7InRyYW5zZm9ybSI6eyJkYXRhIjp7Im8iOnsieCI6My44MTA1ODYsInkiOjM0LjcxNDY1MSwidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi0zLjgxMDU4NiwieSI6LTM0LjcxNDY1MX19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMjQiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjoxLjY2ODQyNywieSI6MzUuOTg5Nzk5LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTEuNjY4NDI3LCJ5IjotMzUuOTg5Nzk5fX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgyNSI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjIyLjcwMDEzNywieSI6MjYuNTA1MzA0LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTIyLjcwMDEzNywieSI6LTI2LjUwNTMwNH19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTIwfV19fX0sImU0U1VMMkd4Z3VoMjYiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjoyNi4yNTA5NzgsInkiOjIzLjExMTc4LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTI2LjI1MDk3OCwieSI6LTIzLjExMTc4fX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgyNyI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjM1LjIwNjY5OSwieSI6MjAuMDI0NDc1LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTM1LjIwNjY5OSwieSI6LTIwLjAyNDQ3NX19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMjgiOnsib3BhY2l0eSI6W3sidCI6MjkwLCJ2IjoxfSx7InQiOjIwMDAsInYiOjAuMjh9LHsidCI6MzAwMCwidiI6MH1dfSwiZTRTVUwyR3hndWgyOSI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjI3LjcxMDcxOSwieSI6MTguMjgwNDk2LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTI3LjcxMDcxOSwieSI6LTE4LjI4MDQ5Nn19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMzAiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4Ijo0MC4wOTg4NTQsInkiOjE1LjI3ODE5NiwidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi00MC4wOTg4NTQsInkiOi0xNS4yNzgxOTZ9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDMxIjp7InRyYW5zZm9ybSI6eyJkYXRhIjp7Im8iOnsieCI6MjQuNTA5NDQsInkiOjIzLjE4MjgxNywidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi0yNC41MDk0NCwieSI6LTIzLjE4MjgxN319LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMzIiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjozMy42MzYyNCwieSI6MTkuNTIzMDMzLCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTMzLjYzNjI0LCJ5IjotMTkuNTIzMDMzfX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgzMyI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjMwLjU4MTU5LCJ5IjoxMy40NTAxMDMsInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotMzAuNTgxNTksInkiOi0xMy40NTAxMDN9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDM0Ijp7InRyYW5zZm9ybSI6eyJkYXRhIjp7Im8iOnsieCI6NDIuODM3NzM4LCJ5IjoxMi42NDk5MzcsInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotNDIuODM3NzM4LCJ5IjotMTIuNjQ5OTM3fX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgzNSI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjI1LjgwOTU4MywieSI6MjEuOTA2NDA0LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTI1LjgwOTU4MywieSI6LTIxLjkwNjQwNH19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMzYiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjozNS4yOTYxNzUsInkiOjE4Ljc2NTkyNiwidHlwZSI6ImNvcm5lciJ9LCJ0Ijp7IngiOi0zNS4yOTYxNzUsInkiOi0xOC43NjU5MjZ9fSwia2V5cyI6eyJyIjpbeyJ0IjowLCJ2IjowfSx7InQiOjMwMDAsInYiOjE4MH1dfX19LCJlNFNVTDJHeGd1aDM3Ijp7InRyYW5zZm9ybSI6eyJkYXRhIjp7Im8iOnsieCI6MzEuNTE1MTY0LCJ5IjoxMi40NTIzNTEsInR5cGUiOiJjb3JuZXIifSwidCI6eyJ4IjotMzEuNTE1MTY0LCJ5IjotMTIuNDUyMzUxfX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWgzOCI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjQ0LjA2NTMyNSwieSI6MTIuMDc0NTQzLCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTQ0LjA2NTMyNSwieSI6LTEyLjA3NDU0M319LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX0sImU0U1VMMkd4Z3VoMzkiOnsidHJhbnNmb3JtIjp7ImRhdGEiOnsibyI6eyJ4IjoyNi4zMjU0NjUsInkiOjIwLjkyNzQ1LCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTI2LjMyNTQ2NSwieSI6LTIwLjkyNzQ1fX0sImtleXMiOnsiciI6W3sidCI6MCwidiI6MH0seyJ0IjozMDAwLCJ2IjoxODB9XX19fSwiZTRTVUwyR3hndWg0MCI6eyJ0cmFuc2Zvcm0iOnsiZGF0YSI6eyJvIjp7IngiOjM2LjEyODMyNSwieSI6MTguMDU1MDIyLCJ0eXBlIjoiY29ybmVyIn0sInQiOnsieCI6LTM2LjEyODMyNSwieSI6LTE4LjA1NTAyMn19LCJrZXlzIjp7InIiOlt7InQiOjAsInYiOjB9LHsidCI6MzAwMCwidiI6MTgwfV19fX19LCJzIjoiTVJEQTFaR1V4T0RoallXUmlaREZoak4yUmhZMlprTldRME9EaFhoTURrNU9UWTVOamsyT1RJNEZPR05oWTJaa09HTmlZemxXWlhHRmpabVExWkRSRU9EaGhNREVrM09USTRPR05tWkdGalltUUs0WXpka1lXTm1aRFZrTkdRNU5PRGhoTURrMk9USTRPR05qVUlHTm1UMlF5WkRJNE9HRXdPVEJjNU1qZzRZemRrTW1SaFkySktrT0dRMFl6ZGtZVU5qWWpnNE5ZVEJqWTJNM1pESmtPV05pT0xUSTRPR1E1WkRaallrcGpZbUNOaE9EaGhNRVE1TnpreU9EaFVqWTJRMlpEazRPR0V3T1RjNUJOamsyWlRNLyJ9XSwib3B0aW9ucyI6Ik1FREF4TURnNE1tWTRNRGd4Tm1LVTNaamd4TW1aQk5EY3laamNVNU4yTTJaVGN4TW1ZNFlRfCJ9LCdfX1NWR0FUT1JfUExBWUVSX18nLHdpbmRvdykNCl1dPjwvc2NyaXB0Pg0KPC9zdmc+DQo=`}
          type="image/svg+xml"
          id="svg"
          aria-label="svg title"
          width={"700px"}
        ></object>
      </MouseParallaxChild>
      <Captions />
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
          }}
        >
          {on ? <BsSoundwave /> : <BsPlay />}
        </button>
        <Link to="/three">
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
    </MouseParallaxContainer>
  );
}
