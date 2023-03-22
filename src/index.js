import allProjects from "./pages/1. Projects Only/allProjects";
import {
  createNewDiv,
  setClassAttr,
  addText,
  addEventListClick,
} from "./functions/DOMlogic";

// Create Header
createNewDiv("header", "content");
setClassAttr("header", "headerBody");

// Create Body
createNewDiv("body", "content");
setClassAttr("body", "classBody");

// Create Footer
createNewDiv("footer", "content");
setClassAttr("footer", "footerBody");
