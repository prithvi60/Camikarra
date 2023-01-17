import React from "react";
import { Link } from "react-router-dom";
import { BrandLogo } from "./vectors";
import click from "../assets/click.wav";
import useSound from "use-sound";

export default function LandingPage({ setactivepage }) {
  const ref = React.useRef();

  const [playClick] = useSound(click);
  return (
    <div
      style={{
        cursor: "pointer",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "100px 50px",
        width: "100vw",
        height: "100vh",
        backgroundImage: `radial-gradient(
          circle at 100% 150%,
          #a99b72 24%,
          #edd78a 24%,
          #edd78a 28%,
          #a99b72 28%,
          #a99b72 36%,
          #edd78a 36%,
          #edd78a 40%,
          transparent 40%,
          transparent
        ),
        radial-gradient(
          circle at 0 150%,
          #a99b72 24%,
          #edd78a 24%,
          #edd78a 28%,
          #a99b72 28%,
          #a99b72 36%,
          #edd78a 36%,
          #edd78a 40%,
          transparent 40%,
          transparent
        ),
        radial-gradient(
          circle at 50% 100%,
          #edd78a 10%,
          #a99b72 10%,
          #a99b72 23%,
          #edd78a 23%,
          #edd78a 30%,
          #a99b72 30%,
          #a99b72 43%,
          #edd78a 43%,
          #edd78a 50%,
          #a99b72 50%,
          #a99b72 63%,
          #edd78a 63%,
          #edd78a 71%,
          transparent 71%,
          transparent
        ),
        radial-gradient(
          circle at 100% 50%,
          #edd78a 5%,
          #a99b72 5%,
          #a99b72 15%,
          #edd78a 15%,
          #edd78a 20%,
          #a99b72 20%,
          #a99b72 29%,
          #edd78a 29%,
          #edd78a 34%,
          #a99b72 34%,
          #a99b72 44%,
          #edd78a 44%,
          #edd78a 49%,
          transparent 49%,
          transparent
        ),
        radial-gradient(
          circle at 0 50%,
          #edd78a 5%,
          #a99b72 5%,
          #a99b72 15%,
          #edd78a 15%,
          #edd78a 20%,
          #a99b72 20%,
          #a99b72 29%,
          #edd78a 29%,
          #edd78a 34%,
          #a99b72 34%,
          #a99b72 44%,
          #edd78a 44%,
          #edd78a 49%,
          transparent 49%,
          transparent
        )`,
      }}
      ref={ref}
      // onClick={() => {
      //   setactivepage((count) => count + 1);
      // }}
    >
      <Link
        onClick={() => {
          playClick();
        }}
        to="/one"
        style={{
          textDecoration: "none",
        }}
      >
        <div className={"scrolled"}>
          {/* <Parchment className="underline" /> */}
          <BrandLogo />
        </div>
        <h2
          className="scrollText "
          style={{
            // marginTop: "12px",
            // marginLeft: "20px",
            // position: "absolute",
            fontSize: "30px",
            color: "#65542b",
            fontStyle: "italic",
          }}
        >
          {" "}
          Click to start the journey
        </h2>
      </Link>
    </div>
  );
}
