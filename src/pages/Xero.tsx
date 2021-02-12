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
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1>Xero</h1>
        <div className={styles.modalSubContent}>
          <p>
            Over the course of the 2020/21 summer I completed an internship at
            the cloud accounting software Xero.
          </p>
          <a
            href="https://www.xero.com/nz/accounting-software/send-invoices/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={newInvoicingImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
