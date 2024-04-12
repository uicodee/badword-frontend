import {FC} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/shared/ui";
import {LogIn} from "lucide-react";

export const LoginButton: FC = () => {
    return (
        <Link to="/admin">
            <Button variant="outline" size="sm" className="gap-1 w-full">
                <LogIn className="h-3.5 w-3.5"/>
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Kirish
        </span>
            </Button>
        </Link>
    );
};
