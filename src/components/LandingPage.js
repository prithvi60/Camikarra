import React from "react";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BrandLogo } from "./vectors";
// import gsap from "gsap";
// import { Flip } from "gsap/Flip";
export default function LandingPage({ setactivepage }) {
  const ref = React.useRef();
  // const q = gsap.utils.selector(ref);
  // React.useLayoutEffect(() => {
  //   Flip.from(Flip.getState(q(".underline")), {
  //     duration: 1,
  //     absolute: true,
  //     targets: q(".underline"),
  //     onComplete: () => {
  //       console.log("completed");
  //     },
  //     onEnter: (elements) => {
  //       return gsap.fromTo(
  //         elements,
  //         {
  //           opacity: 0,
  //           scale: 0,
  //         },
  //         {
  //           opacity: 1,
  //           scale: 1,
  //           delay: 0.2,
  //           duration: 0.3,
  //         }
  //       );
  //     },
  //   });
  // }, []);

  return (
    <div
      style={{
        cursor: "pointer",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={ref}
      // onClick={() => {
      //   setactivepage((count) => count + 1);
      // }}
    >
      <Link
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
            fontSize:"30px",
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
