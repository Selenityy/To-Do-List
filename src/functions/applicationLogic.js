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

export { removeModalForm };
