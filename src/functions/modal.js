import {
  addBtn,
  addLi,
  addText,
  createImg,
  createNewDiv,
  setClassAttr,
} from "./DOMlogic";
import { removeModalForm, dateFormat } from "./applicationLogic";

let myProjects = JSON.parse(localStorage.getItem("myProjects")) || [];

const createModal = () => {
  let template = `
    <div id="myModal" class="modal">
    <h2>New Project</h2>
    <span id="close" class="close">&times;</span>
    <div class="modal_content">
      <form name="myForm" id="myForm" action="" method="GET">
        <ul class="pop_up">
          <li class="title_form">
            <label for="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="^[a-zA-Z0-9_.-]*$"
            />
          </li>
          <li class="description">
            <label for="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
            />
          </li>
          <li class="dueDate">
            <label for="dueDate">Due Date: </label>
            <input
                type="date"
                id="dueDate"
                name="dueDate"
            />
          </li>
          <li class="priority">
            <label for="priority">
                <span>Priority Level:</span>
            </label>
            <select id="priority" name="priority">
                <option value="-">-</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
          </li>
          <li class="notes">
            <label for="notes">Notes:</label>
            <textarea id="notes" name="notes"></textarea>
          </li>
        </ul>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  </div>
  `;
  let modalDiv = document.getElementById("modalDiv");
  modalDiv.innerHTML = template;

  let closeBtn = document.getElementById("close");
  closeBtn.onclick = function (event) {
    removeModalForm();
  };

  // Project Object Constructor
  function Project(name, description, dueDate, priority, notes) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = false;
  }

  // removed the addProjectsToPage & addProjectToMenu function from here

  // Submit Btn triggers the following: grabs values, adds to Project Obj
  let submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = function (event) {
    console.log(myProjects);
    event.preventDefault();
    const formSubmissionNewProjectName = document.getElementById("name").value;
    if (formSubmissionNewProjectName === "") {
      return false;
    }
    const formSubmissionNewProjectDescription =
      document.getElementById("description").value === undefined
        ? ""
        : document.getElementById("description").value;
    const formSubmissionNewProjectDueDate =
      dateFormat(document.getElementById("dueDate").value, "mm-dd-yyyy") ===
      "Invalid Date"
        ? ""
        : dateFormat(document.getElementById("dueDate").value, "mm-dd-yyyy");
    const formSubmissionNewProjectPriority =
      document.getElementById("priority").value === undefined
        ? ""
        : document.getElementById("priority").value;
    const formSubmissionNewProjectNotes =
      document.getElementById("notes").value === undefined
        ? ""
        : document.getElementById("notes").value;
    const addProjectObj = new Project(
      formSubmissionNewProjectName,
      formSubmissionNewProjectDescription,
      formSubmissionNewProjectDueDate,
      formSubmissionNewProjectPriority,
      formSubmissionNewProjectNotes
    );
    myProjects.push(addProjectObj);
    addProjectToPage(myProjects);
    addProjectToMenu(myProjects);

    localStorage.setItem(`myProjects`, JSON.stringify(myProjects));
    removeModalForm();
  };
};

const addProjectToPage = (projectList) => {
  document.getElementById("newProjectDiv").innerHTML = "";
  for (let i = 0; i < projectList.length; i++) {
    // Create new divs
    let formattedName = projectList[i].name.replace(/ +/g, "-");
    createNewDiv(formattedName, "newProjectDiv");
    setClassAttr(formattedName, "userProjectList");

    addBtn(`newProjectCompletedBtn${i}`, formattedName);
    document
      .getElementById(`newProjectCompletedBtn${i}`)
      .classList.add("unchecked");

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
      let result = myProjects.find(
        (project) => project.name === completedProjectName
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
      console.log(myProjects);
    };

    // Remove Project Btn
    let removeBtn = document.getElementById(`newProjectRemoveBtn${i}`);
    removeBtn.onclick = function (removeEvent) {
      const deleteProject =
        removeEvent.target.parentElement.children[2].innerHTML;
      console.log(removeEvent.target.parentElement.children[2].innerHTML);
      myProjects = projectList.filter(
        (project) => project.name !== deleteProject
      );
      localStorage.setItem(`myProjects`, JSON.stringify(myProjects));
      addProjectToPage(myProjects);
      addProjectToMenu(myProjects);
    };
  }
};

const addProjectToMenu = (projectList) => {
  document.getElementById("allProjectsList").innerHTML = "";
  for (let i = 0; i < projectList.length; i++) {
    addLi(`liProjectName${i}`, "allProjectsList");
    setClassAttr(`liProjectName${i}`, "userProjectLi");

    createNewDiv(`onlyProjectName${i}`, `liProjectName${i}`);
    setClassAttr(`onlyProjectName${i}`, "menuProjectName");

    document.getElementsByClassName("menuProjectName")[i].innerHTML =
      projectList[i].name;
  }
};

export { createModal, addProjectToPage, addProjectToMenu };
