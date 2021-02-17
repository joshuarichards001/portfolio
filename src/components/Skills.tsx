import React, { ReactElement } from "react";
import styles from "../Main.module.css";

export default function Skills(): ReactElement {
  return (
    <div className={styles.experience}>
      <h3 className={styles.categoryTitle}>Skills</h3>
      <div className={styles.subExperience}>
        <ul className={styles.skills}>
          <li>C#</li>
          <li>Python</li>
          <li>React</li>
          <li>Java</li>
          <li>C++</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>SQL Server</li>
        </ul>
        <ul className={styles.skills}>
          <li>ASP.NET</li>
          <li>Django</li>
          <li>Git</li>
          <li>Agile</li>
          <li>CI/CD</li>
          <li>AI/ML</li>
          <li>React Native</li>
          <li>Team City</li>
          <li>Docker</li>
          <li>GA/GTM</li>
        </ul>
      </div>
    </div>
  );
}
