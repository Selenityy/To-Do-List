import { myProjects } from "./modal";
import { createModal } from "./modal";
import {
  addBtn,
  addLi,
  addText,
  addUl,
  createHr,
  createNewDiv,
  setClassAttr,
} from "./DOMlogic";

let globalChildId;
let globalParentId;
let globalDescriptionText;
let globalNotesText;
let globalDate;
let globalPriority;
let taskCount = 0;
let textCount = 0;
let completeCount = 0;
let closeCount = 0;

// Create Tasks
const newTask = () => {
  taskCount++;
  textCount++;
  completeCount++;
  closeCount++;
  let taskId = `individualSubtask${taskCount}`;
  let textId = `individualTxt${textCount}`;
  let completeId = `individualComplete${completeCount}`;
  let closeId = `individualClose${closeCount}`;

  createNewDiv(taskId, "subtasks");
  setClassAttr(taskId, "subtaskClass");

  createNewDiv(completeId, taskId);
  setClassAttr(completeId, "subtaskCompleteClass");

  createNewDiv(textId, taskId);
  addText(textId, "[Insert Text]");
  setClassAttr(textId, "subtaskTextClass");
  document.getElementById(textId).contentEditable = "true";

  createNewDiv(closeId, taskId);
  setClassAttr(closeId, "subtaskCloseClass");
  addText(closeId, "X");
};

// Create new Section
// const newSection = () => {
//   console.log("Here is a new section");
// };

// Completed Project from One Project View
const completedProject = (projectClickedNameStr, oneProjectViewCheckBoxDiv) => {
  let completedProjectDivId = projectClickedNameStr.id;
  let completedProjectDivNameStr = completedProjectDivId.replace(/-/g, " ");
  let checkBoxCompletionDiv = projectClickedNameStr.firstChild;
  let projectMenuElements = document.querySelectorAll(".menuProjectName");
  let projectMatchingMenuTitle;
  projectMenuElements.forEach((project) => {
    if (project.textContent === completedProjectDivNameStr) {
      projectMatchingMenuTitle = project;
    }
  });
  let matchingProject = myProjects.find(
    (project) => project.name === completedProjectDivNameStr
  );
  if (checkBoxCompletionDiv.classList.contains("unchecked")) {
    checkBoxCompletionDiv.classList.remove("unchecked");
    checkBoxCompletionDiv.classList.add("checked");
    oneProjectViewCheckBoxDiv.classList.remove("unchecked");
    oneProjectViewCheckBoxDiv.classList.add("checked");
    matchingProject.completed = true;
    projectMatchingMenuTitle.style.setProperty(
      "text-decoration",
      "line-through"
    );
  } else {
    checkBoxCompletionDiv.classList.remove("checked");
    checkBoxCompletionDiv.classList.add("unchecked");
    oneProjectViewCheckBoxDiv.classList.remove("checked");
    oneProjectViewCheckBoxDiv.classList.add("unchecked");
    matchingProject.completed = false;
    projectMatchingMenuTitle.style.setProperty("text-decoration", "none");
  }
  localStorage.setItem(`myProjects`, JSON.stringify(myProjects));
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
  let parent = document.getElementById("newProjectDiv");
  let children = parent.getElementsByClassName("userProjectList");
  for (let c = 0; c < children.length; c++) {
    children[c].style.visibility = "visible";
  }
  let oneProjectParentDiv = document.getElementById("oneProjectDiv");
  let oneProjectChildren =
    oneProjectParentDiv.getElementsByClassName("oneProjectView");
  for (let p = 0; p < oneProjectChildren.length; p++) {
    oneProjectChildren[p].style.visibility = "hidden";
  }
};

// Remove Modal Form
const removeModalForm = () => {
  const modalDiv = document.getElementById("modalDiv");
  while (modalDiv.firstChild) {
    modalDiv.removeChild(modalDiv.lastChild);
  }
};

