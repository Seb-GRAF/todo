import { createDom } from "./dom";
import {
  createProject,
  listProjects,
  updateProject,
  removeProject,
  restore,
} from "./project";
import "../styles/ui.scss";
import createHeader from "./header";

function loadHomepage() {
  createHeader();
  content.appendChild(createDom("div", "main"));
  main.appendChild(createDom("div", "left"));
  main.appendChild(createDom("div", "right"));
  restore();
  renderProjectLeft();
}

function renderProjectLeft() {
  //creates project list
  (function createProjectList() {
    // create projectList div and Description
    left.appendChild(createDom("div", "projectList"));
    projectList.appendChild(createDom("div", "projectsTitleTop"));
    projectsTitleTop.appendChild(createDom("span", "projectsTitle"));
    projectsTitle.textContent = "Projects";

    projectsTitleTop.appendChild(createDom("button", "newProjectBtn"));
    newProjectBtn.textContent = "+";

    //create form on button click
    newProjectBtn.addEventListener("click", () => {
      createForm();
      form.innerHTML = `
                <span class="formTitle">NEW PROJECT</span>
                <label class ="formLabel" for ="projectName">Title*</label>
                <input require type="text" class = "formText" id="projectName" name ="projectName">
                <label class ="formLabel" for ="projectDescription">Description</label>
                <input require type="text" class = "formText" id="projectDescription" name ="projectDescription">
                <button type="submit" class ="formSubmit" id ="projectSubmit">Submit</button>
                `;
      //submit eventlistener
      projectSubmit.addEventListener("click", (e) => {
        createProject(returnFormSubmit(e));
        let projects = listProjects();
        let index = projects.length - 1;
        renderProject(index);
        toggleProject(index);
      });
    });
  })();
  //creates a project named "default" if no projects saved
  (function reloadProjects() {
    let projects = listProjects();
    if (projects === []) {
      createProject(["Default", "No Description"]);
      renderProject(0);
      renderProjectRight(0);
    } else {
      for (let i = 0; i < projects.length; i++) {
        renderProject(i);
      }
      renderProjectRight(0);
      toggleProject(0);
    }
  })();
  //renders the new project on the left
  function renderProject(i) {
    let projects = listProjects();
    projectList.appendChild(createDom("div", `project${i}`, "project"));

    //renders title & delete btn
    const project = document.getElementById(`project${i}`);
    project.appendChild(createDom("div", `projectTitle${i}`, "projectTitle"));
    project.appendChild(
      createDom("button", `projectDelBtn${i}`, "projectDelBtn")
    ).textContent = "🗑️";

    //listener for project selection & del btn
    const projectTitle = document.getElementById(`projectTitle${i}`);
    projectTitle.addEventListener("click", () => {
      toggleProject(i);
    });
    document
      .getElementById(`projectDelBtn${i}`)
      .addEventListener("click", () => {
        removeProjectLeft(i);
        toggleProject(i - 1);
      });

    projectTitle.textContent = `• ${projects[i].title}`;
  }

  function toggleProject(i) {
    toggleProjectClass();
    let project = document.getElementById(`project${i}`);
    project.className = "projectActive";
    removeProjectRight();
    renderProjectRight(i);
    function toggleProjectClass() {
      document.querySelectorAll(".projectActive").forEach((e) => {
        e.className = "project";
      });
    }
  }
}
function removeProjectLeft(i) {
  let project = document.getElementById(`project${i}`);
  projectList.removeChild(project);
  removeProject(i);
}
function renderProjectRight(i) {
  let projects = listProjects();
  right.appendChild(createDom("div", "selectedProject"));

  //renders top part of the project
  createSelectedProjectTop();
  function createSelectedProjectTop() {
    selectedProject.innerHTML = "";
    selectedProject.appendChild(createDom("div", "selectedProjectTop"));

    selectedProjectTop.appendChild(
      createDom("span", "selectedProjectTitle")
    ).textContent = projects[i].title;

    selectedProjectTop.appendChild(
      createDom("span", "selectedProjectDescription")
    ).textContent = projects[i].description;

    //listeners for opening edit
    selectedProjectTitle.addEventListener("click", projectTopEdit);
    selectedProjectDescription.addEventListener("click", projectTopEdit);
  }
  function projectTopEdit() {
    selectedProjectTop.innerHTML = `
    <textarea id="projectTitleEdit" name ="projectTitleEdit" placeHolder="Title">${selectedProjectTitle.textContent}</textarea>
    <textarea id="projectDescriptionEdit" name ="projectDescriptionEdit" placeHolder="Description">${selectedProjectDescription.textContent}</textarea>
    <button id="projectEditConfirm">Confirm</button>
    `;
    projectEditConfirm.addEventListener("click", () => {
      let project = document.getElementById(`project${i}`);
      updateProject(i, "title", projectTitleEdit.value);
      updateProject(i, "description", projectDescriptionEdit.value);
      project.textContent = `• ${projectTitleEdit.value}`;
      createSelectedProjectTop();
    });
  }
}
function removeProjectRight() {
  right.removeChild(selectedProject);
}

//form functions
function returnFormSubmit(e) {
  e.preventDefault();
  let arr = [];
  arr.push(projectName.value);
  arr.push(projectDescription.value);
  removeForm();
  return arr;
}
function createForm() {
  content.prepend(createDom("div", "formBg"));
  formBg.addEventListener("click", removeForm);
  content.prepend(createDom("form", "form"));
}
function removeForm() {
  content.removeChild(formBg);
  content.removeChild(form);
}
export default loadHomepage;
