import {FC} from "react";
import {File} from "lucide-react";
import {Button} from "@/shared/ui";
import {useGetAllWordsWordJsonGet} from "@/shared/api/word/word.ts";
import {Link} from "react-router-dom";

export const ExportFileButton: FC = () => {
    const {data} = useGetAllWordsWordJsonGet({query: {queryKey: ["json-words"]}})
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    return (
        <Link to={url} download="words.json">
            <Button size="sm" variant="outline" className="w-full gap-1">
                <File className="h-3.5 w-3.5"/>
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Export
        </span>
            </Button>
        </Link>
    );
};
