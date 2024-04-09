import {FC, useEffect} from "react";
import {DataTableCard} from "./data-table-card.tsx";
import {Badge, Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/shared/ui";
import {wordStore} from "@/widgets/data-table/model/store.ts";
import {observer} from "mobx-react-lite";
import {useGetWordsWordAllGet} from "@/shared/api/word/word.ts";
import {filterTableStore} from "@/features/filter-table/model/store.ts";

export const UserDataTable: FC = observer(() => {
    const {data: words} = useGetWordsWordAllGet({
        page: wordStore.page,
        limit: 10,
        type: filterTableStore.filterType
    }, {query: {queryKey: ["words", wordStore.page, filterTableStore.filterType]}})
    useEffect(() => {
        if (words) {
            wordStore.setTotalPages(words.pages as number);
        }
    }, [words]);
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return `${formattedDate} ${formattedTime}`;
    }
    return (
        <DataTableCard>
            <Table>
                <TableHeader className="bg-accent">
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>So'z</TableHead>
                        <TableHead className="hidden sm:table-cell">Sana</TableHead>
                        <TableHead className="sm:table-cell">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {words?.words.map((word, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <div className="font-medium text-muted-foreground">{word.id}</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{word.word}</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                {formatDate(word.createdAt)}
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
