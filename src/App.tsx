import React, { useEffect } from "react";
import Socials from "./components/Socials";
import WorkExperience from "./components/WorkExperience";
import PersonalExperience from "./components/PersonalExperience";
import styles from "./Main.module.css";
import Skills from "./components/Skills";
import ReactGA from "react-ga";
import Education from "./components/Education";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-178390544-2");
    ReactGA.pageview("/");
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <header className={styles.title}>Josh Richards</header>
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
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
