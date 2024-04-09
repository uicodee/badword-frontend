import {makeAutoObservable, runInAction} from "mobx";

class WordStore {
    page = 1;
    totalPages: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setPage = (page: number) => {
        runInAction(() => this.page = page)
    };

    setTotalPages = (totalPages: number) => {
        runInAction(() => this.totalPages = totalPages)
    };
}

export const wordStore = new WordStore();
