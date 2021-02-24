import React, { ReactElement } from "react";
import styles from "../Main.module.css";
import CRAutomation from "../pages/CRAutomation";
import Vuw from "../pages/Vuw";
import Xero from "../pages/Xero";

export default function Work(): ReactElement {
  return (
    <div className={styles.experience}>
      <h3 className={styles.categoryTitle}>Work and Education</h3>
      <div className={styles.subExperience}>
        <Xero />
        <CRAutomation />
        <Vuw />
      </div>
    </div>
  );
}
