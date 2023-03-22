import {
  createNewDiv,
  setClassAttr,
  addText,
  createImg,
  addBtn,
  addUl,
  addLi,
  addEventListClick,
  addHref,
  addPara,
  createPara,
} from "../../functions/DOMlogic";
import allTaskImg from "../../assets/all-tasks.png";
import todayTasksImg from "../../assets/today-tasks.png";
import weekTasksImg from "../../assets/this-week-task.png";

export default function allProjects() {
  // Projects Page Div within Body
  createNewDiv("allProjectsPage", "body");
  setClassAttr("allProjectsPage", "allProjectsPageContent");

  // Menu Content
  createNewDiv("menu", "allProjectsPage");
  setClassAttr("menu", "allProjectsPageContent");

  // Menu - Current Tasks
  createNewDiv("currentTasks", "menu");

  createNewDiv("allTasks", "currentTasks");
  createImg("allTaskImg", "allTasks", allTaskImg);
  createPara("All Tasks", "allTasks");

  createNewDiv("todayTasks", "currentTasks");
  createImg("todayTaskImg", "todayTasks", todayTasksImg);
  createPara("Today's Tasks", "todayTasks");

  createNewDiv("thisWeekTasks", "currentTasks");
  createImg("weekTaskImg", "thisWeekTasks", weekTasksImg);
  createPara("This Week's Tasks", "thisWeekTasks");

  // Menu - Projects
  //   createNewDiv("allProjects", "menu");
  addUl("allProjects", "menu");
  addText("allProjects", "All Projects");

  // Add Project Button
  addBtn("addProject", "allProjects");
  addText("addProject", "+");
  // add code when button is clicked to add li's to the ul of each new project

  // Projects Body Content
  createNewDiv("mainContent", "allProjectsPage");
  setClassAttr("mainContent", "allProjectsPageContent");
}
