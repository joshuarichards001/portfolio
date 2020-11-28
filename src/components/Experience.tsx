import React, { ReactElement } from "react";
import styles from "../Main.module.css";
import xeroImage from "../images/xero.png";
import crAutoImage from "../images/crAuto.png";
import financialFreedomImage from "../images/financialfreedom.png";
import portfolioImage from "../images/portfolio.png";

export default function Work(): ReactElement {
  return (
    <div className={styles.experience}>
      <h2 className={styles.subTitle}>Experience</h2>
      <h3 style={{marginBottom: '10px'}}>Work</h3>
      <div className={styles.subExperience}>
        <a
          className={styles.link}
          href="https://www.xero.com/nz/accounting-software/send-invoices/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.card}>
            <img src={xeroImage} alt="Avatar" style={{ width: "100%" }} />
            <div className={styles.cardContainer}>
              <h4>
                <b>Xero</b>
              </h4>
              <p>Invoicing</p>
            </div>
          </div>
        </a>
        <a
          className={styles.link}
          href="https://docs.google.com/document/d/17OpVc_uqRux5cWiweJHUbVJdmFNNaSnCxntKlfgxyIg/edit#heading=h.gjdgxs"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.card}>
            <img src={crAutoImage} alt="Avatar" style={{ width: "100%" }} />
            <div className={styles.cardContainer}>
              <h4>
                <b>CR Automation</b>
              </h4>
              <p>Business Intelligence Agent</p>
            </div>
          </div>
        </a>
      </div>
      <h3 className={styles.category}>Projects</h3>
      <div className={styles.subExperience}>
        <a
          className={styles.link}
          href="https://github.com/joshuarichards001/financial-freedom/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.card}>
            <img
              src={financialFreedomImage}
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className={styles.cardContainer}>
              <h4>
                <b>Financial Freedom</b>
              </h4>
              <p>Full Stack Application</p>
            </div>
          </div>
        </a>
        <a
          className={styles.link}
          href="https://github.com/joshuarichards001/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.card}>
            <img src={portfolioImage} alt="Avatar" style={{ width: "100%" }} />
            <div className={styles.cardContainer}>
              <h4>
                <b>Portfolio</b>
              </h4>
              <p>Showcase of Work</p>
            </div>
          </div>
        </a>
      </div>
      <h3 className={styles.category}>Education</h3>
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
