import React, { useEffect } from "react";
import Socials from "./components/Socials";
import WorkExperience from "./components/WorkExperience";
import PersonalExperience from "./components/PersonalExperience";
import styles from "./Main.module.css";
import Skills from "./components/Skills";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-7MZE650SRZ");
    ReactGa.pageview("/");
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1 className={styles.title}>Josh Richards</h1>
        <h2 className={styles.subTitle}> Full Stack Web Developer</h2>
        <p className={styles.about}>
          I'm a Software Engineer based in Wellington, New Zealand. The majority
          of my experience is developing with React, TypeScript, C#, ASP.NET and
          SQL Server.
        </p>
        <p className={styles.about}>
          I am currently an intern at the cloud accounting software company
          Xero. Over the course of my internship I have been working on the
          modernisation of the Invoicing platform.
        </p>
        <Socials />
        <WorkExperience />
        <PersonalExperience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
