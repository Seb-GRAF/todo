import { Task } from "./task";
import { compareAsc, format } from "date-fns";


let allProjects;

function restore() {
  if (!localStorage.allProjects) {
    allProjects = [];
    allProjects.push(Project.of("Default", "Add your tasks here"))
  }
  else {
    let items = localStorage.getItem("allProjects");
    items = JSON.parse(items);
    allProjects = items.map((item) => Project.of(item));
  }
}
function sendToLocal() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

class Project {
  constructor(title, tasks) {
    this.title = title;
    if (tasks === undefined) this.tasks = [];
    else this.tasks = tasks;
  }
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getTasks() {
    return this.tasks;
  }
  setTask(task) {
    this.tasks.push(task);
  }
  static of(object) {
    // let tasks = object.tasks.map((e) => Task.of(e));
    return new Project(object.title, object.tasks.map((e) => Task.of(e)));
  }
}

export { Project, allProjects, restore, sendToLocal };
