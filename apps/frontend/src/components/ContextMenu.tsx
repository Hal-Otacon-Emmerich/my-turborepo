import { useEffect } from "react";

type Position = {
    x: number;
    y: number;
}

type Props = {
    children: React.ReactElement;
    isMenuVisible: boolean;
    position: Position;
    setMenuVisible: (arg: boolean) => void
}

export default function ContextMenu({children, isMenuVisible, position, setMenuVisible}: Props) {

    if(!isMenuVisible) return null

    useEffect(() => {
        const handleClick = () => setMenuVisible(false);
        document.addEventListener("click", handleClick);
        return () => {
        document.removeEventListener("click", handleClick);
    };
  }, []);

    return (
        <div 
            className="
                p-3
                bg-gray-0
                rounded-xl
                bg-clip-padding
                items-center
                backdrop-filter
                backdrop-blur-3xl
                bg-opacity-0
                border
                border-gray-100
                shadow-xl/30
            "
            style={{
                maxWidth: '250px',
                position: 'absolute',
                top: position.y,
                left: position.x,
                zIndex: 1000
        }}>
            {children}
        </div>
    )
}