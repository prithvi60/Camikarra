import React from "react";
import Card from "react-bootstrap/Card";
import { Quill, ScrollRod } from "./vectors";
import ReactTypingEffect from "react-typing-effect";

export default function Captions({ lineCount }) {
  return (
    <>
      <div
        className="scroll-container prevent-select"
        style={{
          position: "absolute",
          top: "15%",
          right: "20px",
          maxWidth: "35%",
          minWidth: "35%",
          display: "flex",
          justifyContent: "center",
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
            cursorRenderer={() => <h6 className="quill">{null}</h6>}
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
    </>
  );
}
