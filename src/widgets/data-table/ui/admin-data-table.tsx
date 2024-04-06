import { FC } from "react";
import { DataTableCard } from "./data-table-card.tsx";
import {
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui";

export const AdminDataTable: FC = () => {
  return (
    <DataTableCard>
      <Table>
        <TableHeader className="bg-accent">
          <TableRow>
            <TableHead>So'z</TableHead>
            <TableHead className="sm:table-cell">Sana</TableHead>
            <TableHead className="sm:table-cell">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="font-medium">So'kinish</div>
            </TableCell>
            <TableCell className=" sm:table-cell">23:31 30.03.2024</TableCell>
            <TableCell className=" sm:table-cell">
              <Switch id="airplane-mode" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">So'kinish</div>
            </TableCell>
            <TableCell className=" sm:table-cell">23:31 30.03.2024</TableCell>
            <TableCell className="sm:table-cell">
              <Switch id="airplane-mode" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </DataTableCard>
  );
};
