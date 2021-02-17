import React, { ReactElement } from "react";
import styles from "../Main.module.css";
import financialFreedomImage from "../images/financialfreedom.png";
import portfolioImage from "../images/portfolio.png";

export default function Projects(): ReactElement {
  return (
    <div className={styles.experience}>
      <h3 className={styles.categoryTitle}>Projects</h3>
      <div className={styles.subExperience}>
        <a
          className={styles.card}
          href="https://github.com/joshuarichards001/financial-freedom/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={financialFreedomImage}
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <div className={styles.cardContainer}>
            <b>Financial Freedom</b>
            <p>Budgeting Application</p>
          </div>
        </a>
        <a
          className={styles.card}
          href="https://github.com/joshuarichards001/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={portfolioImage} alt="Avatar" style={{ width: "100%" }} />
          <div className={styles.cardContainer}>
            <b>Portfolio</b>
            <p>Showcase of Work</p>
          </div>
        </a>
      </div>
      {/* <h3 className={styles.category}>Education</h3>
      <a
        className={styles.link}
        href="https://www.wgtn.ac.nz/explore/study-areas/software-and-computer-science/overview"
        target="_blank"
        rel="noreferrer"
      >
        Computer Science at Victoria University of Wellington
      </a> */}
    </div>
  );
}
