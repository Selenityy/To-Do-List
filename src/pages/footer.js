import { createNewDiv, setClassAttr, addHref } from "../functions/DOMlogic";

export default function footer() {
  createNewDiv("footerElements", "footer");
  setClassAttr("footerElements", "footerBody");

  const iconLink = "https://www.flaticon.com";
  const iconText =
    "List icons created by th studio - Flaticon, Freepik & Andrejs Kirma";
  addHref(iconLink, iconText, "footerElements");
}
