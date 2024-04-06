import { FC } from "react";
import { AdminHeader } from "@/widgets/header";
import { AdminDataTable } from "@/widgets/data-table";

export const AdminPage: FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-y-2">
      <AdminHeader />
      <AdminDataTable />
    </div>
  );
};
