import {FC, ReactNode} from "react";
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
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shared/ui";
import {wordStore} from "@/widgets/data-table/model/store.ts";
import {observer} from "mobx-react-lite";

interface Props {
    children: ReactNode;
    isLoading: boolean;
}

export const DataTableCard: FC<Props> = observer(({children, isLoading}) => {
    const startIndex = Math.max(1, wordStore.page - 1);
    const endIndex = Math.min(wordStore.totalPages, startIndex + 2);
    const pages = Array.from({length: endIndex - startIndex + 1}, (_, index) => index + startIndex);
    return (
        <Card className="h-full flex-grow w-full">
            <CardHeader className="px-7">
                <CardTitle className="flex">So'zlar</CardTitle>
                <CardDescription className="flex">
                    Ma'lumot omboriga qo'shilgan barcha so'zlar ro'yxati
                </CardDescription>
            </CardHeader>
            <CardContent>{isLoading ?
                <p className="flex justify-center items-center text-center">Yuklanmoqda</p> : children}</CardContent>
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
                        {pages.map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    className="cursor-pointer"
                                    isActive={wordStore.page === page}
                                    onClick={() => wordStore.setPage(page)}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {endIndex < wordStore.totalPages && (
                            <PaginationItem>
                                <PaginationLink
                                    className="cursor-pointer"
                                    isActive={wordStore.page === wordStore.totalPages}
                                    onClick={() => wordStore.setPage(wordStore.totalPages)}
                                >
                                    {wordStore.totalPages}
                                </PaginationLink>
                            </PaginationItem>
                        )}
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
