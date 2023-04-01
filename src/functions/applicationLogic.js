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

// Remove Project

// Date Formatter
const dateFormat = (inputDate, format) => {
  let dateValue = new Date(inputDate);
  return dateValue.toLocaleString([], {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export { removeModalForm, dateFormat };
