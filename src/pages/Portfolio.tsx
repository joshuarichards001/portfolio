import React, { ReactElement } from "react";
import Modal from "react-modal";
import portfolioImage from "../images/portfolio.png";
import portfolioGitImage from "../images/portfolioGit.png";
import styles from "../Main.module.css";

export default function Portfolio(): ReactElement {
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
        <img src={portfolioImage} alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.cardContainer}>
          <b>Portfolio</b>
          <p>Design, Responsiveness, GA and SEO</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Portfolio"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1>Portfolio</h1>
        <div className={styles.modalSubContent}>
          <p>
            This portfolio is a new addition that I have created and continually
            added to over the course of this year. The main goal of building
            this portfolio from scratch was to gain better knowledge of design,
            user experience, responsiveness, and modularity. In addition to this
            I used it to gain exposure to Google Analytics and Search Engine
            Optimisation. I did this by going through the process of connecting
            the website to google analytics to monitor its traffic and also
            indexing my site through the google search console. Click the image
            to see the GitHub repo of the website.
          </p>
          <a
            href="https://github.com/joshuarichards001/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={portfolioGitImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
