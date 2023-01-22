import React from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as FifthScene } from "../assets/scene5/five.svg";
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
import CamikarraBottle from "./Contact";
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

  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });
  const [playClick] = useSound(click);

  const [on, setOn] = React.useState(false);

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
    gsap.from("#river", {
      delay: 2,
      opacity: 0,
      scaleY: 0.8,
      duration: 4,
      ease: "power2",
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
    gsap.from(".play", {
      duration: 2,
      xPercent: 300,
      ease: "power4",
    });
    gsap.from(".bottle", {
      duration: 2,
      yPercent: 300,
      ease: "power4",
      delay: 10,
    });
    gsap.from(".next", {
      duration: 4,
      yPercent: 300,
      ease: "power4",
      delay: 12,
    });

    gsap.to(".overlay", {
      keyframes: {
        "0%": { filter: "brightness(100%)" },

        "100%": {
          filter: "brightness(50%)",
        },
      },
      duration: 4,
      delay: 6,
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
          factorY={0.1}
          containerStyle={{
            height: "100vh",
            width: "100vw",
            zIndex: "3",
          }}
        >
          <div className="overlay">
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <ParticleBackground settings={settings} />
            </div>
            <FifthScene />
            <Captions />
          </div>
        </MouseParallaxChild>
        <div
          className="bottle"
          style={{
            position: "absolute",
            bottom: "20%",
            right: "30%",
          }}
        >
          <CamikarraBottle />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            display: "flex",
            justifyContent: "center",
            marginRight: "12px",
            width: "100%",
          }}
        >
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
            }}
          >
            {on ? <BsSoundwave /> : <BsPlay />}
          </button>
        </div>
      </MouseParallaxContainer>
      <CustomModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </>
  );
}
