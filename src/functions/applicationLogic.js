import { myProjects } from "./modal";
import { createModal } from "./modal";
import { addBtn, addLi, addText, createNewDiv, setClassAttr } from "./DOMlogic";

let globalChildId;
let globalParentId;

// Create Tasks
const newTask = () => {
  console.log("Here is a new task");
};

// Create new Section
const newSection = () => {
  console.log("Here is a new section");
};

// Completed Project
const completedProject = (projectClickedNameStr, oneProjectViewCheckBoxDiv) => {
  let completedProjectDivId = projectClickedNameStr.id;
  let completedProjectDivNameStr = completedProjectDivId.replace(/-/g, " ");
  let checkBoxCompletionDiv = projectClickedNameStr.firstChild;
  for (let s = 0; s < myProjects.length; s++) {
    let matchingProject = myProjects.find(
      (project) => project.name === completedProjectDivNameStr
    );
    if (checkBoxCompletionDiv.classList.contains("unchecked")) {
      checkBoxCompletionDiv.classList.remove("unchecked");
      checkBoxCompletionDiv.classList.add("checked");
      oneProjectViewCheckBoxDiv.classList.remove("unchecked");
      oneProjectViewCheckBoxDiv.classList.add("checked");
      matchingProject.completed = true;
      let projectMenuTitle = document.getElementById(`onlyProjectName${s}`);
      projectMenuTitle.style.setProperty("text-decoration", "line-through");
    } else {
      checkBoxCompletionDiv.classList.remove("checked");
      checkBoxCompletionDiv.classList.add("unchecked");
      oneProjectViewCheckBoxDiv.classList.remove("checked");
      oneProjectViewCheckBoxDiv.classList.add("unchecked");
      matchingProject.completed = false;
      let projectMenuTitle = document.getElementById(`onlyProjectName${s}`);
      projectMenuTitle.style.setProperty("text-decoration", "none");
    }
    localStorage.setItem(`myProjects`, JSON.stringify(myProjects));
  }
};

// Remove Tasks

// Change Task Title

// Change Task Description

// Change Task Due Date

// Change Task Priority

// Change Task Notes

// Back function from one project view to all project view
const backFunction = () => {
  console.log("I went back");
};

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

  // Project Header
  createNewDiv("projectHeader", "oneProjectDiv");

  // Add in the completed/not completed checkbox
  createNewDiv("checkBox", "projectHeader");
  let parentDivHTML = document.getElementById(globalParentId);
  let parentDivId = parentDivHTML.id.replace(/-/g, " ");
  let siblingCompletedBoxHTML = parentDivHTML.querySelector(":first-child");

  // set's the class attribute to the same one the project has
  let checkBoxClass = siblingCompletedBoxHTML.classList[0];
  setClassAttr("checkBox", checkBoxClass);

  let completedBtnOneProjectView = document.getElementById("checkBox");
  completedBtnOneProjectView.addEventListener("click", function () {
    completedProject(parentDivHTML, completedBtnOneProjectView);
  });

  // Use the project clicked title
  createNewDiv("projectTitle", "projectHeader");
  let childElement = document.getElementById(globalChildId);
  addText("projectTitle", childElement.textContent);

  // Attach a back button
  addBtn("backBtn", "projectHeader");
  setClassAttr("backBtn", "backBtn");
  addText("backBtn", "←");
  let backBtn = document.getElementById("backBtn");
  backBtn.onclick = backFunction;

  // Project Body
  createNewDiv("projectBody", "oneProjectDiv");

  // 1st Section
  createNewDiv("sections", "projectBody");
  addText("sections", "To Dos");
  document.getElementById("sections").contentEditable = "true";

  // Create Subtasks
  addBtn("newSubtaskBtn", "projectBody");
  addText("newSubtaskBtn", "+ Add Task");
  let newTaskBtn = document.getElementById("newSubtaskBtn");
  newTaskBtn.onclick = newTask;

  // Create Sections
  addBtn("newSectionBtn", "projectBody");
  addText("newSectionBtn", "+ Add Section");
  let newSectionBtn = document.getElementById("newSectionBtn");
  newSectionBtn.onclick = newSection;
};

// listener event for the project divs to be clicked to show one project view
function listenForClickOnProject() {
  const childrenDivElements = document.querySelectorAll(
    ".userProjectNames, .userProjectDescription, .userProjectDueDate, .userProjectPriority, .userProjectNotes"
  );
  childrenDivElements.forEach(function (childrenDiv) {
    childrenDiv.addEventListener("click", function (event) {
      globalChildId = event.target.id;
      let parent = event.target.parentNode;
      globalParentId = parent.id;
      oneProjectView();
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
