import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Home from "./components/Home";
export default function App() {
  const root = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.from(".scrolled", {
        duration: 1.5,
        rotation: "+=90",
      });
      gsap.from(".scrollText", {
        duration: 2,
        xPercent: -300,
        ease: "power4",
        stagger: 0.1,
      });
      tl.current = gsap
        .timeline()
        .to("#sun", {
          rotate: 360,
        })
        .fromTo(
          "#cloud",
          1,
          { x: -200 },
          { x: 400, duration: "1s", repeat: -1 }
        );
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="app">
      <Home />
      {/* <SceneOne/> */}
    </div>
  );
}
