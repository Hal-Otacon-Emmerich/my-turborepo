import ContactLinks from './ContactLinks';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-50 p-10">
            <div >
                <h6 className='font-bold text-2xl'>FinBoard</h6>
                <span>Контролируйте свои финансы. Принимайте решения уверенно.</span>
            </div>
            <div className='my-8'>
                <span>Контакты:</span>
                <div className='ml-4'>
                    <ContactLinks />
                </div>
            </div>
            <div className='text-gray-500 text-sm '>
                Проект сделан в качестве портфолио 2026©
            </div>
        </footer>
    )
}