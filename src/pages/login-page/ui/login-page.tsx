import {FC} from "react";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    useToast,
} from "@/shared/ui";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLoginUserLoginPost} from "@/shared/api/authentication/authentication.ts";
import {useNavigate} from "react-router-dom";


const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})

export const LoginPage: FC = () => {
    const {toast} = useToast()

    const navigate = useNavigate()
    const mutation = useLoginUserLoginPost({
        mutation: {
            onSuccess: (response) => {
                localStorage.setItem("accessToken", response.access_token)
                navigate("/admin")
            },
            onError: (error) => {
                toast({
                    description: String(error.response?.data.detail),
                    variant: "destructive"
                })
            }
        }
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutation.mutate({data: {username: values.email, password: values.password}})
    }

    return (
        <div className="flex h-full justify-center items-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Akkauntingizga kirish uchun elektron pochtangizni kiriting.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="m@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Parol</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-full">Kirish</Button>
                            </form>
                        </Form>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
