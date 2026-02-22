import { Children } from "react";

type Props = {
    children: React.ReactNode
    className?: string
}

export default function Card ({ children, className }: Props) {
    return <div className={`p-4 h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 border border-gray-700 ${className}`}>
        {children}
        </div>
}