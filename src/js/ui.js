import { createDom } from "./dom";
import { createForm, removeForm } from "./form";
import { Project, allProjects, restore, sendToLocal } from "./project";
import { Task } from "./task";
import { compareAsc, differenceInDays, format } from "date-fns";

import "../styles/ui.scss";
let selectedProjectIndex;
let editStatus;
function loadHomepage() {
  restore();
  reloadProjects();
  newTaskListener();
  renderProjectRight(0);
  toggleProjectClass(0);
}
//reloads allProjects from project.js
function reloadProjects() {
  projects.innerHTML = "";
  allProjects.forEach((e, i) => {
    renderProjectLeft(i);
  });
}
//listeners for new project button
(function newProjectListeners() {
  newProjectAdd.addEventListener("click", () => {
    if (newProjectArea.value === "") return;
    allProjects.push(new Project(newProjectArea.value));
    renderProjectLeft(allProjects.length - 1);
    newProjectArea.value = "";
    sendToLocal();
  });
  newProjectArea.addEventListener("keydown", (e) => {
    if (newProjectArea.value === "" && e.code === "Enter")
      return e.preventDefault();
    if (e.code === "Enter") {
      e.preventDefault();
      allProjects.push(new Project(newProjectArea.value));
      renderProjectLeft(allProjects.length - 1);
      newProjectArea.value = "";
      sendToLocal();
    }
  });
})();
//make side menu interractive
(function menuBtnListener() {
  let leftState = true;
  menuBtn.addEventListener("click", toggleLeft);

  function toggleLeft() {
    if (leftState === true) {
      leftState = false;
      left.style.minWidth = "0";
      left.style.width = "0";
      left.style.padding = "30px 0";
      left.style.transform = "translateX(-150px)";
      menuBtn.style.transform = "scaleX(-1)";

      return;
    }
    if (leftState === false) {
      leftState = true;
      left.style.minWidth = "200px";
      left.style.width = "200px";
      left.style.padding = "30px";
      left.style.transform = "none";
      menuBtn.style.transform = "scaleX(1)";

      return;
    }
  }
})();
(function allTasksListener() {
  allTasks.addEventListener("click", () => {
    renderAllTasks();
    addNewTask.style.display = "none";

    //untoggles seleced project
    document.querySelectorAll(".projectActive").forEach((e) => {
      e.className = "project";
    });
    // styles today and allprojects
    allTasks.style.fontWeight = "600";
    today.style.fontWeight = "400";
  });
})();
(function todayTasksListener() {
  today.addEventListener("click", () => {
    renderToday();
    addNewTask.style.display = "none";

    //untoggles seleced project
    document.querySelectorAll(".projectActive").forEach((e) => {
      e.className = "project";
    });
    // styles today and allprojects
    today.style.fontWeight = "600";
    allTasks.style.fontWeight = "400";
  });
})();
//listener for newtask button
function newTaskListener() {
  newTaskButton.addEventListener("click", () => {
    if (editStatus === true) {
      toggleProjectClass(selectedProjectIndex);
      editStatus = false;
      return;
    }
    taskForm(addNewTask);
  });
}

