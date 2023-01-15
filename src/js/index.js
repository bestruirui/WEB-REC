import recorderClass from "./components/recorder";
import themeTogglerClass from "./components/themeToggler";
import { handleMobileUsers } from "./utils/handleMobileUsers";

window.addEventListener("load", () => handleMobileUsers());

navigator.serviceWorker.register(
    new URL('../sw.js', import.meta.url),
    {type: 'module'}
  );

const screenRec = {};
//instance
screenRec.recorder = new recorderClass();
screenRec.theme = new themeTogglerClass();
// init
screenRec.recorder.init();
screenRec.theme.init();
