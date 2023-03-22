import allProjects from "./pages/1. Projects Only/allProjects";
import {
  createNewDiv,
  setClassAttr,
  addText,
  createImg,
  addBtn,
  addUl,
  addLi,
  addEventListClick,
  removeChildrenNodes,
} from "./functions/DOMlogic";
import header from "./pages/header";
import footer from "./pages/footer";
import "./styles/header.css";
// import "./styles/body.css"

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
