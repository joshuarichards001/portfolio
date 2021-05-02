import React, { ReactElement } from "react";
import Modal from "react-modal";
import ttImage from "../images/portfolioTracker.png";
import ttInnerModalImage from "../images/ttImage.png";
import styles from "../Main.module.css";

export default function TickerTracker(): ReactElement {
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
        <img src={ttImage} alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.cardContainer}>
          <b>Ticker Tracker</b>
          <p>Stock/Crypto Tracking App</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="TT"
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1 className={styles.modalHeader}>Ticker Tracker</h1>
        <div className={styles.modalSubContent}>
          <p>
            Ticker Tracker is a full-stack portfolio management application that
            lets users aggregate all of their investments into one location. It
            is built using React, Redux, Typescript, and SCSS for the frontend,
            IEX Cloud for the financial data, Fixer for the foreign currency
            rates, Algolia for the asset auto searching capabilities, and
            Firebase to host the backend/database. It has several functions,
            including adding, editing and deleting users assets and an
            auto-suggest search bar containing thousands of different stocks,
            cryptocurrencies and ETFs. Additionally, it tracks users' net worth
            daily to visualise how their portfolio performs over the long term.
            Click on the image to see the app in action!
          </p>
          <a href="https://tickertracker.co" target="_blank" rel="noreferrer">
            <img src={ttInnerModalImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
