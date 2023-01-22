import React from "react";
import { gsap } from "gsap";
import ParticleBackground from "react-particle-backgrounds";
import { ReactComponent as FourthScene } from "../assets/scene4/four.svg";
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
  const timeLine = React.useRef();

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
      delay: 7,
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
    gsap.from("#walkman", {
      keyframes: {
        "0%": {
          xPercent: 0,
          yPercent: 0,
          opacity: 1,
        },
        "40%": {
          xPercent: -20,
          yPercent: 0,
          opacity: 1,
        },
        "41%": {
          opacity: 0,
        },
        "50%": {
          yPercent: 14,
          xPercent: 0,
        },
        "80%": {
          yPercent: 14,
          opacity: 1,
        },
        "98%": {
          xPercent: -20,
          yPercent: 14,
          opacity: 1,
        },
        "100%": {
          opacity: 0,
        },
      },

      duration: 6,
    });

    timeLine.current = gsap
      .timeline()
      .from("#grp1", {
        delay: 7,
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp2", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp3", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })

      .from("#grp4", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp5", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp6", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp7", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp8", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp9", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
      })
      .from("#grp10", {
        duration: 2,
        opacity: 0,
        y: 10,
        ease: "power3.inOut",
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
          }}
        >
          <ParticleBackground settings={settings} />
        </div>
        <FourthScene />
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
        <Link to="/five">
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
