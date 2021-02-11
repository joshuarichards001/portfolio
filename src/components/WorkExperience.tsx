import React, { ReactElement } from "react";
import styles from "../Main.module.css";
import CRAutomation from "../pages/CRAutomation";
import Xero from "../pages/Xero";

export default function Work(): ReactElement {
  return (
    <div className={styles.experience}>
      <h3 style={{ marginBottom: "10px" }}>Work</h3>
      <div className={styles.subExperience}>
        <Xero />
        <CRAutomation />
      </div>
    </div>
  );
}
