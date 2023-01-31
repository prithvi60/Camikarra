import React from "react";
import { gsap } from "gsap";
import { ReactComponent as KeyIlustration } from "../assets/scene5/five.svg";
// import { ReactComponent as KeyIlustration } from "../assets/scene5/scene5.svg";

import HindiLogo from "../assets/hindilogo.png";
import EnglishLogo from "../assets/englishlogo.png";

// import BottleRum from "../assets/bottlerum.png";

import useSound from "use-sound";
// import line1 from "../assets/scene1line1.mp3";
// import line2 from "../assets/scene1line2.mp3";
// import line3 from "../assets/scene1line3.mp3";
import music from "../assets/music.mp3";
import click from "../assets/click.wav";
import { Link } from "react-router-dom";

import { BsSoundwave, BsPlay } from "react-icons/bs";
import { MouseParallaxContainer } from "react-parallax-mouse";
import Socials from "./Socials";

export default function KeyLanding({ ref }) {
  // const timeLine = React.useRef();

  const [playmusic, { stop }] = useSound(music, {
    volume: 0.4,
  });
  const [playClick] = useSound(click);

  const [on, setOn] = React.useState(false);

  React.useLayoutEffect(() => {
    gsap.to("#whisp-lower1", {
      opacity: 0,
    });
    gsap.to("#whisp-lower", {
      opacity: 0,
    });
    gsap.to("#river", {
      opacity: 0,
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
      delay: 0,
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
      {/* <div
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: "2",
        }}
      > */}
      <div id={"illus"}>
      <KeyIlustration />
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
        <Socials />
        <Link to="/one">
          <button
            className="btn btn-three next"
            style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
            onClick={() => {
              playClick();
              stop();
            }}
          >
            Begin journey...
          </button>
        </Link>
        <div
          style={{
            position: "absolute",
            // top: "30%",
            right: "10%",
            textAlign: "center",
            color: "white",
            display: "flex",
            // padding: "0.8em",
            fontWeight: "bold",
            transform:"translateY(-48vh)"
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
            left: "10%",
            textAlign: "center",
            color: "white",
            display: "flex",
            // padding: "0.8em",
            fontWeight: "bold",
            transform:"translateY(-64vh)"
          }}
        >
          <img
            src={EnglishLogo}
            alt="englishlogo"
            style={{ width: "350px", height: "350px" }}
          />
        </div>
      </div>
      {/* </div> */}
    </MouseParallaxContainer>
  );
}
