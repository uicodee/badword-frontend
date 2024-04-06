import { FC } from "react";
import { ThemeToggle } from "@/widgets/theme-toggle";
import { ExportFileButton } from "@/features/export-file";
import { CreateWordButton } from "@/features/create-word";
import { FilterTableButton } from "@/features/filter-table";
import { AdminProfile } from "@/widgets/admin-profile";

export const AdminHeader: FC = () => {
  return (
    <div className="flex items-center gap-x-2 justify-end">
      <ThemeToggle />
      <FilterTableButton />
      <ExportFileButton />
      <CreateWordButton />
      <AdminProfile />
    </div>
  );
};
