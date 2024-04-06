import { FC } from "react";
import { DataTableCard } from "./data-table-card.tsx";
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui";
import {
  useWordControllerFindAll,
  useWordControllerGetWordPages,
} from "@/shared/api/word/word.ts";
import { wordStore } from "@/widgets/data-table/model/store.ts";
import { observer } from "mobx-react-lite";

export const UserDataTable: FC = observer(() => {
  const { data: words } = useWordControllerFindAll(
    {
      page: wordStore.page,
      limit: 10,
    },
    { query: { queryKey: ["words"] } },
  );
  const { data: pagesCount } = useWordControllerGetWordPages();
  wordStore.setTotalPages(pagesCount?.data.pages as number);
  return (
    <DataTableCard>
      <Table>
        <TableHeader className="bg-accent">
          <TableRow>
            <TableHead>So'z</TableHead>
            <TableHead className="hidden sm:table-cell">Sana</TableHead>
            <TableHead className="sm:table-cell">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {words?.data.map((word, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">{word.word}</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {word.createdAt}
              </TableCell>
              <TableCell className=" sm:table-cell">
                <Badge
                  className="text-xs"
                  variant={word.isChecked ? "success" : "destructive"}
                >
                  {word.isChecked ? "Tekshirilgan" : "Tekshirilmagan"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataTableCard>
  );
});
