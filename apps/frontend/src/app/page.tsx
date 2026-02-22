import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="fixed flex w-full justify-between text-gray-800 dark:text-gray-50 p-4">
                <div>Chad Dashboard</div>
                <nav>
                    <ul className="flex gap-8">
                        <li>
                            <a href="#about">
                                О проекте
                            </a>
                        </li>
                        <li>
                            <a href="#info">
                                Информация
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href='/login'>Войти</Link>
                    </li>
                    <li>
                        <Link href='/registration'>Регистрация</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}