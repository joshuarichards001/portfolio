import { useEffect, useState } from "react";
import Socials from "./pages/Socials";
import styles from "./Main.module.css";
import ReactGA from "react-ga";
import DarkModeToggle from "react-dark-mode-toggle";
import themes from "./Theme";
import Xero from "./pages/Xero";
import CRAutomation from "./pages/CRAutomation";
import FinancialFreedom from "./pages/FinancialFreedom";
import Portfolio from "./pages/Portfolio";
import Vuw from "./pages/Vuw";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    isDarkMode ? themes.Dark() : themes.Light();
  }, [isDarkMode]);

  useEffect(() => {
    ReactGA.initialize("UA-178390544-2");
    ReactGA.pageview("/");
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <header className={styles.title}>Josh Richards</header>
          <DarkModeToggle
            className={styles.themeToggle}
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </div>

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

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Work</h3>
          <div className={styles.subExperience}>
            <Xero />
            <CRAutomation />
          </div>
        </div>

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Projects</h3>
          <div className={styles.subExperience}>
            <FinancialFreedom />
            <Portfolio />
          </div>
        </div>

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Education</h3>
          <div className={styles.subExperience}>
            <Vuw />
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default App;
