const Dark = () => {
  document.documentElement.style.setProperty("--light-background", "#3a3a3a");
  document.documentElement.style.setProperty("--dark-background", "#2b2a2a");
  document.documentElement.style.setProperty("--light-text", "#e4e4e4");
  document.documentElement.style.setProperty("--dark-text", "#b3b3b3");
  document.documentElement.style.setProperty("--shadow", "#141414");
  document.documentElement.style.setProperty("--shadow-hover", "#050505");
  document.documentElement.style.setProperty("--accent-color", "#ec8bbb");
};

const Light = () => {
  document.documentElement.style.setProperty("--light-background", "#f7f7f7");
  document.documentElement.style.setProperty("--dark-background", "#FFFFFF");
  document.documentElement.style.setProperty("--light-text", "#222222");
  document.documentElement.style.setProperty("--dark-text", "#3a3a3a");
  document.documentElement.style.setProperty("--shadow", "#999999");
  document.documentElement.style.setProperty("--shadow-hover", "#666666");
  document.documentElement.style.setProperty("--accent-color", "#c1114c");
};

const themes = {
  Dark,
  Light,
};

export default themes;
