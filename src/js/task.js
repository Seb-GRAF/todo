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
  }
  setDate(date) {
    this.date = date;
  }
  isToday() {
    let dueDate = differenceInDays(
        new Date(this.date).setHours(0, 0, 0, 0),
        new Date().setHours(0, 0, 0, 0)
      );
      if (dueDate === 0) return true
  }
  //needs to make it work to retrieve tasks and proto methods
  static of(object) {
    return new Task(object.title, object.description, object.date);
  }
}

export { Task };
