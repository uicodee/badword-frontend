import { makeAutoObservable } from "mobx";

class WordStore {
  page = 1;
  totalPages: number = 0;
  constructor() {
    makeAutoObservable(this);
  }

  setPage = (page: number) => {
    this.page = page;
  };

  setTotalPages = (totalPages: number) => {
    this.totalPages = totalPages;
  };
}

export const wordStore = new WordStore();
