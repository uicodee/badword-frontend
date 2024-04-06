import { FC } from "react";
import { UserHeader } from "@/widgets/header";
import { UserDataTable } from "@/widgets/data-table";

export const HomePage: FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-y-2">
      <UserHeader />
      <UserDataTable />
    </div>
  );
};
