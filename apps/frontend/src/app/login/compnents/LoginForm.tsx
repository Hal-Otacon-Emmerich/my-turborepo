"use client";

import { signin } from "@/actions/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useActionState } from "react"

export default function LoginForm() {
    const [state, action, pending] = useActionState(signin, undefined);

    return (
        <form action={action} className="space-y-6">
                <Input 
                    id="email"
                    name="email"
                    type="email"
                    label="Введите свой Email"
                    required={true}
                    placeholder="example@example.com"
                />
                <Input 
                    id="password"
                    name="password"
                    type="password"
                    label="Введите пароль"
                    required={true}
                />

                <div>
                    <Button type="submit" disable={pending}>
                        Войти
                    </Button>
                </div>
                <span>{state?.message}</span>
            </form>
    )
}