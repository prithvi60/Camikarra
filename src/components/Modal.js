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
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <h2>Contact details</h2>
          <button
            onClick={() => {
              closeModal();
              playClick();
            }}
            className={"play"}
            style={{
              // position: "absolute",
              bottom: "0px",
              right: "32px",
              // borderRadius: "50%",
              borderColor: "transparent",
              background: "#44391f",
              textAlign: "center",
              color: "white",
              display: "flex",
              //   padding: "0.8em",
              fontWeight: "bold",
            }}
          >
            X
          </button>
        </div>
        <div>Address : long address</div>
        <div>number: 12344556789</div>
      </Modal>
    </div>
  );
}
