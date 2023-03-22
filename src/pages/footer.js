import {
  createNewDiv,
  setClassAttr,
  addText,
  addImg,
  addBtn,
  addUl,
  addLi,
  addEventListClick,
  addHref,
} from "../functions/DOMlogic";

export default function footer() {
  createNewDiv("footerElements", "footer");
  setClassAttr("footerElements", "footerBody");

  const iconLink = "https://www.flaticon.com/free-icons/list";
  const iconText = "List icons created by th studio - Flaticon";
  addHref(iconLink, iconText, "footerElements");
}
