import allProjects from "./pages/allProjects";
import {
  addProjectToMenu,
  addProjectToPage,
  oneProjectView,
} from "./functions/applicationLogic";
import { createNewDiv, setClassAttr } from "./functions/DOMlogic";
import header from "./pages/header";
import footer from "./pages/footer";
import "./styles/styles.css";

// Create Header
createNewDiv("header", "content");
setClassAttr("header", "headerBody");

header();

// Create Body
createNewDiv("body", "content");
setClassAttr("body", "classBody");

allProjects();

// Create Footer
createNewDiv("footer", "content");
setClassAttr("footer", "footerBody");

footer();

const currentProjects = JSON.parse(localStorage.getItem("myProjects")) || [];
addProjectToPage(currentProjects);
addProjectToMenu(currentProjects);

const elements = document.querySelectorAll(".userProjectNames");
elements.forEach(function (element) {
  element.addEventListener("click", oneProjectView);
});
