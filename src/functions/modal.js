import { createNewDiv, setClassAttr } from "./DOMlogic";
import { removeModalForm } from "./applicationLogic";

const createModal = () => {
  let template = `
    <h2>New Project</h2>
    <div id="myModal" class="modal">
    <div class="modal_content">
      <span id="close" class="close">&times;</span>
      <form name="myForm" id="myForm" action="" method="GET">
        <ul class="pop_up">
          <li class="title_form">
            <label for="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
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
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
          </li>
          <li class="notes">
            <label for="notes">Notes:</label>
            <textarea id="notes" name="notes"></textarea>
          </li>
        </ul>
        <button type="submit" id="submitBtn" value="Click">Submit</button>
      </form>
    </div>
  </div>
  `;
  createNewDiv("modalDiv", "mainContent");
  let modalDiv = document.getElementById("modalDiv");
  modalDiv.innerHTML = template;

  let closeBtn = document.getElementById("close");
  closeBtn.onclick = function (event) {
    removeModalForm();
  };

  let myProjects = [];

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
    for (let i = 0; i < myProjects.length; i++) {
      // Create new divs
      createNewDiv("newProjectDiv", "mainContent");

      createNewDiv("newProjectName", "newProjectDiv");
      setClassAttr("newProjectName", "projectNames");

      createNewDiv("newProjectDescription", "newProjectDiv");
      setClassAttr("newProjectDescription", "projectDescription");

      createNewDiv("newProjectDueDate", "newProjectDiv");
      setClassAttr("newProjectDueDate", "projectDueDate");

      createNewDiv("newProjectPriority", "newProjectDiv");
      setClassAttr("newProjectPriority", "projectPriority");

      createNewDiv("newProjectNotes", "newProjectDiv");
      setClassAttr("newProjectNotes", "projectNotes");

      // Change innerHTML of the divs to the projects array
      document.getElementsByClassName("projectNames")[i].innerHTML =
        myProjects[i].name;
      document.getElementsByClassName("projectDescription")[i].innerHTML =
        myProjects[i].description;
      document.getElementsByClassName("projectDueDate")[i].innerHTML =
        myProjects[i].dueDate;
      document.getElementsByClassName("projectPriority")[i].innerHTML =
        myProjects[i].priority;
      document.getElementsByClassName("projectNotes")[i].innerHTML =
        myProjects[i].notes;
    }
  };

  // Submit Btn triggers the following: grabs values, adds to Project Obj
  let submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = function (event) {
    const formSubmissionNewProjectName = document.getElementById("name").value;
    const formSubmissionNewProjectDescription =
      document.getElementById("description").value;
    const formSubmissionNewProjectDueDate =
      document.getElementById("dueDate").value;
    const formSubmissionNewProjectPriority =
      document.getElementById("priority").value;
    const formSubmissionNewProjectNotes =
      document.getElementById("notes").value;
    const addProjectObj = new Project(
      formSubmissionNewProjectName,
      formSubmissionNewProjectDescription,
      formSubmissionNewProjectDueDate,
      formSubmissionNewProjectPriority,
      formSubmissionNewProjectNotes
    );
    myProjects.push(addProjectObj);
    addProjectToPage();
    removeModalForm();
    event.preventDefault();
  };
};

export { createModal };
