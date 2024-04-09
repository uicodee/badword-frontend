import {makeAutoObservable, runInAction} from "mobx";
import type {WordFilterTypes} from "@/shared/api/model";

class FilterTableStore {
    filterType: WordFilterTypes = "checked"
    adminFilterType: WordFilterTypes = "all"

    constructor() {
        makeAutoObservable(this)
    }

    setFilterType(filterType: WordFilterTypes) {
        runInAction(() => this.filterType = filterType)
    }

    setAdminFilterType(filterType: WordFilterTypes) {
        runInAction(() => this.adminFilterType = filterType)
    }
}

export const filterTableStore = new FilterTableStore()