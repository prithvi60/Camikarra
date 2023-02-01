import React, { useRef } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCursor } from "react-svg-cursor";
import Rotate from "./assets/rotate.gif";
import Barrel from "./assets/barrel.svg";

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useEffect, Suspense, lazy } from "react";

const SceneOne = lazy(() => import("./components/SceneOne"));
const SceneTwo = lazy(() => import("./components/SceneTwo"));

const SceneThree = lazy(() => import("./components/SceneThree"));
const SceneFour = lazy(() => import("./components/SceneFour"));

const SceneFive = lazy(() => import("./components/SceneFive"));
const KeyLanding = lazy(() => import("./components/KeyLanding"));

// import SceneOne from "./components/SceneOne";
// import SceneTwo from "./components/SceneTwo";
// import SceneThree from "./components/SceneThree";
// import SceneFour from "./components/SceneFour";
// import SceneFive from "./components/SceneFive";

// import KeyLanding from "./components/KeyLanding";
const routes = [
  { path: "/", name: "Home", element: <KeyLanding />, nodeRef: createRef() },
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

  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  const [width, setWidth] = React.useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
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
        <img
          src={Rotate}
          alt="logo"
          width={"40%"}
          style={{
            borderRadius: "20%",
          }}
        />
        <div style={{ fontWeight: "bold", color: "white", marginTop: "8px" }}>
          Rotate to Landscape!
        </div>
      </div>
    );
  }

  return (
    <>
      <div ref={root} className="app">
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
      {/* eslint-disable-next-line */}
      {!isMobile && (
        <CustomCursor
          component={Barrel}
          isDisabled={false}
          width={35}
          height={35}
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
