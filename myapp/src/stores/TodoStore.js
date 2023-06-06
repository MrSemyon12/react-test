import { makeAutoObservable } from "mobx";

class Todo {
  id;
  title;
  done;

  constructor(title) {
    makeAutoObservable(this);
    this.id = Date.now();
    this.title = title;
    this.done = false;
  }

  setDone() {
    this.done = !this.done;
  }
}

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  setDone(id) {
    this.todos.find((todo) => todo.id === id).setDone();
  }
}

const todoStore = new TodoStore();
export default todoStore;
