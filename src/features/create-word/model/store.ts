import {makeAutoObservable, runInAction} from "mobx";

class CreateWordStore {
    isOpen = false;
    word = "";

    constructor() {
        makeAutoObservable(this);
    }

    setIsOpen = (isOpen: boolean) => {
        runInAction(() => this.isOpen = isOpen)
    };

    setWord = (word: string) => {
        runInAction(() => this.word = word)
    };
}

export const createWordStore = new CreateWordStore();
