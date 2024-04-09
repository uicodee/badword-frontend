import {FC} from "react";
import {ThemeToggle} from "@/widgets/theme-toggle";
import {ContactAdminButton} from "@/features/contact-admin";
import {ExportFileButton} from "@/features/export-file";
import {CreateWordButton} from "@/features/create-word";
import {LoginButton} from "@/features/login";
import {FilterTableButton} from "@/features/filter-table";
import {Search} from "@/features/search";

export const UserHeader: FC = () => {
    return (
        <div className="flex gap-x-2 justify-end">
            <Search/>
            <ThemeToggle/>
            <FilterTableButton/>
            <ExportFileButton/>
            <ContactAdminButton/>
            <LoginButton/>
            <CreateWordButton/>
        </div>
    );
};
