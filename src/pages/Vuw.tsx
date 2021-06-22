import React, { ReactElement } from "react";
import Modal from "react-modal";
import vuwImage from "../images/vuw.png";
import styles from "../Main.module.css";

export default function Vuw(): ReactElement {
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
        <img src={vuwImage} alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.cardContainer}>
          <b>Victoria University of Wellington</b>
          <p>Tutor / Class Rep / Student</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Vuw"
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1 className={styles.modalHeader}>Victoria University of Wellington</h1>
        <div className={styles.modalSubContent}>
          <p>
            I have recently graduated with a Computer Science degree from Victoria University of Wellington. Over the
            course of my Software Engineering degree I have filled a in a number of roles. Firstly I am currently a
            tutor in the class SWEN301 of which goes over web fundamentals. Additionally this semester I have been the
            class representative for SWEN431 - Advanced programming languages. Click on the image to learn more about
            how VUW's Software Engineering Program is Structured.
          </p>
          <a
            href="https://www.wgtn.ac.nz/explore/study-areas/software-and-computer-science/overview"
            target="_blank"
            rel="noreferrer"
          >
            <img src={vuwImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
