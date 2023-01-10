import React from "react";
import Button from "react-bootstrap/Button";
import { ReactComponent as Parchment } from "../assets/parchment.svg";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
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
      }}
      ref={ref}
      onClick={() => {
        setactivepage((count) => count + 1);
      }}
    >
      <Parchment className="underline" />
      <h2
        className="scrollText "
        style={{
          marginRight: "28px",
        }}
      >
        {" "}
        Click the scroll...
      </h2>
    </div>
  );
}