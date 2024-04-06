import { makeAutoObservable } from "mobx";

class CreateWordStore {
  isOpen = false;
  word = "";
  constructor() {
    makeAutoObservable(this);
  }

  setIsOpen = (isOpen: boolean) => {
    this.isOpen = isOpen;
  };

  setWord = (word: string) => {
    this.word = word;
  };
}

export const createWordStore = new CreateWordStore();