function closeTaskForm() {
  addNewTask.innerHTML = `
  <div id="newTaskButton">Click to add new task</div>
  `;
  newTaskListener();
}
function submitTaskForm(container, taskIndex) {
  let task = allProjects[selectedProjectIndex].tasks[taskIndex];
  let previousContent = container.innerHTML;

  if (container.id === "addNewTask") {
    allProjects[selectedProjectIndex].setTask(
      new Task(taskTitleArea.value, taskDescriptionArea.value, taskDate.value)
    );
    let tasks = allProjects[selectedProjectIndex].getTasks();
    container.innerHTML = previousContent;
  } else {
    task.setTitle(taskTitleArea.value);
    task.setDescription(taskDescriptionArea.value);
    task.setDate(taskDate.value);
  }
  editStatus = false;
  sendToLocal();
  closeTaskForm();
  toggleProjectClass(selectedProjectIndex);
}
//creates task form and submit listener
function taskForm(container, taskIndex) {
  closeTaskForm();
  let task = allProjects[selectedProjectIndex].tasks[taskIndex];
  container.innerHTML = `
<div id="taskForm">
<textarea id="taskTitleArea" placeholder="Title"></textarea>
<textarea id="taskDescriptionArea"placeholder="Description"></textarea>
<div id="taskFormBottom">
<input type="date" id="taskDate" value="${format(new Date(), "yyyy-MM-dd")}">
<div id="formInput">
<button id="taskFormCancel">✕</button>
<button id="taskFormSubmit">✓</button>
</div>
</div>
</div>`;
  //sets values of the selected task to the text areas
  if (container.id !== "addNewTask") {
    taskTitleArea.value = task.getTitle();
    taskDescriptionArea.value = task.getDescription();
    taskDate.value = task.getDate();
  }
  taskFormSubmit.addEventListener("click", () => {
    submitTaskForm(container, taskIndex);
  });
  taskFormCancel.addEventListener("click", () => {
    editStatus = false;
    closeTaskForm();
    toggleProjectClass(selectedProjectIndex);
  });
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      editStatus = false;
      closeTaskForm();
      toggleProjectClass(selectedProjectIndex);
    }
  });
}
// renders all the projects of the left sidebar
function renderProjectLeft(index) {
  let newProject = projects.appendChild(
    createDom("div", `project${index}`, "project")
  );

  //project click listener
  let newProjectTitle = newProject.appendChild(
    createDom("div", `project${index}Title`, "projectTitle")
  );
  newProjectTitle.addEventListener("click", () => {
    toggleProjectClass(index);
    closeTaskForm();
    addNewTask.style.display = "flex";
  });
  newProjectTitle.textContent = `• ${allProjects[index].title}`;

  //del button + listener
  let newProjectDelBtn = newProject.appendChild(
    createDom("button", `project${index}Del`, "projectDelBtn")
  );
  newProjectDelBtn.textContent = "🗑";
  newProjectDelBtn.addEventListener("click", (e) => deleteProject(e, index));

  //delete project and updates local storage
  function deleteProject(e, index) {
    allProjects.splice(index, 1);
    sendToLocal();
    let target = e.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
    reloadProjects();
  }
}
function renderProjectRight(index) {
  rightProjectMain.innerHTML = "";
  let editBtn = rightProjectMain.appendChild(
    createDom("button", `projectEditBtn`, "projectEditBtn")
  );
  editBtn.textContent = "✎";

  //edit project title listener
  editBtn.addEventListener("click", () => {
    rightProjectMain.removeChild(rightProjectTitle);
    let editTitleArea = rightProjectMain.appendChild(
      createDom("textarea", "editTitleArea")
    );
    editTitleArea.setAttribute("maxlength", "50");
    editTitleArea.value = allProjects[index].getTitle();
    editTitleArea.setAttribute("placeholder", "Project Name");
    editTitleArea.autofocus = true;

    rightProjectMain.removeChild(editBtn);
    rightProjectMain.prepend(
      createDom("button", "projectSaveBtn", "projectEditBtn")
    );
    projectSaveBtn.textContent = "✓";

    //edit textarea listener for enter keydown
    editTitleArea.addEventListener("keydown", (e) => {
      if (editTitleArea.value === "" && e.code === "Enter")
        return e.preventDefault();
      if (e.code === "Enter") {
        allProjects[index].setTitle(editTitleArea.value);
        sendToLocal();
        reloadProjects();
        renderProjectRight(index);
      }
    });
    //save button listener
    projectSaveBtn.addEventListener("click", (e) => {
      if (editTitleArea.value === "") return e.preventDefault();
      allProjects[index].setTitle(editTitleArea.value);
      sendToLocal();
      reloadProjects();
      renderProjectRight(index);
    });
  });

  rightProjectMain.appendChild(createDom("span", "rightProjectTitle"));
  rightProjectTitle.textContent = allProjects[index].title;
}
function renderTasks(index, project, today) {
  let allTasks;
  if (today === true) allTasks = allProjects[project].getTasks();
  else allTasks = allProjects[selectedProjectIndex].getTasks();
  let taskDiv = tasks.appendChild(createDom("div", `task${index}`, "task"));
  let taskTitle = taskDiv.appendChild(
    createDom("div", `task${index}Title`, "taskTitle")
  );

  //listener for task edit
  taskTitle.textContent = allTasks[index].getTitle();
  taskTitle.addEventListener("click", (e) => {
    if (editStatus === true) {
      toggleProjectClass(selectedProjectIndex);
      closeTaskForm();
      editStatus = false;
      return;
    }
    taskForm(e.target.parentNode, index);
    editStatus = true;
  });

  //creates due date div
  let dateDiv = taskDiv.appendChild(
    createDom("div", `task${index}DueDate`, "taskDueDate")
  );
  //formats due date
  (function renderDate() {
    let date = allTasks[index].getDate();
    let dueDate = differenceInDays(
      new Date(date).setHours(0, 0, 0, 0),
      new Date().setHours(0, 0, 0, 0)
    );
    let formatedDate = format(new Date(date), "dd MMMM yyyy");

    if (dueDate > 31) dateDiv.textContent = `due on ${formatedDate}`;
    if (dueDate <= 31) dateDiv.textContent = `due in ${dueDate} days`;
    if (dueDate === 1) dateDiv.textContent = `due tomorrow`;
    if (dueDate === 0) dateDiv.textContent = `due today`;
    if (dueDate < 0) dateDiv.textContent = `overdue by ${dueDate * -1} day`;
  })();
  let delBtn = taskDiv.appendChild(
    createDom("button", `task${index}DelBtn`, "taskDelBtn")
  );

  //del btn listener
  delBtn.textContent = "🗑";
  delBtn.addEventListener("click", () => {
    allProjects[selectedProjectIndex].tasks.splice(index, 1);
    sendToLocal();
    toggleProjectClass(selectedProjectIndex);
  });
}
//changes the class of selected project and stores index
function toggleProjectClass(index) {
  // styles today and allprojects
  document.getElementById("allTasks").style.fontWeight = "400";
  document.getElementById("today").style.fontWeight = "400";

  selectedProjectIndex = index;
  document.querySelectorAll(".projectActive").forEach((e) => {
    e.className = "project";
  });
  document.getElementById(`project${index}`).className = "projectActive";
  renderProjectRight(index);
  tasks.innerHTML = "";
  let allTasks = allProjects[index].getTasks();
  allTasks.forEach((e, i) => {
    renderTasks(i);
  });
}

function renderAllTasks() {
  rightProjectMain.innerHTML = `
  <span id="rightProjectTitle">All tasks</span>
  `;

  tasks.innerHTML = ``;
  allProjects.forEach((e, projectIndex) => {
    let tasks = e.getTasks();
    tasks.forEach((task, i) => {
      renderTasks(i, projectIndex, true);
    });
  });
}
function renderToday() {
  rightProjectMain.innerHTML = `
  <span id="rightProjectTitle">Your tasks due today</span>
  `;

  tasks.innerHTML = ``;
  allProjects.forEach((e, projectIndex) => {
    let tasks = e.getTasks();
    tasks.forEach((task, i) => {
      if (task.isToday() === true) renderTasks(i, projectIndex, true);
    });
  });
}
export { loadHomepage };
