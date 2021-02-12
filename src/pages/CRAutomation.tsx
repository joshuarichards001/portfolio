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
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h2>CR Automation</h2>
        <div className={styles.modalSubContent}>
          <p>More Detail Coming Soon...</p>
          <a
            href="https://docs.google.com/document/d/17OpVc_uqRux5cWiweJHUbVJdmFNNaSnCxntKlfgxyIg/edit#heading=h.gjdgxs"
            target="_blank"
            rel="noreferrer"
          >
            <img src={BIAgentImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
