import React from "react";
import { gsap } from "gsap";

import { ReactComponent as FirstScene } from "../assets/scene1/first.svg";
import useSound from "use-sound";
// import line1 from "../assets/scene1line1.mp3";
// import line2 from "../assets/scene1line2.mp3";
// import line3 from "../assets/scene1line3.mp3";
import music from "../assets/music.mp3";
import { Link } from "react-router-dom";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { BsSoundwave, BsPlay } from "react-icons/bs";
import Captions from "./Captions";

export default function SceneOne({ ref }) {
  // const timeLine = React.useRef();

  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });

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
    gsap.from(".play", {
      duration: 2,
      xPercent: 300,
      ease: "power4",
      // stagger: 0.1,
    });
    gsap.from(".next", {
      duration: 2,
      yPercent: 300,
      ease: "power4",
      delay: 6,
      // stagger: 0.1,
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
        <FirstScene />
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
        className={"play"}
      >
        <button
          onClick={() => {
            setOn((o) => !o);
            console.log("clicked");
          }}
          style={{
            position: "absolute",
            bottom: "0px",
            right: "32px",
            borderRadius: "50%",
            borderColor: "transparent",
            background: "#44391f",
            textAlign: "center",
            color: "white",
            display: "flex",
            padding: "0.8em",
            fontWeight: "bold",
          }}
        >
          {on ? <BsSoundwave /> : <BsPlay />}
        </button>
        <Link to="/two">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
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
