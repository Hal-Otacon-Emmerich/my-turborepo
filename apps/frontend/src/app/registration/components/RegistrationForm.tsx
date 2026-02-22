"use client";

import { signup } from "@/actions/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useActionState } from "react"

export default function RegistrationForm() {
    const [state, action, pending] = useActionState(signup, undefined);

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
                    id="name"
                    name="name"
                    type="name"
                    label="Введите свое имя"
                    required={true}
                />
                <Input 
                    id="password"
                    name="password"
                    type="password"
                    label="Введите пароль"
                    required={true}
                />
                <Button type="submit" disable={pending}>
                    Регистрация
                </Button>
            </form>
    )
}