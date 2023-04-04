import {
  addBtn,
  addLi,
  addText,
  addUl,
  createImg,
  createNewDiv,
  setClassAttr,
} from "./DOMlogic";
import { removeModalForm, dateFormat } from "./applicationLogic";

let myProjects = [];

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
  }

  // Once project is submitted, it adds to the menu page li
  const addProjectToPage = () => {
    document.getElementById("newProjectDiv").innerHTML = "";
    for (let i = 0; i < myProjects.length; i++) {
      // Create new divs
      let formattedName = myProjects[i].name.replace(/ +/g, "-");
      createNewDiv(formattedName, "newProjectDiv");

      addBtn(`newProjectCompletedBtn${i}`, formattedName);
      document
        .getElementById(`newProjectCompletedBtn${i}`)
        .classList.add("unchecked");

      createNewDiv(`newProjectName${i}`, formattedName);
      setClassAttr(`newProjectName${i}`, "projectNames");

      createNewDiv(`newProjectDescription${i}`, formattedName);
      setClassAttr(`newProjectDescription${i}`, "projectDescription");

      createNewDiv(`newProjectDueDate${i}`, formattedName);
      setClassAttr(`newProjectDueDate${i}`, "projectDueDate");

      createNewDiv(`newProjectPriority${i}`, formattedName);
      setClassAttr(`newProjectPriority${i}`, "projectPriority");

      createNewDiv(`newProjectNotes${i}`, formattedName);
      setClassAttr(`newProjectNotes${i}`, "projectNotes");

      addBtn(`newProjectRemoveBtn${i}`, formattedName);
      addText(`newProjectRemoveBtn${i}`, "Remove");
      setClassAttr(`newProjectRemoveBtn${i}`, "removeBtn");

      // Change innerHTML of the divs to the projects array
      document.getElementsByClassName("projectNames")[i].innerHTML =
        myProjects[i].name;
      if (
        document.getElementsByClassName("projectDescription")[i].innerHTML !==
        ""
      ) {
        document.getElementsByClassName("projectDescription")[i].innerHTML =
          "Description: " + myProjects[i].description;
      }
      if (
        document.getElementsByClassName("projectDueDate")[i].innerHTML !== ""
      ) {
        document.getElementsByClassName("projectDueDate")[i].innerHTML =
          "Due Date: " + myProjects[i].dueDate;
      }
      if (
        document.getElementsByClassName("projectPriority")[i].innerHTML !== ""
      ) {
        document.getElementsByClassName("projectPriority")[i].innerHTML =
          "Priority Level: " + myProjects[i].priority;
      }
      if (document.getElementsByClassName("projectNotes")[i].innerHTML !== "") {
        document.getElementsByClassName("projectNotes")[i].innerHTML =
          "Notes: " + myProjects[i].notes;
      }

      // Mark Project as done
      let completedBtn = document.getElementById(`newProjectCompletedBtn${i}`);
      completedBtn.onclick = function (completedEvent) {
        if (completedEvent.target.classList.contains("unchecked")) {
          completedEvent.target.classList.remove("unchecked");
          completedEvent.target.classList.add("checked");
        } else {
          completedEvent.target.classList.remove("checked");
          completedEvent.target.classList.add("unchecked");
        }
      };

      // Remove Project Btn
      let removeBtn = document.getElementById(`newProjectRemoveBtn${i}`);
      removeBtn.onclick = function (removeEvent) {
        const deleteProject =
          removeEvent.target.parentElement.children[1].innerHTML;
        myProjects = myProjects.filter(
          (project) => project.name !== deleteProject
        );
        addProjectToPage();
        addProjectToMenu();
      };
    }
  };

  const addProjectToMenu = () => {
    document.getElementById("allProjectsList").innerHTML = "";
    for (let i = 0; i < myProjects.length; i++) {
      addLi(`liProjectName${i}`, "allProjectsList");

      createNewDiv(`onlyProjectName${i}`, `liProjectName${i}`);
      setClassAttr(`onlyProjectName${i}`, "menuProjectName");

      document.getElementsByClassName("menuProjectName")[i].innerHTML =
        myProjects[i].name;
    }
  };

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
    // document.getElementById("dueDate").value;
    myProjects.push(addProjectObj);
    addProjectToPage();
    addProjectToMenu();
    removeModalForm();
  };
};

export { createModal };
