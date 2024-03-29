import React, { useEffect, useState } from "react";
import Socials from "./pages/Socials";
import styles from "./Main.module.css";
import ReactGA from "react-ga";
import themes from "./Theme";
import Xero from "./pages/Xero";
import CRAutomation from "./pages/CRAutomation";
import FinancialFreedom from "./pages/FinancialFreedom";
import AlbumListenList from "./pages/AlbumListenList";
import Vuw from "./pages/Vuw";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import TickerTracker from "./pages/TickerTracker";
import Hedges from "./pages/Hedges";

function Home() {
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

        <h2 className={styles.subTitle}>Xero Software Engineer</h2>
        <p className={styles.about}>
          I'm a Software Engineer based in Wellington, New Zealand currently working at Xero. The majority of my
          experience is in developing full stack applications using React, TypeScript, Node.js, Express and PostgreSQL.
          If you want to learn a bit more about me{" "}
          <a href="/personal" style={{ color: "#ec8bbb" }}>
            Click Here
          </a>
          .
        </p>

        <Socials />

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Work</h3>
          <div className={styles.subExperience}>
            <Xero />
            <Hedges />
            <CRAutomation />
          </div>
        </div>

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Projects</h3>
          <div className={styles.subExperience}>
            <TickerTracker />
            <AlbumListenList />
            <FinancialFreedom />
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
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>
            </ul>
            <ul className={styles.skills}>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>ASP.NET</li>
              <li>Django</li>
              <li>SCSS</li>
              <li>React</li>
              <li>React Native</li>
              <li>Ionic</li>
            </ul>
            <ul className={styles.skills}>
              <li>AWS</li>
              <li>Firebase</li>
              <li>Heroku</li>
              <li>Git</li>
              <li>Agile</li>
              <li>GA/GTM</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
