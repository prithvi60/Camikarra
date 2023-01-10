import React from "react";
import { ReactComponent as FirstScene } from "../assets/first.svg";

import useSound from "use-sound";
import voice from "../assets/voiceoverdemo.mp3";
export default function SceneOne() {
  const [play, { stop }] = useSound(voice);
  return (
    <div style={{width:"100%",height:"100%"}}>
      <FirstScene />
      <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
        Play
      </button>
    </div>
  );
}
