import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./index.css";
import { isMobile } from "react-device-detect";
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
import { FcRotateToLandscape } from "react-icons/fc";

import LandingPage from "./components/LandingPage";
import ContactUs from "./components/Contact";
import SceneThree from "./components/SceneThree";
import SceneFour from "./components/SceneFour";
import SceneFive from "./components/SceneFive";
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
  {
    path: "/three",
    name: "SceneTwo",
    element: <SceneThree />,
    nodeRef: createRef(),
  },
  {
    path: "/four",
    name: "SceneTwo",
    element: <SceneFour />,
    nodeRef: createRef(),
  },
  {
    path: "/five",
    name: "SceneTwo",
    element: <SceneFive />,
    nodeRef: createRef(),
  },
  {
    path: "/contact",
    name: "SceneTwo",
    element: <ContactUs />,
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
  const location = useLocation();

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
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, [location]);
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  if (isMobile && window.matchMedia("(orientation: portrait)").matches) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div className="scrolled">
          <FcRotateToLandscape />
        </div>
        Rotate to Landscape!
      </div>
    );
  }
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
      {/* eslint-disable-next-line */}
      {!isMobile && (
        <CustomCursor
          component={svg}
          isDisabled={false}
          width={50}
          height={50}
          zIndex={9999}
          transform="translate(-30%, -10%) rotateZ(-22deg)"
        />
      )}
    </>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
