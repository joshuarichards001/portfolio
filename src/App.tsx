import React, { useEffect, useState } from "react";
import Socials from "./pages/Socials";
import styles from "./Main.module.css";
import ReactGA from "react-ga";
import themes from "./Theme";
import Xero from "./pages/Xero";
import CRAutomation from "./pages/CRAutomation";
import FinancialFreedom from "./pages/FinancialFreedom";
import Portfolio from "./pages/Portfolio";
import Vuw from "./pages/Vuw";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import TickerTracker from "./pages/TickerTracker";

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
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={setIsDarkMode}
            size={30}
            moonColor="#e4e4e4"
            sunColor="#222222"
          />
        </div>

        <h2 className={styles.subTitle}> Full Stack Web Developer</h2>
        <p className={styles.about}>
          I'm a Software Engineer based in Wellington, New Zealand. The majority
          of my experience is developing with React, TypeScript, Firebase, C#,
          ASP.NET and SQL Server.
        </p>
        <p className={styles.about}>
          I am currently a final year Software Engineering student. Last summer
          I completed an Internship at the cloud accounting software company
          Xero. Over the course of the internship I worked on the modernisation
          of the Invoicing platform.
        </p>
        <p className={styles.about}>
          Outside of University I am building a investment portfolio tracking
          platform called Ticker Tracker. It has gained more that 500 users
          within the first two weeks of launch and has an engaged user base that
          I am working with to create the best platform possible. Click the
          Ticker Tracker card below to learn more about it.
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
            <TickerTracker />
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
              <li>SCSS</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>SQL Server</li>
              <li>Ruby</li>
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
              <li>Firebase</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
