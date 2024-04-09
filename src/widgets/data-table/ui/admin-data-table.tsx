import {FC, useEffect} from "react";
import {DataTableCard} from "./data-table-card.tsx";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui";
import {useGetWordsWordAllGet, useSetCheckedWordSetCheckedPut} from "@/shared/api/word/word.ts";
import {wordStore} from "@/widgets/data-table/model/store.ts";
import {filterTableStore} from "@/features/filter-table/model/store.ts";
import {MoreHorizontal, Trash2Icon} from "lucide-react";
import {useQueryClient} from "@tanstack/react-query";
import {observer} from "mobx-react-lite";

export const AdminDataTable: FC = observer(() => {
    const queryClient = useQueryClient()
    const {data: words} = useGetWordsWordAllGet({
        page: wordStore.page,
        limit: 10,
        type: filterTableStore.adminFilterType
    }, {query: {queryKey: ["words", wordStore.page, filterTableStore.adminFilterType]}})
    useEffect(() => {
        if (words) {
            wordStore.setTotalPages(words.pages as number);
        }
    }, [words]);
    const mutation = useSetCheckedWordSetCheckedPut(
        {
            mutation: {
                onSuccess: () => {
                    void queryClient.invalidateQueries({queryKey: ["words"]})
                }
            }
        }
    )
    const onCheckedChange = (id: number, isChecked: boolean) => {
        mutation.mutate({data: {wordId: id, isChecked: isChecked}})
    }
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
                        <TableHead className="sm:table-cell">Sana</TableHead>
                        <TableHead className="sm:table-cell">Status</TableHead>
                        <TableHead className="sm:table-cell">Amallar</TableHead>
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
                                <Switch
                                    id="isChecked"
                                    checked={word.isChecked}
                                    onCheckedChange={(value) => onCheckedChange(word.id, value)}
                                />
                            </TableCell>
                            <TableCell className=" sm:table-cell">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                        >
                                            <MoreHorizontal className="h-4 w-4"/>
                                            <span className="sr-only">Toggle menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Amallar</DropdownMenuLabel>
                                        <DropdownMenuItem><Trash2Icon
                                            className="h-3.5 w-3.5 mr-2"/> O'chirish</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </DataTableCard>
    );
});
