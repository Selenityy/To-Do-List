const createModal = () => {
  let template = `
    <h2>New Project</h2>
    <div id="myModal" class="modal">
    <div class="modal_content">
      <span class="close">&times;</span>
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
        <button type="submit" id="submitBtn" value="Click" onclick="modalFunction()">Submit</button>
    </div>
  </div>
  `;
  let mainContent = document.getElementById("mainContent");
  mainContent.innerHTML = template;
};

const modalFunction = (event) => {
  console.log("HELP");
  form.reset();
  event.preventDefault();
};

export { createModal, modalFunction };
