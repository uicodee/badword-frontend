import {FC} from "react";
import image from "@/assets/internal-server-error.svg";
import {Button} from "@/shared/ui";
import {RotateCcw} from "lucide-react";

export const InternalServerErrorPage: FC = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col text-center gap-y-3">
                <img src={image} className="h-full w-full"/>
                <Button className="w-full" onClick={() => window.location.reload()}><RotateCcw
                    className="w-4 h-4 mr-2"/>Yangilash</Button>
            </div>
        </div>
    );
};
