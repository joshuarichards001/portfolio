import styles from "./Main.module.css";
import blondeImage from "./images/personal/blonde.webp";
import whiplashImage from "./images/personal/whiplash.webp";
import parasiteImage from "./images/personal/parasite.jpeg";
import socialNetworkImage from "./images/personal/socialNetwork.webp";
import uncutGemsImage from "./images/personal/uncutGems.jpeg";
import patersonImage from "./images/personal/paterson.webp";
import lighthouseImage from "./images/personal/lighthouse.jpg";
import marriageStoryImage from "./images/personal/marriageStory.jpg";
import herImage from "./images/personal/her.jpeg";
import fiveHundredDaysImage from "./images/personal/500days.jpeg";
import igorImage from "./images/personal/igor.webp";
import inRainbowsImage from "./images/personal/inRainbows.webp";
import titanicRisingImage from "./images/personal/titanicRising.webp";
import ninetyNineImage from "./images/personal/99.jpeg";
import apricotPrincessImage from "./images/personal/apricotPrincess.jpeg";

export default function Personal() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <header className={styles.title}>Josh Richards</header>
        </div>

        <h2 className={styles.subTitle}>Human Being</h2>
        <p className={styles.about}>
          I was born and raised in sunny Hawkes Bay and attended Lindisfarne College for my high school years. After
          falling in love with Windy Wellington, I decided to set up camp here and pursue my degree in engineering.
        </p>
        <p className={styles.about}>
          Initially, I enrolled in the Electronic and Computer Systems major as I thought doing nothing but sitting
          behind a computer all day would get old. I later discovered that complex physics is not for me, whereas
          sitting behind a computer all day ain't that bad, so I switched to Software Engineering and slowly built my
          love for programming.
        </p>
        <p className={styles.about}>
          After researching more about the tech industry, I found that drive I had been missing with my old major. I
          started building personal projects related to my passions, and then the ball really started rolling.
        </p>
        <p className={styles.about}>
          The ability to turn an idea into a working application for anyone to use is so rewarding! It's opened so many
          doors and expanded how I think about problems. Seeing how I've developed over the past five years makes me
          incredibly excited to see what's in store for the next 10!
        </p>
        <p className={styles.about}>
          Another huge part of my life has been the media that has affected me. I thought it would be cool to have some
          of my favourites listed here so you can have a peak behind the curtain. If you want to head back to the main
          page,{" "}
          <a href="/" style={{ color: "#ec8bbb" }}>
            Click Here
          </a>
          .
        </p>

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Favorite Movies</h3>
          <div className={styles.subExperience}>
            <button className={styles.card}>
              <img src={whiplashImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Whiplash</b>
                <p>Damien Chazelle</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={parasiteImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Parasite</b>
                <p>Bong Joon-ho</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={socialNetworkImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>The Social Network</b>
                <p>David Fincher</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={uncutGemsImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Uncut Gems</b>
                <p>Josh/Benny Safdie</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={patersonImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Paterson</b>
                <p>Jim Jarmusch</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={lighthouseImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>The Lighthouse</b>
                <p>Robert Eggers</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={marriageStoryImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Marriage Story</b>
                <p>Noah Baumbach</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={herImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Her</b>
                <p>Spike Jonze</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={fiveHundredDaysImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>500 Days of Summer</b>
                <p>Marc Webb</p>
              </div>
            </button>
          </div>
        </div>

        <div className={styles.experience}>
          <h3 className={styles.categoryTitle}>Favorite Albums</h3>
          <div className={styles.subExperience}>
            <button className={styles.card}>
              <img src={igorImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Igor</b>
                <p>Tyler the Creator</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={titanicRisingImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Titanic Rising</b>
                <p>Weyes Blood</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={apricotPrincessImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Apricot Princess</b>
                <p>Rex Orange County</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={inRainbowsImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>In Rainbows</b>
                <p>Radiohead</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={blondeImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>Blonde</b>
                <p>Frank Ocean</p>
              </div>
            </button>
            <button className={styles.card}>
              <img src={ninetyNineImage} alt="Avatar" className={styles.image} />
              <div className={styles.cardContainer}>
                <b>99.9%</b>
                <p>Kaytranada</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
