import React from "react";
import Modal from "react-modal";
import useSound from "use-sound";
import click from "../assets/click.wav";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f5e9ca",
    // backgroundImage: `url(${RumBg})`,
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    borderColor: "transparent",
  },
};

Modal.setAppElement("#root");

export function CustomModal({ setIsOpen, modalIsOpen }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [playClick] = useSound(click);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="bg-image"></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: "16px",
          }}
        >
          <h4
            style={{
              textAlign: "center",
              padding: 0,
              margin: 0,
              fontWeight: "bold",
            }}
          >
            Contact Us:
          </h4>
          <button
            onClick={() => {
              closeModal();
              playClick();
            }}
            className={"play "}
            style={{
              position: "absolute",
              top: "-16px",
              right: "-4px",
              borderColor: "transparent",
              background: "transparent",
              textAlign: "center",
              color: "black",
              display: "flex",
              padding: "0",
              fontWeight: "bold",
            }}
          >
            X
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ textAlign: "center", color: "#5c543e" }}>
            Suzy Queue
            <br /> 4455 Landing Lange, APT 4<br />
            Louisville, KY 40018-1234
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#5c543e",
              fontWeight: "bold",
            }}
          >
            +91-12344556789
          </div>
        </div>
      </Modal>
    </div>
  );
}
