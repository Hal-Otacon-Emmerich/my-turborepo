"use client";

import Card from "@/components/Card";
import ContextMenu from "@/components/ContextMenu";
import usePieChart from "@/hooks/usePieChart";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Pie, PieChart as PieRechart, PieSectorDataItem, PieSectorShapeProps, ResponsiveContainer, Sector, Tooltip } from "recharts";
import ModalSettings from "../modal/ModalSettings";
import RenderActiveShape from "@/components/PieActiveShape";

export default function PieChart () {
    const {data, isLoading, error} = usePieChart();
    const [showModal, setShowModal] = useState(false);
    const [categoryData, setCategoryData] = useState({name: '', color: '', id: 0})
    const [menuVisible, setMenuVisible] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        const svg = e.currentTarget.closest('svg');
        const rect = svg?.getBoundingClientRect();

        setPosition({
            ...position,
            x: rect ? e.clientX - rect.left : e.clientX,
            y: rect ? e.clientY - rect.top : e.clientY
        });
        setMenuVisible(true);
    }

    const handleMouseDown = (e: any) => {
        setCategoryData({name: e.name, color: e.fill, id: e.id})
    }

    if(isLoading) return <Card>Loading...</Card>
    if(error) return <div>Ошибка</div>

    return (
            <>
                <ResponsiveContainer width="100%" aspect={1}>
                    <PieRechart>
                        <Pie
                            activeShape={(props: PieSectorDataItem) => <RenderActiveShape {...props} onContextMenu={handleContextMenu} />}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="60%"
                            outerRadius="80%"
                            dataKey="value"
                            stroke=""
                            onMouseDown={handleMouseDown}
                        />
                        <Tooltip />
                    </PieRechart>
                </ResponsiveContainer>

                <ContextMenu isMenuVisible={menuVisible} position={position} setMenuVisible={setMenuVisible}>
                    <ul>
                        <li className="rounded-md px-3 py-1 text-gray-800 dark:text-gray-50 pointer hover:bg-gray-100 hover:text-gray-800" onClick={() => setShowModal(true)}>Сменить цвет</li>
                        <li className="rounded-md px-3 py-1 text-gray-800 dark:text-gray-50 pointer hover:bg-gray-100 hover:text-gray-800" onClick={() => setShowModal(true)}>Сменить название</li>
                    </ul>
                </ContextMenu>
                {
                    showModal && createPortal(
                        <ModalSettings openModal={setShowModal} data={categoryData} />,
                        document.body

                    )
                }

            </>
    )
}