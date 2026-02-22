import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./lib/jwt";

export async function proxy(request: NextRequest) {
    const payload = await isAuthenticated()
    if(request.nextUrl.pathname.startsWith('/dashboard') && !payload) {
        return NextResponse.redirect(new URL('/login', request.url))
    } 
        return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*'],
};