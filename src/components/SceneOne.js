import React from "react";
import { ReactComponent as FirstScene } from "../assets/scene1/first.svg";
import Button from "react-bootstrap/Button";
import useSound from "use-sound";
import line1 from "../assets/scene1line1.mp3";
import line2 from "../assets/scene1line2.mp3";
import line3 from "../assets/scene1line3.mp3";
import music from "../assets/music.mp3";

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
        factorX={0.05}
        factorY={0.1}
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
      >
        <Button
          variant="dark"
          onClick={() => setOn((o) => !o)}
          style={{
            position: "absolute",
            bottom: "12px",
            right: "32px",
            borderRadius: "50%",
            textAlign: "center",
          }}
        >
          <BsSoundwave />
        </Button>
        {next && (
          <Button
            variant="dark"
            onClick={() => {
              setactivepage((count) => count + 1);
              setLineCount(1);
              StopScene();
            }}
          >
            Next
          </Button>
        )}
      </div>
      {/* </MouseParallaxChild> */}
    </MouseParallaxContainer>
  );
}
