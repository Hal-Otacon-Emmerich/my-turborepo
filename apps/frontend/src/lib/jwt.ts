import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { ACCESS_TOKEN } from "../types/const";

const JWT_SECRET = process.env.JWT;
const secret = new TextEncoder().encode(JWT_SECRET);

export interface JwtPayload {
  id: string;
  email: string;
}

export async function isAuthenticated(): Promise<JwtPayload | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get(ACCESS_TOKEN)?.value;
        if(!token) return null;
        const { payload } = await jwtVerify<JwtPayload>(token, secret, {
            algorithms: ['HS256']
        });

        return payload;
        
    } catch (error) {
        console.error('Token verification failed', error);
        return null
    }
}