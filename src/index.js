import { setHome } from "./home.js";
import { setMenu } from "./menu.js";
import { setAbout } from "./about.js";
import "./styles.css";

console.log("Hello dumdum");
const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", () => {
    content.innerHTML = "";
    setHome();
});
menu.addEventListener("click", () => {
    content.innerHTML = "";
    setMenu();
});
about.addEventListener("click", () => {
    content.innerHTML = "";
    setAbout();
});
document.addEventListener("DOMContentLoaded", () => {
    setHome();
});