import { myProjects } from "./modal";
import { createModal } from "./modal";
import { addBtn, addLi, addText, createNewDiv, setClassAttr } from "./DOMlogic";

let globalChildId;
let globalParentId;
// Create Tasks

// Remove Tasks

// Change Task Title

// Change Task Description

// Change Task Due Date

// Change Task Priority

// Change Task Notes

// Change Task Completion

// Remove Modal Form
const removeModalForm = () => {
  const modalDiv = document.getElementById("modalDiv");
  while (modalDiv.firstChild) {
    modalDiv.removeChild(modalDiv.lastChild);
  }
};

// Date Formatter
const dateFormat = (inputDate, format) => {
  let dateValue = new Date(inputDate);
  return dateValue.toLocaleString([], {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

// Adds a project to the menu
const addProjectToMenu = (projectList) => {
  document.getElementById("allProjectsList").innerHTML = "";
  for (let i = 0; i < projectList.length; i++) {
    addLi(`liProjectName${i}`, "allProjectsList");
    setClassAttr(`liProjectName${i}`, "userProjectLi");

    createNewDiv(`onlyProjectName${i}`, `liProjectName${i}`);
    setClassAttr(`onlyProjectName${i}`, "menuProjectName");

    document.getElementsByClassName("menuProjectName")[i].innerHTML =
      projectList[i].name;
    if (projectList[i].completed === true) {
      let title = document.getElementById(`onlyProjectName${i}`);
      title.style.setProperty("text-decoration", "line-through");
    } else {
      let title = document.getElementById(`onlyProjectName${i}`);
      title.style.setProperty("text-decoration", "none");
    }
  }
};

// Adds a project to the main content page
const addProjectToPage = (projectList) => {
  document.getElementById("newProjectDiv").innerHTML = "";
  for (let i = 0; i < projectList.length; i++) {
    // Create new divs
    let formattedName = projectList[i].name.replace(/ +/g, "-");
    createNewDiv(formattedName, "newProjectDiv");
    setClassAttr(formattedName, "userProjectList");

    addBtn(`newProjectCompletedBtn${i}`, formattedName);
    let projectCompletionCheck =
      projectList[i].completed === true ? "checked" : "unchecked";
    document
      .getElementById(`newProjectCompletedBtn${i}`)
      .classList.add(projectCompletionCheck);

    addBtn(`newProjectRemoveBtn${i}`, formattedName);
    addText(`newProjectRemoveBtn${i}`, "X");
    setClassAttr(`newProjectRemoveBtn${i}`, "removeBtn");

    createNewDiv(`newProjectName${i}`, formattedName);
    setClassAttr(`newProjectName${i}`, "userProjectNames");

    createNewDiv(`newProjectDescription${i}`, formattedName);
    setClassAttr(`newProjectDescription${i}`, "userProjectDescription");

    createNewDiv(`newProjectDueDate${i}`, formattedName);
    setClassAttr(`newProjectDueDate${i}`, "userProjectDueDate");

    createNewDiv(`newProjectPriority${i}`, formattedName);
    setClassAttr(`newProjectPriority${i}`, "userProjectPriority");

    createNewDiv(`newProjectNotes${i}`, formattedName);
    setClassAttr(`newProjectNotes${i}`, "userProjectNotes");

    // Change innerHTML of the divs to the projects array
    document.getElementsByClassName("userProjectNames")[i].innerHTML =
      projectList[i].name;
    if (projectList[i].description === "") {
      document.getElementsByClassName("userProjectDescription")[i].innerHTML =
        "";
    } else {
      document.getElementsByClassName("userProjectDescription")[i].innerHTML =
        "Description: " + projectList[i].description;
    }
    if (projectList[i].dueDate === "") {
      document.getElementsByClassName("userProjectDueDate")[i].innerHTML = "";
    } else {
      document.getElementsByClassName("userProjectDueDate")[i].innerHTML =
        "Due Date: " + projectList[i].dueDate;
    }
    if (projectList[i].priority === "-") {
      document.getElementsByClassName("userProjectPriority")[i].innerHTML = "";
    } else {
      document.getElementsByClassName("userProjectPriority")[i].innerHTML =
        "Priority Level: " + projectList[i].priority;
    }
    if (projectList[i].notes === "") {
      document.getElementsByClassName("userProjectNotes")[i].innerHTML = "";
    } else {
      document.getElementsByClassName("userProjectNotes")[i].innerHTML =
        "Notes: " + projectList[i].notes;
    }

    // Mark Project as done
    let completedBtn = document.getElementById(`newProjectCompletedBtn${i}`);
    completedBtn.onclick = function (completedEvent) {
      let completedProjectName = completedEvent.target.parentElement.id;
      let newCompletedProjectNameStr = completedProjectName.replace(/-/g, " ");
      let result = myProjects.find(
        (project) => project.name === newCompletedProjectNameStr
      );
      if (completedEvent.target.classList.contains("unchecked")) {
        completedEvent.target.classList.remove("unchecked");
        completedEvent.target.classList.add("checked");
        result.completed = true;
        let title = document.getElementById(`onlyProjectName${i}`);
        title.style.setProperty("text-decoration", "line-through");
      } else {
        completedEvent.target.classList.remove("checked");
        completedEvent.target.classList.add("unchecked");
        result.completed = false;
        let title = document.getElementById(`onlyProjectName${i}`);
        title.style.setProperty("text-decoration", "none");
      }
      localStorage.setItem(`myProjects`, JSON.stringify(myProjects));
    };

    // Remove Project Btn
    let removeBtn = document.getElementById(`newProjectRemoveBtn${i}`);
    removeBtn.onclick = function (removeEvent) {
      const deleteProject =
        removeEvent.target.parentElement.children[2].innerHTML;
      myProjects = projectList.filter(
        (project) => project.name !== deleteProject
      );
      localStorage.setItem(`myProjects`, JSON.stringify(myProjects));
      addProjectToPage(myProjects);
      addProjectToMenu(myProjects);
    };
  }
  listenForClickOnProject();
};

// Changes view to one project not all projects
const oneProjectView = () => {
  // hide all children under the newProjectDiv parent id
  let parent = document.getElementById("newProjectDiv");
  let children = parent.getElementsByClassName("userProjectList");
  for (let c = 0; c < children.length; c++) {
    children[c].style.display = "none";
  }

  console.log("child div is " + globalChildId);
  console.log("parent div is " + globalParentId);

  // Project Header
  createNewDiv("projectHeader", "oneProjectDiv");
  createNewDiv("checkBox", "projectHeader");
  createNewDiv("projectTitle", "projectHeader");
  let childElement = document.getElementById(globalChildId);
  addText("projectTitle", childElement.textContent);

  createNewDiv("backBtn", "projectHeader");
  createNewDiv("closeBtn", "projectHeader");

  // Project Body
  createNewDiv("projectBody", "oneProjectDiv");
  createNewDiv("sections", "projectBody");
  createNewDiv("newSubtaskBtn", "projectBody");
  createNewDiv("newSectionBtn", "projectBody");
};

// listener event for the project divs
function listenForClickOnProject() {
  const childrenDivElements = document.querySelectorAll(
    ".userProjectNames, .userProjectDescription, .userProjectDueDate, .userProjectPriority, .userProjectNotes"
  );
  childrenDivElements.forEach(function (childrenDiv) {
    childrenDiv.addEventListener("click", function (event) {
      if (
        event.target.classList.contains("unchecked") ||
        event.target.classList.contains("checked") ||
        event.target.classList.contains("removeBtn")
      ) {
        event.stopPropagation();
      } else {
        globalChildId = event.target.id;
        let parent = event.target.parentNode;
        globalParentId = parent.id;
        oneProjectView();
      }
    });
  });
}

export {
  removeModalForm,
  dateFormat,
  addProjectToMenu,
  addProjectToPage,
  oneProjectView,
  listenForClickOnProject,
};
