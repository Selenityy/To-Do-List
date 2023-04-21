import {
  createNewDiv,
  setClassAttr,
  addText,
  createImg,
} from "../functions/DOMlogic";
import logo from "../assets/logo.png";

export default function header() {
  // Creating the skeleton structure
  createNewDiv("headerElements", "header");
  setClassAttr("headerElements", "headerBody");

  createImg("headerLogo", "headerElements", logo);
  setClassAttr("headerLogo", "headerBody");

  createNewDiv("headerTitle", "headerElements");
  setClassAttr("headerTitle", "headerBody");
  addText("headerTitle", "To-Do List");
}
