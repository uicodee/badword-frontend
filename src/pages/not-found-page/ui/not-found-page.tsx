import {FC} from "react";
import image from "@/assets/not-found.svg"
import {Button} from "@/shared/ui";
import {Link} from "react-router-dom";
import {ChevronLeft} from "lucide-react";

export const NotFoundPage: FC = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col text-center gap-y-3">
                <img src={image} className="h-full w-full"/>
                <Link to="/"><Button className="w-full"><ChevronLeft className="w-4 h-4 mr-2"/>Asosiy
                    sahifa</Button></Link>
            </div>
        </div>
    );
};
