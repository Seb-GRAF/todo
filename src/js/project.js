let projects;

function restore() {
  if (!localStorage.myLibrary) projects = [];
  else {
    let items = localStorage.getItem("projects");
    items = JSON.parse(items);
    projects = items;
  }
}
function sendToLocal() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function createProject(arr) {
  projects.push({
    title: arr[0],
    description: arr[1],
    tasks: [],
  });
  sendToLocal();
}
function updateProject(index, type, update) {
  if (type === "title") projects[index].title = update;
  if (type === "description") projects[index].description = update;
  sendToLocal();
}
function removeProject(i) {
    projects.splice(i, 1)
    sendToLocal()
}
function listProjects() {
  return projects;
}
export { createProject, listProjects, updateProject, removeProject, restore };
