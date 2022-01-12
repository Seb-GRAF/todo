import { createDom } from "./dom";
import { Project, allProjects } from "./project";

function createForm() {
  content.prepend(createDom("div", "formBg"));
  formBg.addEventListener("click", removeForm);
  content.prepend(createDom("form", "form"));
  form.innerHTML = `<span id="formTitle">New Project</span>
      <label for="projectTitle">Title</label>
      <input type="text" id ="projectTitle" name="projectTitle">
        <button type="submit" id="formSubmit">Submit</button>`;

  formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    submitForm();
  });
}
function submitForm() {
  allProjects.push(new Project(projectTitle.value));
  removeForm();
}

function removeForm() {
  content.removeChild(formBg);
  content.removeChild(form);
}

export { createForm, removeForm };
