import React from "react";
import { ReactComponent as FirstScene } from "../assets/chair.svg";
import useSound from "use-sound";
import voice from "../assets/voiceoverdemo.mp3";
export default function SceneOne() {
  const [play, { stop }] = useSound(voice);
  return (
    <div>
      <FirstScene />
      <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
        Play
      </button>
    </div>
  );
}
