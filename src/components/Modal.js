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
    background: "#dfcea2",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: "8px",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Contact Us:</h4>
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
          <div style={{ textAlign: "center", color: "brown" }}>
            Suzy Queue
            <br /> 4455 Landing Lange, APT 4<br />
            Louisville, KY 40018-1234
          </div>
          <div>+91-12344556789</div>
        </div>
      </Modal>
    </div>
  );
}
