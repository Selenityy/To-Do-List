import {
  createNewDiv,
  setClassAttr,
  addText,
  addImg,
  addEventListClick,
} from "../functions/DOMlogic";
import logo from "../assets/logo.png";

export default function header() {
  // Creating the skeleton structure
  createNewDiv("headerElements", "header");
  setClassAttr("headerElements", "headerBody");

  addImg("logo", "headerElements", logo);
  setClassAttr("logo", "headerBody");

  createNewDiv("title", "headerElements");
  setClassAttr("title", "headerBody");
  addText("title", "To-Do List");
}
