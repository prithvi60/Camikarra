import React from "react";
import SceneOne from "./SceneOne";

export default function Home() {
  const [activepage, setactivepage] = React.useState(1);
  return (
    <div>
      <h1>CAMIKARRA</h1>
      {/* <div className="box">Scroll</div> */}

      {activepage ? <SceneOne /> : <p>Page 2</p>}
      <button
        variant="contained"
        color="primary"
        onClick={() => {
          setactivepage(!activepage);
        }}
      >
        Next
      </button>
    </div>
  );
}
