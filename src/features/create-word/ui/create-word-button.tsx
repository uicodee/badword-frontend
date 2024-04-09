import {FC} from "react";
import {PlusCircle} from "lucide-react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
} from "@/shared/ui";
import {useQueryClient} from "@tanstack/react-query";
import {createWordStore} from "@/features/create-word/model/store.ts";
import {observer} from "mobx-react-lite";
import {useAddWordWordNewPost} from "@/shared/api/word/word.ts";

export const CreateWordButton: FC = observer(() => {
    const queryClient = useQueryClient();
    const mutation = useAddWordWordNewPost({
        mutation: {
            onSuccess: () => {
                queryClient
                    .invalidateQueries({queryKey: ["words"]})
                    .then(() => createWordStore.setIsOpen(false));
            },
        },
    });
    const onCreateClick = () => {
        mutation.mutate({data: {word: createWordStore.word}});
    };
    return (
        <Dialog
            open={createWordStore.isOpen}
            onOpenChange={(open) => createWordStore.setIsOpen(open)}
        >
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    className="h-8 gap-1"
                    onClick={() => createWordStore.setIsOpen(true)}
                >
                    <PlusCircle className="h-3.5 w-3.5"/>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Qo'shish
          </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="md:w-full w-5/6 rounded-xl">
                <DialogHeader>
                    <DialogTitle>Yangi so'z</DialogTitle>
                    <DialogDescription>
                        Siz yomon yoki so'kinish deb bilgan so'zni kiriting
                    </DialogDescription>
                </DialogHeader>
                <Input
                    className="w-full"
                    onChange={(event) => createWordStore.setWord(event.target.value)}
                />
                {/*{[...Array(inputCount)].map((_, index) => (*/}
                {/*  <Fragment key={index}>*/}
                {/*    {index !== 0 ? (*/}
                {/*      <div className="flex gap-x-1 items-center">*/}
                {/*        <Input key={index} className="flex w-10/12" />*/}
                {/*        <Button variant="destructive" className="w-2/12">*/}
                {/*          <Trash2 className="h-4 md:w-4" />*/}
                {/*        </Button>*/}
                {/*      </div>*/}
                {/*    ) : (*/}
                {/*      <Input key={index} />*/}
                {/*    )}*/}
                {/*  </Fragment>*/}
                {/*))}*/}
                {/*<div className="flex justify-center">*/}
                {/*  <Button*/}
                {/*    disabled={inputCount > 5}*/}
                {/*    variant="ghost"*/}
                {/*    className="w-full"*/}
                {/*    size="sm"*/}
                {/*    onClick={() => setInputCount((prevState) => prevState + 1)}*/}
                {/*  >*/}
                {/*    <CopyPlus className="h-3.5 w-3.5 mr-2" />*/}
                {/*    Yana*/}
                {/*  </Button>*/}
                {/*</div>*/}
                <DialogFooter className="w-full">
                    <Button type="submit" className="w-full" onClick={onCreateClick}>
                        Yaratish
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
});
