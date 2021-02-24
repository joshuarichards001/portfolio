import { ReactElement } from "react";
import styles from "../Main.module.css";
import Vuw from "../pages/Vuw";

export default function Education(): ReactElement {
  return (
    <div className={styles.experience}>
      <h3 className={styles.categoryTitle}>Education</h3>
      <div className={styles.subExperience}>
        <Vuw />
      </div>
    </div>
  );
}
