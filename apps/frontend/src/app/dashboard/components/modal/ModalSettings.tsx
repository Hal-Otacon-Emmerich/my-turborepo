"use client";

import { patchUpdateCategory } from "@/api/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
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
    const queryClinet = useQueryClient();
    const [hexColor, setHexColor] = useState(data.color);
    const [name, setName] = useState(data.name)
    const updateCategoryMutation = useMutation({
        mutationFn: async () => patchUpdateCategory(data.id, name, hexColor),
        onSettled: () => queryClinet.invalidateQueries({ queryKey: ['categories'] })
    })

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateCategoryMutation.mutate();
    }

    return (
        <Modal onClose={() => openModal(false)}>
            <div
                onClick={(e) => e.stopPropagation()} 
                className="relative rounded-lg mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-900 items-center p-4 border border-gray-700 shadow-xl/30">
                <form onSubmit={handleOnSubmit}>
                    <Input 
                        id="name"
                        name="name"
                        type="text"
                        label="Название категории"
                        placeholder="Введите название категории"
                        defaultValue={data.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="my-4">
                        <span className="mb-4 block text-sm/6 font-medium text-gray-100">Выбирете цвет категории</span>
                        <HexColorPicker color={data.color} onChange={setHexColor}/>
                    </div>
                    <Button type="submit" disable={updateCategoryMutation.isPending}>
                        Сохранить
                    </Button>
                    {
                        <span className={
                            `my-4 block w-full text-sm/6 font-medium text-center 
                            ${updateCategoryMutation.isSuccess ? 'text-green-500' : 'text-red-500'}`
                        }>
                            {updateCategoryMutation.status}
                        </span>
                    }
                </form>
            </div>
        </Modal>
    )
}