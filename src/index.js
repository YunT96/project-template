import "./styles.css";
import homeDOMController from './home.js';
import menuDOMController from "./menu.js";
import aboutDOMController from "./about.js";


const navBar = (function () {
    const homeBtn = document.querySelector(".btn-1");
    const menuBtn = document.querySelector(".btn-2");
    const aboutBtn = document.querySelector(".btn-3");

    homeBtn.addEventListener("click", () => {
        homeDOMController.renderHome();
    });
    menuBtn.addEventListener("click", () => {
        menuDOMController.renderMenu();
    });
    aboutBtn.addEventListener("click", () => {
        aboutDOMController.renderAbout();
    });
    
})();

homeDOMController.renderHome();