type Props = {
    id: string;
    name: string;
    type: string;
    label: string;
    value?: string | undefined;
    required?: boolean;
    placeholder?: string;
    defaultValue?: string;
    autoComplete?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({id, name, type, required = false, autoComplete = "", label, placeholder = "", value = undefined, defaultValue="", onChange}: Props) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-100">{label}</label>
            <div className="mt-2">
                <input
                    id={id}
                    type={type}
                    name={name}
                    required={required}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
            </div>
        </div>
    )
}