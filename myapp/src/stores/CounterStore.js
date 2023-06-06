import { makeAutoObservable } from "mobx";

class CounterStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment(value = 1) {
    this.counter += value;
  }

  decrement(value = 1) {
    this.counter -= value;
  }
}

const counterStore = new CounterStore();
export default counterStore;
