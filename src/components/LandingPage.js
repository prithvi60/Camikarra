import React from "react";
import { Link } from "react-router-dom";
import { BrandLogo, LandingBg } from "./vectors";
import click from "../assets/click.wav";
import useSound from "use-sound";
import ParticleBackground from "react-particle-backgrounds";
const settings = {
  canvas: {
    canvasFillSpace: true,
    width: "100%",
    height: "100%",
    useBouncyWalls: false,
  },
  particle: {
    particleCount: 15,
    color: "#e99741",
    minSize: 20,
    maxSize: 50,
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 180,
    minSpeed: 1,
    maxSpeed: 2,
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.8,
    opacityTransitionTime: 3000,
  },
};
export default function LandingPage({ setactivepage }) {
  const ref = React.useRef();

  const [playClick] = useSound(click);
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "50px 25px",
        width: "100vw",
        height: "100vh",

        // backgroundImage: `radial-gradient(
        //   circle at 100% 150%,
        //   #a99b72 24%,
        //   #edd78a 24%,
        //   #edd78a 28%,
        //   #a99b72 28%,
        //   #a99b72 36%,
        //   #edd78a 36%,
        //   #edd78a 40%,
        //   transparent 40%,
        //   transparent
        // ),
        // radial-gradient(
        //   circle at 0 150%,
        //   #a99b72 24%,
        //   #edd78a 24%,
        //   #edd78a 28%,
        //   #a99b72 28%,
        //   #a99b72 36%,
        //   #edd78a 36%,
        //   #edd78a 40%,
        //   transparent 40%,
        //   transparent
        // ),
        // radial-gradient(
        //   circle at 50% 100%,
        //   #edd78a 10%,
        //   #a99b72 10%,
        //   #a99b72 23%,
        //   #edd78a 23%,
        //   #edd78a 30%,
        //   #a99b72 30%,
        //   #a99b72 43%,
        //   #edd78a 43%,
        //   #edd78a 50%,
        //   #a99b72 50%,
        //   #a99b72 63%,
        //   #edd78a 63%,
        //   #edd78a 71%,
        //   transparent 71%,
        //   transparent
        // ),
        // radial-gradient(
        //   circle at 100% 50%,
        //   #edd78a 5%,
        //   #a99b72 5%,
        //   #a99b72 15%,
        //   #edd78a 15%,
        //   #edd78a 20%,
        //   #a99b72 20%,
        //   #a99b72 29%,
        //   #edd78a 29%,
        //   #edd78a 34%,
        //   #a99b72 34%,
        //   #a99b72 44%,
        //   #edd78a 44%,
        //   #edd78a 49%,
        //   transparent 49%,
        //   transparent
        // ),
        // radial-gradient(
        //   circle at 0 50%,
        //   #edd78a 5%,
        //   #a99b72 5%,
        //   #a99b72 15%,
        //   #edd78a 15%,
        //   #edd78a 20%,
        //   #a99b72 20%,
        //   #a99b72 29%,
        //   #edd78a 29%,
        //   #edd78a 34%,
        //   #a99b72 34%,
        //   #a99b72 44%,
        //   #edd78a 44%,
        //   #edd78a 49%,
        //   transparent 49%,
        //   transparent
        // )`,
      }}
      ref={ref}
    >
      <Link
        onClick={() => {
          playClick();
        }}
        to="/one"
        style={{
          textDecoration: "none",
          zIndex: "100",
        }}
      >
        <div className={"scrolled"}>
          <BrandLogo />
        </div>

        <h2
          className="scrollText "
          style={{
            fontSize: "30px",
            color: "white",
            fontStyle: "italic",
          }}
        >
          {" "}
          Click to start the journey
        </h2>
      </Link>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
      >
        <LandingBg />
      </div>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <ParticleBackground settings={settings} />
      </div>
    </div>
  );
}
