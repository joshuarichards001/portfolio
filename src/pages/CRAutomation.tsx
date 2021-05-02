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
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1 className={styles.modalHeader}>CR Automation</h1>
        <div className={styles.modalSubContent}>
          <p>
            During the 2019/20 summer, I completed an internship at the
            automation engineering company CR Automation. During my time there,
            I worked on an independent project to build a business intelligence
            agent. This piece of software would receive data from a data source
            (e.g. PLC, Computer, Database, etc.) and send it to multiple SQL
            Server databases or files by using various communication protocols
            concurrently. It was built to support the Business Intelligence
            Specialist in aggregating relevant data to one location to make
            intelligent business decisions. The program was built using C#,
            .NET, and SQL Server. Click on the image to read this programs
            functional description.
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
