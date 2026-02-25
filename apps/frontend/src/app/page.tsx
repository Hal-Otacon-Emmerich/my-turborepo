import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import './main.scss';
import ContactLinks from "@/components/ContactLinks";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section className="h-screen main-section relative">
                    <div className="absolute top-[30%] left-[15%]">
                        <h1 className="text-gray-50 text-3xl">Контролируйте свои финансы. Принимайте решения уверенно.</h1>
                        <span className="text-gray-50 text-lg">Все счета, расходы, инвестиции и цели — в одном месте.</span>
                        <div className="mt-8 font-semibold">
                            <Link href='/login' className="rounded-full bg-orange-300 py-2 px-4 hover:bg-amber-500">Попробовать бесплатно</Link>
                        </div>
                    </div>
                </section>
                <section id="contact" className="text-center text-gray-50 p-4">
                    <h3 className="text-3xl">Связь с нами:</h3>
                    <ContactLinks />
                </section>
            </main>
            <Footer />
        </>
    )
}