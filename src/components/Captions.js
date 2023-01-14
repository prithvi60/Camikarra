import React from "react";
import Card from "react-bootstrap/Card";
import { Quill, ScrollRod } from "./vectors";
import ReactTypingEffect from "react-typing-effect";

export default function Captions({ lineCount }) {
  return (
    <>
      {/* {lineCount === 1 ? ( */}

      <div
        className="scroll-container"
        style={{
          position: "absolute",
          top: "180px",
          right: "20px",
          maxWidth: "35%",
          minWidth: "35%",
          display: "flex",
          justifyContent: "center",
          // height:"50px",
        }}
      >
        <ScrollRod />

        <Card
          body
          style={{
            fontSize: "small",
            maxWidth: "62%",
            minWidth: "60%",
            marginLeft: "6px",
            position: "relative",
            background: "#dfcea2",
          }}
        >
          <ReactTypingEffect
            speed={50}  
            typingDelay={2000}
            eraseSpeed={50000}
            eraseDelay={100000}
            cursorRenderer={() => <h6 className="quill">{<Quill />}</h6>}
            text={[
              `Jin JiJi is a dry gin specially designed and crafted in India.
            The distillers wanted to create a spirit that would pack the richness
            and diversity of Indian botanicals in each sip.
            The design for the label was inspired by the intricate motifs and
            flavourful botanicals found in this magical country.`,
            ]}
          />
        </Card>
        <ScrollRod />
      </div>
      {/* ) : lineCount === 2 ? (
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
      )} */}
    </>
  );
}
