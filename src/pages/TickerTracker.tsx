import React, { ReactElement } from "react";
import Modal from "react-modal";
import ttImage from "../images/portfolioTracker.png";
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
        contentLabel="FF"
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1 className={styles.modalHeader}>Ticker Tracker</h1>
        <div className={styles.modalSubContent}>
          <p>
            Ticker Tracker is a full stack portfolio management application that
            help users aggregate all of their investments into one place. It is
            built using React, Redux, Typescript and SCSS for the frontend
            (deployed using Netlify), IEX Cloud for the financial data API,
            Algolia for the auto searching of Assets and Firebase for the
            backend. It has a number of functions including adding, editing and
            deleting users assets, a fully functional auto suggest search bar
            for thousands of different stocks/cryptos/etfs, creating a profile
            through your Google account and many more. Click on the image to see
            the app in action!
          </p>
          <a
            href="https://tickertracker.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ttImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
