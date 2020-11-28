import React from "react";
import Socials from "./components/Socials";
import Experience from "./components/Experience";
import styles from "./Main.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1 className={styles.title}>Josh Richards</h1>
        <h2 className={styles.subTitle}> Full Stack Web Developer</h2>
        <p className={styles.about}>
          I'm a Software Engineer based in Wellington, New Zealand. I am
          currently working at Xero as a Software Developer Intern. The majority
          of my experience is developing with React, TypeScript, C#, and SQL
          Server.
        </p>
        <Socials />
        <Experience />
      </div>
    </div>
  );
}

export default App;
