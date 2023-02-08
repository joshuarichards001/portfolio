import React, { ReactElement } from "react";
import Modal from "react-modal";
import styles from "../Main.module.css";
import allImage from "../images/all.png";
import allModalImage from "../images/allScreens.png";

export default function AlbumListenList(): ReactElement {
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
        <img src={allImage} alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.cardContainer}>
          <b>Album Listen List</b>
          <p>List of albums</p>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="ALL"
        ariaHideApp={false}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <h1 className={styles.modalHeader}>Album Listen List</h1>
        <div className={styles.modalSubContent}>
          <div>
            <p>
              Album Listen List is a full-stack application that has over 150 users. It is a place where users can
              aggregate all of the albums they plan to listen to in the future. It is built using React, Typescript,
              Tailwind for the frontend, and Firebase to host the backend/database. Click on the image to see the app in
              action!
            </p>
            <a href="https://albumlistenlist.com" target="_blank" rel="noreferrer" style={{ color: "#ec8bbb" }}>
              https://albumlistenlist.com
            </a>
            <p></p>
            <a
              href="https://www.reddit.com/r/spotify/comments/10qcpsn/a_list_of_all_the_albums_you_plan_to_listen_to/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ec8bbb" }}
            >
              Spotify Reddit Post
            </a>
          </div>
          <a href="https://albumlistenlist.com" target="_blank" rel="noreferrer">
            <img src={allModalImage} alt="" />
          </a>
        </div>
      </Modal>
    </div>
  );
}
