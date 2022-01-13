import { Task } from "./task";
import { compareAsc, format } from "date-fns";

let allProjects;

function restore() {
  //renders placeholder projects
  if (!localStorage.allProjects) {
    let items = [
      {
        title: "House",
        tasks: [
          {
            title: "Clean the house",
            description: "Vacuum and mop it nicely!",
            date: "2022-01-16",
          },
          {
            title: "Mow the lawn",
            description: "Oops, I forgot I don't have a lawn",
            date: "2022-03-17",
          },
          {
            title: "Meal prep",
            description: "meal prep meals for 7 days",
            date: "2022-01-17",
          },
        ],
      },
      {
        title: "Bills",
        tasks: [
          { title: "Internet", description: "", date: "2022-01-25" },
          { title: "Rent", description: "", date: "2022-01-25" },
          { title: "Insurance", description: "", date: "2022-01-25" },
          { title: "Taxes", description: "yep..", date: "2022-01-25" },
          { title: "Car", description: "", date: "2022-01-25" },
        ],
      },
      {
        title: "Coding",
        tasks: [
          {
            title: "more projects on Github @MorePog",
            description: "github.com/MorePog",
            date: "2022-01-13",
          },
        ],
      },
    ];
    allProjects = items.map((item) => Project.of(item));
  } else {
    let items = localStorage.getItem("allProjects");
    console.log(items);
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
    return new Project(
      object.title,
      object.tasks.map((e) => Task.of(e))
    );
  }
}

export { Project, allProjects, restore, sendToLocal };
