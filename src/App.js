import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Home from "./components/Home";
import SceneOne from "./components/SceneOne";

export default function App() {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
 
      gsap.from(".scrollText", {
        duration: 2,
        xPercent: -300,
        ease: "power4",
        stagger: 0.1
      });
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
