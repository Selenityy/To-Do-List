import {
  createNewDiv,
  setClassAttr,
  addText,
  createImg,
  addBtn,
  addEventListClick,
} from "../functions/DOMlogic";
import logo from "../assets/logo.png";

export default function header() {
  // Creating the skeleton structure
  createNewDiv("headerElements", "header");
  setClassAttr("headerElements", "headerBody");

  createImg("logo", "headerElements", logo);
  setClassAttr("logo", "headerBody");

  createNewDiv("title", "headerElements");
  setClassAttr("title", "headerBody");
  addText("title", "To-Do List");
}
