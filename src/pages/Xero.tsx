import React, { ReactElement } from "react";
import Modal from "react-modal";
import xeroImage from "../images/xero.png";
import newInvoicingImage from "../images/newInvoicing.png";
import styles from "../Main.module.css";

export default function Xero(): ReactElement {
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
          <img src={xeroImage} alt="Avatar" style={{ width: "100%" }} />
          <div className={styles.cardContainer}>
            <b>Xero</b>
            <p>Software Developer Intern</p>
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Xero"
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
            flexDirection: "column",
          },
        }}
      >
        <h1>Xero - Software Developer Intern</h1>
        <p>More Detail Coming Soon...</p>
        <a
          href="https://www.xero.com/nz/accounting-software/send-invoices/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <img src={newInvoicingImage} alt="" style={{ width: "100%" }} />
        </a>
      </Modal>
    </div>
  );
}
