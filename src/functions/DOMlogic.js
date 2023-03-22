// Create Div with Id Attribute & Append to Parent Div
const createNewDiv = (newDivId, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", newDivId);
  parentDiv.appendChild(newDiv);
};

// Set Class Attribute
const setClassAttr = (divId, classList) => {
  let div = document.getElementById(divId);
  div.classList.add(classList);
};

// Add Text to a Div
const addText = (divId, desiredText) => {
  let div = document.getElementById(divId);
  div.textContent = desiredText;
};

// Create an Img div
const addImg = (newImgId, parentDivId, imageName) => {
  let parentDiv = document.getElementById(parentDivId);
  let newImg = document.createElement("img");
  newImg.setAttribute("id", newImgId);
  newImg.src = imageName;
  parentDiv.appendChild(newImg);
};

// Create button
const addBtn = (newBtnId, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  let newBtn = document.createElement("button");
  newBtn.setAttribute("id", newBtnId);
  parentDiv.appendChild(newBtn);
};

// Add Click Event Listeners
const addEventListClick = (objId, assignedFunc) => {
  let btn = document.getElementById(objId);
  btn.addEventListener("click", assignedFunc);
};

// Remove the Children Nodes
const removeChildrenNodes = () => {
  const body = document.getElementById("body");
  while (body.firstChild) {
    body.removeChild(body.lastChild);
  }
};

export {
  createNewDiv,
  setClassAttr,
  addText,
  addImg,
  addBtn,
  addEventListClick,
  removeChildrenNodes,
};
