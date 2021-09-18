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
import Hedges from "./pages/Hedges";

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
          I'm a Software Engineer based in Wellington, New Zealand. The majority of my experience is developing full
          stack web applications with React, TypeScript, Node.js and PostgreSQL.
        </p>
        <p className={styles.about}>
          I am currently building a personal finance platform called Hedges. After the success of it's predecessor
          'Ticker Tracker' I am now building a more polished cross platform application. Click the Hedges card below to
          learn a bit more about it.
        </p>
        <p className={styles.about}>
          Within the past few years I have completed a degree in Computer Science and participated in a number of
          internships. Last summer I completed an internship at the cloud accounting software company Xero, the summer
          prior I worked with the automation engineering firm CR Automation. Click their respective cards to find out
          more about my time there.
        </p>

        <Socials />

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Work</h3>
          <div className={styles.subExperience}>
            <Hedges />
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
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Ruby</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>
            </ul>
            <ul className={styles.skills}>
              <li>Node.js</li>
              <li>ASP.NET</li>
              <li>Django</li>
              <li>SCSS</li>
              <li>React</li>
              <li>Ionic</li>
              <li>React Native</li>
              <li>TypeScript</li>
            </ul>
            <ul className={styles.skills}>
              <li>Firebase</li>
              <li>Heroku</li>
              <li>Git</li>
              <li>Agile</li>
              <li>Redux</li>
              <li>GA/GTM</li>
              <li>AI/ML</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
