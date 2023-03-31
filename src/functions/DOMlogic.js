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
const createImg = (newImgId, parentDivId, imageName) => {
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

// Create Ul
const addUl = (newUlId, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  let ul = document.createElement("ul");
  ul.setAttribute("id", newUlId);
  parentDiv.appendChild(ul);
};

// Create Li
const addLi = (newLiId, parentUlId) => {
  let parentUl = document.getElementById(parentUlId);
  let li = document.createElement("li");
  li.setAttribute("id", newLiId);
  parentUl.appendChild(li);
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

// Create a with href
const addHref = (link, newLinkText, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  let a = document.createElement("a");
  a.innerHTML = newLinkText;
  a.href = link;
  parentDiv.appendChild(a);
};

// Create Para
const createPara = (text, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  const para = document.createElement("p");
  para.innerText = text;
  parentDiv.appendChild(para);
};

// Create HR
const createHr = (hrId, parentDivId) => {
  let parentDiv = document.getElementById(parentDivId);
  let hr = document.createElement("hr");
  hr.setAttribute("id", hrId);
  parentDiv.appendChild(hr);
};


// Create Modal Form
const createFormBox = () => {
  createNewDiv("myModal", "mainContent");
  createNewDiv("modalContent", "myModal");

  // Create X to close out
  let span = document.createElement("span");
  span.setAttribute("class", "close");
  span.textContent = "&times;";
  modalContent.appendChild(span);

  // Create Form Box
  let form = document.createElement("form");
  form.setAttribute("name", "myForm");
  form.setAttribute("id", "myForm");
  form.setAttribute("action", "");
  form.setAttribute("method", "GET");
  modalContent.appendChild(form);

  // Create Ul for the Form
  addUl("popUp", "myForm");
  setClassAttr("popUp", "popUp");

  // New Li
  addLi("titleForm", "popUP");
  setClassAttr("titleForm", "titleForm");
  // LABEL
  let label = document.createElement("label");
  label.setAttribute("for", "title");
  label.innerHTML = "Title: ";
  titleForm.appendChild(label);
  // INPUT
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "title");
  input.setAttribute("name", "title");
  input.setAttribute("pattern", "^[a-zA-Z0-9_.-]*$");
  titleForm.appendChild(input);

  // New Li
  
};

export {
  createNewDiv,
  setClassAttr,
  addText,
  createImg,
  addBtn,
  addUl,
  addLi,
  addEventListClick,
  removeChildrenNodes,
  addHref,
  createPara,
  createHr,
  createFormBox,
};
