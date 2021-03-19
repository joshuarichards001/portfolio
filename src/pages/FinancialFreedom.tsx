import React, { ReactElement } from "react";
import Modal from "react-modal";
import ffImage from "../images/financialfreedom.png";
import styles from "../Main.module.css";

export default function FinancialFreedom(): ReactElement {
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
        <img src={ffImage} alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.cardContainer}>
          <b>Financial Freedom</b>
          <p>Full Stack Budgeting Application</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="FF"
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1>Financial Freedom</h1>
        <div className={styles.modalSubContent}>
          <p>
            Financial Freedom is a full stack budgeting application to help
            users manage their transactions. It is built using React, Typescript
            and CSS for the frontend (deployed using Netlify) and Python, Django
            and SQLite for the backend (deployed using Heroku). It has a number
            of functions including adding and deleting users transactions,
            visualisation of transactions through pie charts, creating a budget
            based on how the user wants to spend their money, Hot swapping the
            pages columns so that the user can decide what they want to see,
            logging in and registering users and finally signing in using your Google
            account. In addition to this I have ported some of its basic
            functionality onto a mobile app built in react native and Ionic
            which can be found on my GitHub. Click on the image to see the
            app in action!
          </p>
          <a
            href="https://financial-freedom.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ffImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
