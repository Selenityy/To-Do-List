import allProjects from "./pages/allProjects";
import {
  addProjectToMenu,
  addProjectToPage,
} from "./functions/applicationLogic";
import { createNewDiv, setClassAttr } from "./functions/DOMlogic";
import header from "./pages/header";
import footer from "./pages/footer";
import "./styles/header.css";

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
