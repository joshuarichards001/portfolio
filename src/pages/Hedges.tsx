import React, { ReactElement } from "react";
import Modal from "react-modal";
import hedgesImage from "../images/hedges.png";
import hedgesLogoImage from "../images/hedgesLogo.png";
import styles from "../Main.module.css";

export default function Hedges(): ReactElement {
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
        <img src={hedgesLogoImage} alt="Avatar" style={{ width: "100%", height: "73%" }} />
        <div className={styles.cardContainer}>
          <b>Hedges (2021 - Present)</b>
          <p>Co-founder and Sole Developer</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Hedges"
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1 className={styles.modalHeader}>Hedges</h1>
        <div className={styles.modalSubContent}>
          <div>
            <p>
              Hedges is a portfolio management application built out of the popularity of my personal project Ticker
              Tracker. After amassing over 500 users within a week with an overwhelming amount of positive feedback
              regarding the concept I decided to take it more seriously. After teaming up with a great co-founder we got
              starting on designing and building a cross platform portfolio tracking app. This will be the foundation
              for a more full featured personal finance application.
            </p>
            <p>
              The application is built using React Native, Typescript, NodeJS, Express and PostgreSQL. I have built
              both the client and server side code in a legible and scalable fashion in order to pass it on to any
              potential future team members. The frontend code is hosted using Netlify and both the server and database
              is currently hosted using Heroku.
            </p>
            <p>
              Hedges is still early in development but progress is moving quickly and we should have something deployed
              within the year.
            </p>
          </div>
          <a href="https://hedges.app" target="_blank" rel="noreferrer">
            <img src={hedgesImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
