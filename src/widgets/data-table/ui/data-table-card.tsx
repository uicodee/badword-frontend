import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui";
import { wordStore } from "@/widgets/data-table/model/store.ts";
import { observer } from "mobx-react-lite";

interface Props {
  children: ReactNode;
}

export const DataTableCard: FC<Props> = observer(({ children }) => {
  return (
    <Card className="h-full flex-grow w-full">
      <CardHeader className="px-7">
        <CardTitle className="flex">So'zlar</CardTitle>
        <CardDescription className="flex">
          Ma'lumot omboriga qo'shilgan barcha so'zlar ro'yxati
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              {wordStore.page > 1 && (
                <PaginationPrevious
                  onClick={() => wordStore.setPage(wordStore.page - 1)}
                />
              )}
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              {wordStore.page !== wordStore.totalPages &&
                wordStore.totalPages > 1 && (
                  <PaginationNext
                    onClick={() => wordStore.setPage(wordStore.page + 1)}
                  />
                )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
});
