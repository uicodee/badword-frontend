import {FC} from "react";
import {
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/ui";
import {ListFilter} from "lucide-react";
import {filterTableStore} from "../model/store.ts"
import {observer} from "mobx-react-lite";
import {useQueryClient} from "@tanstack/react-query";
import {useLocation} from "react-router-dom";
import type {WordFilterTypes} from "@/shared/api/model";

export const FilterTableButton: FC = observer(() => {
    const location = useLocation();
    const queryClient = useQueryClient();
    const onCheckedChange = (filterTypes: WordFilterTypes) => {
        if (location.pathname === "/admin") {
            filterTableStore.setAdminFilterType(filterTypes)
        } else {
            filterTableStore.setFilterType(filterTypes)
        }
        void queryClient.invalidateQueries({queryKey: ["words"]})
    }

    const isChecked = (filterTypes: WordFilterTypes) => {
        if (location.pathname === "/admin") {
            switch (filterTypes) {
                case "all":
                    return filterTableStore.adminFilterType === "all"
                case "checked":
                    return filterTableStore.adminFilterType === "checked"
                case "unchecked":
                    return filterTableStore.adminFilterType === "unchecked"
            }
        } else {
            switch (filterTypes) {
                case "all":
                    return filterTableStore.filterType === "all"
                case "checked":
                    return filterTableStore.filterType === "checked"
                case "unchecked":
                    return filterTableStore.filterType === "unchecked"
            }
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1 text-sm">
                    <ListFilter className="h-3.5 w-3.5"/>
                    <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem
                    id="all"
                    checked={isChecked("all")}
                    onCheckedChange={() => onCheckedChange("all")}>Barchasi</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    id="checked"
                    checked={isChecked("checked")}
                    onCheckedChange={() => onCheckedChange("checked")}>Tekshirilgan</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    id="unchecked"
                    checked={isChecked("unchecked")}
                    onCheckedChange={() => onCheckedChange("unchecked")}>Tekshirilmagan</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
});
