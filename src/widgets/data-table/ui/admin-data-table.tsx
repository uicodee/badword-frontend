import {FC, useEffect} from "react";
import {DataTableCard} from "./data-table-card.tsx";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui";
import {
    useDeleteWordWordDeleteDelete,
    useGetWordsWordAllGet,
    useSetCheckedWordSetCheckedPut
} from "@/shared/api/word/word.ts";
import {wordStore} from "@/widgets/data-table/model/store.ts";
import {filterTableStore} from "@/features/filter-table/model/store.ts";
import {Trash2Icon} from "lucide-react";
import {useQueryClient} from "@tanstack/react-query";
import {observer} from "mobx-react-lite";

export const AdminDataTable: FC = observer(() => {
    const queryClient = useQueryClient()
    const {data: words, isLoading} = useGetWordsWordAllGet({
        page: wordStore.page,
        limit: 10,
        type: filterTableStore.adminFilterType
    }, {query: {queryKey: ["words", wordStore.page, filterTableStore.adminFilterType]}})
    useEffect(() => {
        if (words) {
            wordStore.setTotalPages(words.pages as number);
        }
    }, [words]);
    const createWordMutation = useSetCheckedWordSetCheckedPut(
        {
            mutation: {
                onSuccess: () => {
                    void queryClient.invalidateQueries({queryKey: ["words"]})
                }
            }
        }
    )
    const deleteWordMutation = useDeleteWordWordDeleteDelete({
        mutation: {
            onSuccess: () => {
                void queryClient.invalidateQueries({queryKey: ["words"]})
            }
        }
    })
    const onCheckedChange = (id: number, isChecked: boolean) => {
        createWordMutation.mutate({data: {wordId: id, isChecked: isChecked}})
    }
    const onDelete = (wordId: number) => {
        deleteWordMutation.mutate({params: {word_id: wordId}})
    }
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        return `${formattedDate} ${formattedTime}`;
    }
    return (
        <DataTableCard isLoading={isLoading}>
            <Table>
                <TableHeader className="bg-accent">
                    <TableRow>
                        <TableHead className="hidden sm:table-cell">ID</TableHead>
                        <TableHead>So'z</TableHead>
                        <TableHead className="hidden sm:table-cell">Sana</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amallar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {words?.words.map((word, index) => (
                        <TableRow key={index}>
                            <TableCell className="hidden sm:table-cell">
                                <div className="font-medium text-muted-foreground">{word.id}</div>
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{word.word}</div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                {formatDate(word.createdAt)}
                            </TableCell>
                            <TableCell className="sm:table-cell">
                                <Switch
                                    id="isChecked"
                                    checked={word.isChecked}
                                    onCheckedChange={(value) => onCheckedChange(word.id, value)}
                                />
                            </TableCell>
                            <TableCell className="sm:table-cell">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="icon" variant="destructive">
                                            <Trash2Icon
                                                className="h-3.5 w-3.5"/>
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="w-11/12 rounded-md md:w-full">
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Ishonchingiz komilmi?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Bu harakatni bekor qilib bo'lmaydi
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Bekor qilish</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => onDelete(word.id)}>O'chirish</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </DataTableCard>
    );
});
