import React, { ReactElement } from "react";
import styles from "../Main.module.css";

export default function Skills(): ReactElement {
  return (
    <div>
      <div className={styles.subExperience}>
        <div>
          <h3 className={styles.category}>Languages</h3>
          <ul className={styles.skills}>
            <li>C#</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SQL Server</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.category}>Technologies</h3>
          <ul className={styles.skills}>
            <li>React</li>
            <li>TypeScript</li>
            <li>ASP.NET</li>
            <li>Django</li>
            <li>Git</li>
            <li>Agile</li>
            <li>React Native</li>
            <li>AI/ML</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
