import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SceneTwo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "",
      }}
    >
      Scene two...
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button variant="dark">Go Home</Button>
      </Link>
    </div>
  );
}
