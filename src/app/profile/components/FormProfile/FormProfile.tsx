"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import axios from 'axios'
import { useRouter } from "next/navigation";
import React from "react";
import { cookies } from "next/headers";

interface FormData {
    username: string;
    password: string;
}

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

export function FormProfile() {
    const form = useForm<FormData>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(data: FormData) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }
    const { register, handleSubmit, reset } = useForm()
    const router = useRouter()
    // React.useEffect(() => {
    //     if (cookies().get("token")) {
    //         router("/", { replace: true });
    //     }
    // }, []);
    const submit = (data: any) => {
        axios.post("/api/admin-login/", data).then((res) => {
            router.push("/login")
        })
        reset()
    }
    return (
        <div className="my-11">
            <div className="container">
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <input
                            {...register("name")}
                            className="border-blue-400 border-2 "
                            placeholder="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <input
                            {...register("email")}
                            className="border-blue-400 border-2 "
                            placeholder="email"
                            type="text"
                        />
                    </div>
                    <div>
                        <input
                            {...register("password")}
                            className="border-blue-400 border-2 "
                            placeholder="password"
                            type="text"
                        />
                    </div>
                    <button className="p-3 bg-blue-400">send</button>
                </form>
            </div>
        </div>
    );
}
