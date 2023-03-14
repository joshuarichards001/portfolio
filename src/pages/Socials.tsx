import { ReactElement } from "react";
import ReactTooltip from "react-tooltip";
import styles from "../Main.module.css";

export default function Socials(): ReactElement {
  return (
    <div className={styles.socials}>
      <a
        data-tip="CV / Resume"
        target="_blank"
        rel="noreferrer"
        href="https://www.icloud.com/iclouddrive/013TrlELHxmujB9w25Il2ABlQ#JR_CV"
        title="Resume / CV"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z" />
        </svg>
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a data-tip="GitHub" target="_blank" rel="noreferrer" href="https://github.com/joshuarichards001" title="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
        </svg>
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a
        data-tip="Linkedin"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/joshua-stewart-richards/"
        title="Linkedin"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"></path>
        </svg>
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a data-tip="Email" href="mailto:joshuarichards001@gmail.com" title="Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
        </svg>
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
      <a
        data-tip="Blog"
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@josh-richards"
        title="Blog"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.407 10.516h-.975c-.5 0-.592-.382-.592-.854.001-2.023-1.636-3.662-3.655-3.662h-2.53c-2.018 0-3.655 1.639-3.655 3.662v4.676c0 2.023 1.637 3.662 3.654 3.662h4.692c2.017 0 3.654-1.639 3.654-3.662v-3.229c0-.328-.267-.593-.593-.593zm-7.714-1.516h2.113c.384 0 .694.335.694.75s-.31.75-.693.75h-2.114c-.382 0-.693-.335-.693-.75s.311-.75.693-.75zm4.566 6h-4.519c-.409 0-.74-.335-.74-.75 0-.414.331-.75.74-.75h4.519c.41 0 .741.335.741.75s-.331.75-.741.75z" />
        </svg>
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
    </div>
  );
}
