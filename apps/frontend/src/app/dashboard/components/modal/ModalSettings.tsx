"use client";

import updateCategory from "@/actions/category";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { FormState } from "@/types/formState";
import { useActionState, useState } from "react";
import { HexColorPicker } from "react-colorful";

type DataProps = {
    id: number,
    name: string,
    color: string
}

type Props = {
    data: DataProps;
    openModal: (arg: boolean) => void;
}

export default function ModalSettings({data, openModal}: Props) {
    const [hexColor, setHexColor] = useState(data.color);
    const [state, action, pending] = useActionState(handleSubmit, undefined);

    function handleSubmit(state: FormState, formData: FormData) {
        return updateCategory(formData, hexColor, data.id)
    }

    return (
        <Modal onClose={() => openModal(false)}>
            <div
                onClick={(e) => e.stopPropagation()} 
                className="relative rounded-lg mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-900 items-center p-4 border border-gray-700 shadow-xl/30">
                <form action={action}>
                    <Input 
                        id="name"
                        name="name"
                        type="text"
                        label="Название категории"
                        placeholder="Введите название категории"
                        defaultValue={data.name}
                    />
                    <div className="my-4">
                        <span className="mb-4 block text-sm/6 font-medium text-gray-100">Выбирете цвет категории</span>
                        <HexColorPicker color={data.color} onChange={setHexColor}/>
                    </div>
                    <Button type="submit" disable={pending}>
                        Сохранить
                    </Button>
                    {
                        state && 
                            <span className={
                                `my-4 block w-full text-sm/6 font-medium text-center 
                                ${state.status === 'success' ? 'text-green-500' : 'text-red-500'}`
                            }>
                                {state?.message}
                            </span>
                    }
                </form>
            </div>
        </Modal>
    )
}