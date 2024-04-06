import { FC } from "react";
import { File } from "lucide-react";
import { Button } from "@/shared/ui";
import { useWordControllerGetJsonFile } from "@/shared/api/word/word.ts";

export const ExportFileButton: FC = () => {
  const { data } = useWordControllerGetJsonFile();
  const jsonString = JSON.stringify(data?.data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  return (
    <a href={url} download="words.json">
      <Button size="sm" variant="outline" className="gap-1">
        <File className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Export
        </span>
      </Button>
    </a>
  );
};
