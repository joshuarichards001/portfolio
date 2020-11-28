import React, { ReactElement } from "react";
import styles from "../Main.module.css";

export default function Work(): ReactElement {
  return (
    <div className={styles.experience}>
      <h2 className={styles.subTitle}>Experience</h2>
      <p>Work</p>
      <a
        className={styles.link}
        href="https://www.xero.com/nz/accounting-software/send-invoices/"
        target="_blank"
        rel="noreferrer"
      >
        Invoicing at Xero
      </a>
      <a
        className={styles.link}
        href="https://docs.google.com/document/d/17OpVc_uqRux5cWiweJHUbVJdmFNNaSnCxntKlfgxyIg/edit#heading=h.gjdgxs"
        target="_blank"
        rel="noreferrer"
      >
        Business Intelligence Agent at CR Automation
      </a>
      <p className={styles.category}>Projects</p>
      <a
        className={styles.link}
        href="https://financial-freedom.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Full Stack Budgeting Application
      </a>
      <a
        className={styles.link}
        href="https://joshrichards.co/"
        target="_blank"
        rel="noreferrer"
      >
        Portfolio Website
      </a>
      <p className={styles.category}>Education</p>
      <a
        className={styles.link}
        href="https://www.wgtn.ac.nz/explore/study-areas/software-and-computer-science/overview"
        target="_blank"
        rel="noreferrer"
      >
        Computer Science at Victoria University of Wellington
      </a>
    </div>
  );
}
