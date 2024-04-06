import { FC } from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

export const ContactAdminButton: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="gap-1">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Admin bo'lish
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-5/6 rounded-xl">
        <DialogHeader>
          <DialogTitle>Admin bo'lish</DialogTitle>
          <DialogDescription>
            Agar ushbu resursga o'z hissangizni qo'shmoqchi bo'lsangiz{" "}
            <a href="https://t.me/uicode" className="text-blue-500">
              @uicode
            </a>{" "}
            ga murojaat qiling
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center items-center h-72 w-full rounded-xl">
          <QRCode value="https://t.me/uicode" />
        </div>
        <Link to="https://t.me/uicode" className="w-full">
          <Button variant="outline" size="sm" className="w-full">
            Telegram <ExternalLink className="h-3.5 w-3.5 ml-3" />
          </Button>
        </Link>
      </DialogContent>
    </Dialog>
  );
};
