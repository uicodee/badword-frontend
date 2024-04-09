import {FC} from "react";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/ui";
import {User} from "lucide-react";
import {useGetMeUserGetMeGet} from "@/shared/api/user/user.ts";
import {useNavigate} from "react-router-dom";


export const AdminProfile: FC = () => {
    const navigate = useNavigate()
    const {data: user} = useGetMeUserGetMeGet({query: {queryKey: ["user"]}})
    const onLogout = () => {
        localStorage.removeItem('accessToken')
        navigate("/")
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="overflow-hidden rounded-full"
                >
                    <User className="h-[1.2rem] w-[1.2rem]"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user?.firstname} {user?.lastname}</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onSelect={onLogout}>Chiqish</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
