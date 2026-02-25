'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 0) {
            return setIsScrolled(true)
        }
        return setIsScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed flex w-full justify-between text-gray-50 p-4 top-0 left-0 z-10 ${isScrolled ? 'bg-black' : ''}`}>
                <div>FinBoard</div>
                <nav>
                    <ul className="flex gap-8">
                        <li>
                            <Link href="/#about" scroll={true} className="hover:text-gray-500">
                                О проекте
                            </Link>
                        </li>
                        <li>
                            <Link href="/#info" scroll={true} className="hover:text-gray-500">
                                Информация
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact" scroll={true} className="hover:text-gray-500">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className="flex gap-4">
                    <li>
                        <Link className="rounded-full bg-orange-300 p-2 hover:bg-amber-500" href='/login'>Войти</Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-500" href='/registration'>Регистрация</Link>
                    </li>
                </ul>
            </header>
    )
}