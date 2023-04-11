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

// Saves project and To-Dos every time a new project is created


// looks for that data in localStorage when your app is first loaded

export { removeModalForm, dateFormat };
