import {
  removeModalForm,
  dateFormat,
  addProjectToMenu,
  addProjectToPage,
  listenForClickOnProject,
} from "./applicationLogic";

export let myProjects = JSON.parse(localStorage.getItem("myProjects")) || [];

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

  // Submit Btn triggers the following: grabs values, adds to Project Obj
  let submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = function (event) {
    event.preventDefault();
    const formSubmissionNewProjectName = document.getElementById("name").value;
    let newTitle = formSubmissionNewProjectName.replace(/[\s:;,.\-]+/g, "");
    if (formSubmissionNewProjectName === "") {
      alert("Please fill in a title.");
      return false;
    }
    for (let t = 0; t < myProjects.length; t++) {
      let projectNameInArray = myProjects[t].name.replace(/[\s:;,.\-]+/g, "");
      if (
        formSubmissionNewProjectName === projectNameInArray ||
        newTitle === projectNameInArray
      ) {
        alert("Please use a unique title.");
        return false;
      }
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

export { createModal };
