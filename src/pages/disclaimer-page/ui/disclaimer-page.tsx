import {FC, useState} from "react";
import {Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Switch} from "@/shared/ui";
import {cn} from "@/shared/ui/utils.ts";
import {Check, Glasses} from "lucide-react";
import {useNavigate} from "react-router-dom";

export const DisclaimerPage: FC = () => {
    const navigate = useNavigate()
    const [isAgree, setIsAgree] = useState<boolean>(false)
    return (
        <div className="flex w-full h-full items-center justify-center">
            <Card className={cn("w-11/12 md:w-6/12 lg:3/12")}>
                <CardHeader>
                    <CardTitle>Disclaimer</CardTitle>
                    <CardDescription>Ushbu saytda taqiqlangan so'zlar, jumladan, odobsiz so'zlar va odobsiz so'zlar
                        ma'lumotlar bazasi mavjud bo'lib, ular ma'lum auditoriya uchun qabul qilinishi mumkin emas.
                        Iltimos, shunga o'xshash tilni ishlatishdan qochib, boshqa foydalanuvchilarga e'tibor bering va
                        hurmat qiling. Sayt ma'muriyati foydalanuvchi tomonidan yaratilgan xabarlarning mazmuni uchun
                        javobgar emas va belgilangan qoidalar va qoidalarga muvofiq tarkibni moderatsiya qilish huquqini
                        o'zida saqlab qoladi. Ushbu saytdan foydalanish yuqoridagi shartlarga rozi bo'lishni
                        anglatadi</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <Glasses/>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Qoidalarga rozilik
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Men qoidalarni o'qib chiqdim va roziman
                            </p>
                        </div>
                        <Switch checked={isAgree} onCheckedChange={(checked) => setIsAgree(checked)}/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" disabled={!isAgree} onClick={() => {
                        localStorage.setItem('isAgree', String(isAgree))
                        navigate("/")
                    }}>
                        <Check className="mr-2 h-4 w-4"/> Davom etish
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
