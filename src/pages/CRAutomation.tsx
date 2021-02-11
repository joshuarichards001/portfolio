import React, { ReactElement } from "react";
import Modal from "react-modal";
import crAutoImage from "../images/crAutomation.jpg";
import BIAgentImage from "../images/BIAgent.png";
import styles from "../Main.module.css";

export default function CRAutomation(): ReactElement {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className={styles.link} onClick={openModal}>
        <div className={styles.card}>
          <img src={crAutoImage} alt="Avatar" style={{ width: "100%" }} />
          <div className={styles.cardContainer}>
            <b>CR Automation</b>
            <p>Software Developer Intern</p>
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="CR Automation"
        style={{
          overlay: {
            background: "rgba(20, 20, 20, 0.8)",
          },
          content: {
            top: "10%",
            left: "20%",
            right: "20%",
            bottom: "10%",
            background: "#2b2a2a",
            color: "#e2e1e1",
            border: "none",
            padding: "50px 100px 50px 100px",
            display: "flex",
            flexDirection: "column"
          },
        }}
      >
        <h2>CR Automation - Software Developer Intern</h2>
        <p>More Detail Coming Soon...</p>
        <a
          href="https://docs.google.com/document/d/17OpVc_uqRux5cWiweJHUbVJdmFNNaSnCxntKlfgxyIg/edit#heading=h.gjdgxs"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <img src={BIAgentImage} alt="" style={{ width: "100%" }} />
        </a>
      </Modal>
    </div>
  );
}
