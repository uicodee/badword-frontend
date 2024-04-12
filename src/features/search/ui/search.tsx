import {FC} from "react";
import {CommandDialog, CommandEmpty, CommandInput, CommandList} from "@/shared/ui";

export const Search: FC = () => {
    return (
        <CommandDialog open={false}>
            <CommandInput placeholder="Qidirgan so'zingizni kiriting"/>
            <CommandList>
                <CommandEmpty>Hechnima topilmadi</CommandEmpty>
            </CommandList>
        </CommandDialog>
    );
};
