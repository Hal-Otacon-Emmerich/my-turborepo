"use server";

import { cookies } from "next/headers";
import { FormState } from "../types/formState";
import { redirect } from "next/navigation";
import { ACCESS_TOKEN } from "../types/const";

export async function signup(state: FormState, formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch(`${process.env.BACKEND_URL}/auth/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name, password})
    })
    if(response.ok) {
        return redirect('/login');
    }
    return {}
}

export async function signin(state: FormState, formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch(`${process.env.BACKEND_URL}/auth/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    if(response.ok) {
        const { access_token } = await response.json();
        const cookieStore = await cookies();
        cookieStore.set(ACCESS_TOKEN, access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 15,
            path: '/',
        })

        redirect('/dashboard');
    }
    return { message: 'Не верный логин или пароль'}
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(ACCESS_TOKEN);
    return redirect('/login')
}