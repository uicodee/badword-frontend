import { FC } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { User } from "lucide-react";

export const AdminProfile: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="overflow-hidden rounded-full"
        >
          <User className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Akkauntim</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/*<DropdownMenuItem>Settings</DropdownMenuItem>*/}
        {/*<DropdownMenuItem>Support</DropdownMenuItem>*/}
        {/*<DropdownMenuSeparator />*/}
        <DropdownMenuItem>Chiqish</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
