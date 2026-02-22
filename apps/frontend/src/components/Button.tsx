type Props = {
    onClick?: () => void;
    type?: "submit" | "button" | "reset";
    children: React.ReactNode;
    disable?: boolean,
    className?: string,
}

export default function Button({ type="button", onClick, children, disable, className="bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500"}: Props) {
    return (
        <button 
            className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white focus-visible:outline-2 dark: text-dark ${className}`}
            type="submit"
            disabled={disable}
            onClick={onClick}
        >
            {children}
        </button>
    )
}