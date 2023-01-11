import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./index.css";

import { createRoot } from "react-dom/client";
import { createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCursor } from "react-svg-cursor";
import svg from "./assets/cursor.svg";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import SceneOne from "./components/SceneOne";
import SceneTwo from "./components/SceneTwo";

import LandingPage from "./components/LandingPage";
const routes = [
  { path: "/", name: "Home", element: <LandingPage />, nodeRef: createRef() },
  {
    path: "/one",
    name: "SceneOne",
    element: <SceneOne />,
    nodeRef: createRef(),
  },
  {
    path: "/two",
    name: "SceneTwo",
    element: <SceneTwo />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
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
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <div ref={root} className="app">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
      <CustomCursor
        component={svg}
        isDisabled={false}
        width={50}
        height={50}
        zIndex={420}
        transform="translate(-30%, -10%) rotateZ(-22deg)"
      />
    </>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
