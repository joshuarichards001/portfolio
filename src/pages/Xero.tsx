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
      <button className={styles.card} onClick={openModal}>
        <img src={xeroImage} alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.cardContainer}>
          <b>Xero</b>
          <p>Software Developer Intern</p>
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
            the cloud accounting software company Xero. During my time there I
            worked within the Invoicing team where I contributed to the New
            Invoicing platform. Throughout my 12 weeks within the team I
            completed a number of tickets independently and gained professional
            experience in a number of technologies. These technologies include
            React, Typescript and Redux for the frontend, C#, ASP.NET and SQL
            Server for the backend, more general software like GitHub, TeamCity,
            Google Analytics, as well as many more. I was placed within a
            product team where the primary focus was to provide the best
            Invoicing experience for our customer base of over 2 million
            organisations. Click on the image below to learn more about the
            product I worked on.
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
