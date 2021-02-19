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
      <button className={styles.card} onClick={openModal}>
        <img src={crAutoImage} alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.cardContainer}>
          <b>CR Automation</b>
          <p>Software Developer Intern</p>
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
          <p>
            Over the course of the 2019/20 summer I completed an internship at
            the automation engineering company CR Automation. During my time
            there I worked on an independent project where I was tasked with
            building a business intelligence agent. This piece of software would
            receive data from a data source (e.g. PLC, Computer, Database, etc.)
            and sends it to multiple SQL Server databases or files by using a
            variety of communication protocols concurrently. It's use case was
            providing the CR Automation's business intelligence specialist with
            the ability to monitor a number of systems simultaneously and then
            aggregate their data into one location. The program was built using
            C#, .NET and SQL Server. Click on the image to read this
            programs functional description.
          </p>
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
