import React from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiPhone } from "react-icons/fi";
import useSound from "use-sound";
import { CustomModal } from "./Modal";
import click from "../assets/click.wav";

export default function Socials() {
  const [playClick] = useSound(click);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "32px",
          bottom: "12px",
        }}
      >
        <a
          href="https://www.instagram.com/camikararum/"
          target={"_blank"}
          rel="noreferrer"
          style={{ color: "white", fontWeight: "bold", scale: "1.2" }}
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.instagram.com/camikararum/"
          target={"_blank"}
          rel="noreferrer"
          style={{
            color: "white",
            fontWeight: "bold",
            scale: "1.2",
            marginLeft: "12px",
          }}
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.instagram.com/camikararum/"
          target={"_blank"}
          rel="noreferrer"
          style={{
            color: "white",
            fontWeight: "bold",
            scale: "1.2",
            marginLeft: "8px",
          }}
        >
          <FiFacebook />
        </a>
        <button
          onClick={() => {
            setIsOpen(true);
            playClick();
          }}
          //   className="btn btn-three next"
          style={{
            color: "white",
            fontWeight: "bold",
            scale: "1.2",
            marginLeft: "8px",
            background: "transparent",
            borderColor: "transparent",
            padding: 0,
          }}
        >
          <FiPhone />
        </button>
      </div>
      <CustomModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </>
  );
}
