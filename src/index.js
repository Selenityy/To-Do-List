import allProjects from "./pages/1. Projects Only/allProjects";
import {
  createNewDiv,
  setClassAttr,
  addText,
  addImg,
  addEventListClick,
} from "./functions/DOMlogic";
import header from "./pages/header";
import "./styles/header.css";

// Create Header
createNewDiv("header", "content");
setClassAttr("header", "headerBody");

header();

// Create Body
createNewDiv("body", "content");
setClassAttr("body", "classBody");

// Create Footer
createNewDiv("footer", "content");
setClassAttr("footer", "footerBody");
