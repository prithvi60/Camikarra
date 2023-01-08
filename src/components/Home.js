import React from "react";

export default function Home() {
  const [activepage, setactivepage] = React.useState(1);
  return (
    <div>
      <h1>CAMIKARRA</h1>
      <div className="box">Scroll</div>
      <button
        variant="contained"
        color="primary"
        onClick={() => {
          setactivepage(!activepage);
        }}
      >
        Change active page
      </button>
      {activepage ? <p>Page 1</p> : <p>Page 2</p>}
    </div>
  );
}
