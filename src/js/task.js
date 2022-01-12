import { Project, allProjects, restore, sendToLocal } from "./project";
import { compareAsc, differenceInDays, format } from "date-fns";

class Task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  }
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }
  getDate() {
    return this.date;

    format(new Date(this.date), "dd/MM/yyyy");
  }
  setDate(date) {
    this.date = date;
  }
  //needs to make it work to retrieve tasks and proto methods
  static of(object) {
    return new Task(object.title, object.description, object.date);
  }
}

export { Task };
