import React from "react";
import Card from "react-bootstrap/Card";
export default function Captions({ lineCount }) {
  return (
    <>
      {lineCount === 1 ? (
        <div
          style={{
            position: "absolute",
            bottom: "150px",
            right: "20px",
          }}
        >
          <Card body style={{fontSize:"small"}}>
            {" "}
            Jin JiJi is a dry gin specially designed and crafted in India...{" "}
          </Card>
        </div>
      ) : lineCount === 2 ? (
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <Card body>
            The distillers wanted to create a spirit that would pack the
            richness and diversity of Indian botanicals in each sip...
          </Card>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "20px",
          }}
        >
          <Card body>
            The design for the label was inspired by the intricate motifs and
            flavourful botanicals found in this magical country...
          </Card>
        </div>
      )}
    </>
  );
}
