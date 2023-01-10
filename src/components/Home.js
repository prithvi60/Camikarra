import React from "react";
import SceneOne from "./SceneOne";
import LandingPage from "./LandingPage";

export default function Home() {
  const [activepage, setactivepage] = React.useState(1);
  return (
    <div>
      {activepage === 1 ? (
        <LandingPage setactivepage={setactivepage} />
      ) : activepage === 2 ? (
        <SceneOne setactivepage={setactivepage} />
      ) : (
        <div>Second Scene!</div>
      )}
      {/* <Button
        variant="info"
        onClick={() => {
          setactivepage(!activepage);
        }}
      >
        Next
      </Button> */}
    </div>
  );
}
