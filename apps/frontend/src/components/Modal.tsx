type Props = {
    onClose: () => void;
    children: React.ReactElement;
}

export default function Modal({ onClose, children }: Props) {
    return (
        <div className="
                fixed
                inset-0 
                bg-gray-0
                bg-clip-padding
                items-center
                backdrop-filter
                backdrop-blur-3xl
                bg-opacity-0"
                onClick={onClose}
                >
            {children}
        </div>
    )
}