// Date Formatter
const dateFormat = (inputDate) => {
  let dateValue = new Date(inputDate);
  return dateValue.toLocaleString([], {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
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

    // adding code here to test
    addBtn(`newProjectDetailsBtn${i}`, formattedName);
    setClassAttr(`newProjectDetailsBtn${i}`, "detailsBtn");

    addBtn(`newProjectRemoveBtn${i}`, formattedName);
    addText(`newProjectRemoveBtn${i}`, "X");
    setClassAttr(`newProjectRemoveBtn${i}`, "removeBtn");

    createNewDiv(`newProjectName${i}`, formattedName);
    setClassAttr(`newProjectName${i}`, "userProjectNames");

    createNewDiv(`newProjectDescription${i}`, formattedName);
    setClassAttr(`newProjectDescription${i}`, "userProjectDescription");

    createNewDiv(`newProjectNotes${i}`, formattedName);
    setClassAttr(`newProjectNotes${i}`, "userProjectNotes");

    createNewDiv(`newProjectDueDate${i}`, formattedName);
    setClassAttr(`newProjectDueDate${i}`, "userProjectDueDate");

    createNewDiv(`newProjectPriority${i}`, formattedName);
    setClassAttr(`newProjectPriority${i}`, "userProjectPriority");

    // Change innerHTML of the divs to the projects array
    document.getElementsByClassName("userProjectNames")[i].innerHTML =
      projectList[i].name;
    if (projectList[i].description === "") {
      document.getElementsByClassName("userProjectDescription")[i].innerHTML =
        "";
    } else {
      document.getElementsByClassName("userProjectDescription")[i].innerHTML =
        projectList[i].description;
    }
    if (projectList[i].notes === "") {
      document.getElementsByClassName("userProjectNotes")[i].innerHTML = "";
    } else {
      document.getElementsByClassName("userProjectNotes")[i].innerHTML =
        projectList[i].notes;
    }
    if (projectList[i].dueDate === "") {
      document.getElementsByClassName("userProjectDueDate")[i].innerHTML = "";
    } else {
      document.getElementsByClassName("userProjectDueDate")[i].innerHTML =
        "Due: " + projectList[i].dueDate;
    }
    if (projectList[i].priority === "-") {
      document.getElementsByClassName("userProjectPriority")[i].innerHTML = "";
    } else {
      document.getElementsByClassName("userProjectPriority")[i].innerHTML =
        projectList[i].priority;
    }

    // Mark Project as done within the All Projects Page
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
        removeEvent.target.parentElement.children[3].innerHTML;
      console.log(deleteProject);
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
    children[c].style.visibility = "hidden";
  }
  //   let oneProjectParentDiv = document.getElementById("oneProjectDiv");
  //   let oneProjectChildren =
  //     oneProjectParentDiv.getElementsByClassName("oneProjectView");
  //   for (let p = 0; p < oneProjectChildren.length; p++) {
  //     oneProjectChildren[p].style.visibility = "visible";
  //   }

  // Parent Div
  createNewDiv("projectParent", "oneProjectDiv");
  setClassAttr("projectParent", "oneProjectView");

  // Project Header
  createNewDiv("projectHeader", "projectParent");
  setClassAttr("projectHeader", "oneProjectView");

  // Add in the completed/not completed checkbox
  createNewDiv("checkBox", "projectHeader");
  let parentDivHTML = document.getElementById(globalParentId);
  let parentDivId = parentDivHTML.id.replace(/-/g, " ");
  let projectNameIndex = parentDivHTML.querySelectorAll(":nth-child(3)");
  let projectNameIndexId = projectNameIndex[0].id;
  //   console.log(projectNameIndex);
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

  // Use the project description
  createNewDiv("projectDescription", "projectHeader");
  addText("projectDescription", globalDescriptionText);

  // Use the project due date
  createNewDiv("projectDueDate", "projectHeader");
  addText("projectDueDate", globalDate);

  // Use the project priority
  createNewDiv("projectPriority", "projectHeader");
  addText("projectPriority", globalPriority);

  // Attach a back button
  addBtn("backBtn", "projectHeader");
  setClassAttr("backBtn", "backBtn");
  addText("backBtn", "←");
  let backBtn = document.getElementById("backBtn");
  backBtn.onclick = backFunction;

  createNewDiv("horizontalRuler2", "projectParent");

  // Project Body
  createNewDiv("projectBody", "projectParent");
  setClassAttr("projectBody", "oneProjectView");

  // 1st Section
  createNewDiv("sections", "projectBody");
  //   createNewDiv("sectionTitle", "sections");
  addText("sections", "To Dos");
  //   document.getElementById("sections").contentEditable = "true";

  // Create Sections
  //   addBtn("newSectionBtn", "sections");
  //   addText("newSectionBtn", "+ Add Section");
  //   let newSectionBtn = document.getElementById("newSectionBtn");
  //   newSectionBtn.onclick = newSection;

  // Create Subtasks
  addUl("subtasks", "projectBody");

  addBtn("newSubtaskBtn", "projectBody");
  addText("newSubtaskBtn", "+ Add Task");
  let newTaskBtn = document.getElementById("newSubtaskBtn");
  newTaskBtn.onclick = newTask;

  // Use project notes
  createNewDiv("projectNoteH2", "projectBody");
  let projectNotesAdded = "Notes:" + " ";
  addText("projectNoteH2", projectNotesAdded);
  createNewDiv("projectNotes", "projectBody");
  addText("projectNotes", globalNotesText);
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
      let descriptionChild = parent.children[4];
      globalDescriptionText = descriptionChild.textContent;
      let notesChild = parent.children[5];
      globalNotesText = notesChild.textContent;
      let dateChild = parent.children[6];
      globalDate = dateChild.textContent;
      let priorityChild = parent.children[7];
      globalPriority = priorityChild.textContent;
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
