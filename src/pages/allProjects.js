import {
  createNewDiv,
  setClassAttr,
  addText,
  createImg,
  addBtn,
  addUl,
  addEventListClick,
  createPara,
  createHr,
} from "../functions/DOMlogic";
import allTaskImg from "../assets/all-tasks.png";
import todayTasksImg from "../assets/today-tasks.png";
import weekTasksImg from "../assets/this-week-task.png";
import { createModal } from "../functions/modal";
import { oneProjectView } from "../functions/applicationLogic";

export default function allProjects() {
  // Projects Page Div within Body
  createNewDiv("allProjectsPage", "body");
  setClassAttr("allProjectsPage", "allProjectsPageContent");

  // ----------- MENU -----------

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

  createHr("horizontalRuler", "menu");

  // Menu - All Projects
  createNewDiv("allProjects", "menu");

  //   addUl("allProjects", "menu");
  addText("allProjects", "All Projects");

  // Add Project Button
  addBtn("addProject", "allProjects");
  addText("addProject", "+");

  // add code when button is clicked to add li's to the ul of each new project
  addEventListClick("addProject", createModal);

  // ----------- MAIN CONTENT -----------
  createNewDiv("mainContent", "allProjectsPage");
  setClassAttr("mainContent", "allProjectsPageContent");

  // Create Modal Div Parent
  createNewDiv("modalDiv", "mainContent");

  // Create Project Div Parent
  createNewDiv("newProjectDiv", "mainContent");

  // Adds the Ul for the projects to nest under
  addUl("allProjectsList", "allProjects");
  setClassAttr("allProjectsList", "allProjectsListClass");

  // Create One Project Div
  createNewDiv("oneProjectDiv", "mainContent");
}
