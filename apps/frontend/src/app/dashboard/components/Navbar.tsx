import { logout } from "@/actions/auth";
import Link from "next/link";

const links = [
    {href: 'dashboard', text: 'Dashboard'},
    {href: 'settings', text: 'Settings'},
    {href: 'profile', text: 'Profile'},
]

export default function Navbar () {
    return <aside className="flex flex-col gap-4 basis-1/10 bg-gray-900 items-center p-4">
        {links.map((link) => 
            <Link className="
                text-gray-700 
                dark:text-gray-50
                p-2
                rounded-lg
                hover:bg-gray-950
                w-full
                text-center"
                key={link.text}
                href={link.href}>
                    {link.text}
                </Link>
        )}
        <button 
        onClick={logout}
        className="
            text-gray-700 
            dark:text-gray-50
            p-2
            rounded-lg
            hover:bg-gray-950
            w-full
            text-center">
                Logout
        </button>
    </aside>
}