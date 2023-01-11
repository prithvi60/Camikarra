import React from "react";
// import { gsap } from "gsap";

import { ReactComponent as FirstScene } from "../assets/scene1/first.svg";
import useSound from "use-sound";
import line1 from "../assets/scene1line1.mp3";
import line2 from "../assets/scene1line2.mp3";
import line3 from "../assets/scene1line3.mp3";
import music from "../assets/music.mp3";
import { Link } from "react-router-dom";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { BsSoundwave } from "react-icons/bs";
import Captions from "./Captions";
// import { BackLayer, MidLayer, TopLayer } from "./vectors";

export default function SceneOne({ setactivepage }) {
  const [playline1, { stop: stopline1, duration: durationline1 }] =
    useSound(line1);
  const [playline2, { stop: stopline2, duration: durationline2 }] =
    useSound(line2);

  const [playline3, { stop: stopline3, duration: durationline3 }] =
    useSound(line3);
  const [playmusic] = useSound(music, {
    volume: 0.4,
  });

  const [on, setOn] = React.useState(false);
  const [next, setNext] = React.useState(false);
  const [lineCount, setLineCount] = React.useState(1);
  // const el = useRef();
  // const tl = useRef();
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     // all your animations go in here...
  //     console.log("scnene ani")
  //     tl.current = gsap
  //       .timeline()
  //       .to("#sun", {
  //         rotate: 360,
  //       })
  //       .to("#cloud", {
  //         x: 100,
  //       });
  //   }, el);

  //   return () => ctx.revert();
  // }, []);
  const PlayScene = () => {
    setLineCount(1);
    playmusic();
    // playline1();
    setTimeout(() => {
      playline1();
    }, 1000);
    setTimeout(() => {
      setLineCount((a) => a + 1);
      playline2();
    }, durationline1 + 2000);
    setTimeout(() => {
      setLineCount((a) => a + 1);

      playline3();
    }, durationline1 + durationline2 + 3000);
    setTimeout(() => {
      setLineCount((a) => a + 1);
    }, durationline1 + durationline2 + durationline3 + 3000);
  };
  //TODO: Try spirites method
  const StopScene = () => {
    stopline1();
    stopline2();
    stopline3();
  };

  React.useEffect(() => {
    if (on) {
      PlayScene();
    } else {
      StopScene();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on]);
  React.useEffect(() => {
    setTimeout(() => {
      setOn(true);
    }, 1500);
  }, []);
  React.useEffect(() => {
    if (lineCount === 4) {
      setNext(true);
    }
  }, [lineCount]);
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
        // factorX={0.05}
        // factorY={0.1}
        factorX={0}
        factorY={0.2}
        containerStyle={{
          height: "100vh",
          width: "100vw",
          zIndex: "3",
        }}
      >
        <FirstScene />
        {/* <BackLayer /> */}
        {/* <MidLayer /> */}
        {/* <TopLayer /> */}
      </MouseParallaxChild>
      <Captions lineCount={lineCount} />
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
          onClick={() => setOn((o) => !o)}
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
          <BsSoundwave />
        </button>
        {next && (
          <Link to="/two">
            <button
              className="btn btn-three"
              style={{ fontWeight: "bold", fontSize: "large", color: "white" }}
              onClick={() => {
                setactivepage((count) => count + 1);
                setLineCount(1);
                StopScene();
              }}
            >
              Next...
            </button>
          </Link>
        )}
      </div>
      {/* </MouseParallaxChild> */}
    </MouseParallaxContainer>
  );
}
