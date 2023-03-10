const LOCAL_STORAGE_KEY = "screenREC-color-scheme";

export default class themeTogglerClass {
  constructor() {
    if (!themeTogglerClass.instance) {
      this.set = {
        toggler: document.querySelector(".sh__toggler"),
        icons: document.querySelectorAll(".sh__toggler--icon"),
        moon: document.querySelector(".sh__toggler-btn--moon"),
        sun: document.querySelector(".sh__toggler-btn--sun"),
      };
      themeTogglerClass.instance = this;
    }
    return themeTogglerClass.instance;
  }

  activateDarkMode() {
    document.body.dataset.theme = "dark";
    this.set.moon.classList.remove("active");
    this.set.sun.classList.add("active");
    window.localStorage.setItem(LOCAL_STORAGE_KEY, "dark");
  }

  activateLightMode() {
    document.body.dataset.theme = "light";
    this.set.sun.classList.remove("active");
    this.set.moon.classList.add("active");
    window.localStorage.setItem(LOCAL_STORAGE_KEY, "light");
  }

  getPreferredTheme() {
    // get color scheme from localStorage
    const theme = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (theme === "light") return this.activateLightMode();
    if (theme === "dark") return this.activateDarkMode();

    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? this.activateDarkMode()
      : this.activateLightMode();
  }

  init() {
    this.getPreferredTheme();

    this.set.toggler.addEventListener("click", () => {
      if (document.body.dataset.theme) {
        if (document.body.dataset.theme === "light") {
          this.activateDarkMode();
        } else this.activateLightMode();
      }
    });

    // Listen for OS theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (e.matches) {
          this.activateDarkMode();
        } else this.activateLightMode();
      });
  }
}
