import { ReactElement } from "react";
import styles from "../Main.module.css";
import FinancialFreedom from "../pages/FinancialFreedom";
import Portfolio from "../pages/Portfolio";

export default function Projects(): ReactElement {
  return (
    <div className={styles.experience}>
      <h3 className={styles.categoryTitle}>Projects</h3>
      <div className={styles.subExperience}>
        <FinancialFreedom />
        <Portfolio />
      </div>
    </div>
  );
}
