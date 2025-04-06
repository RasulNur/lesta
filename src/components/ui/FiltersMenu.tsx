"use client";

import Icon from "@/components/ui/Icon";
import { useState } from "react";
import Filters from "./Filters";
import SideMenuWrapper from "./SideMenuWrapper";
import { IFiltersMenuProps } from "@/types/props/ui.types";

export default function FiltersMenu({ ships }: IFiltersMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <SideMenuWrapper
            closeModal={closeModal}
            isOpen={isOpen}
            position="left"
            btn={
                <button type="button" className={"white-btn"} onClick={openModal}>
                    Фильтры
                </button>
            }
            content={
                <div className="flex flex-col gap-4 justify-between">
                    <div className="flex items-center justify-end">
                        <button onClick={closeModal} className="hover:opacity-60">
                            <Icon name="x" className="text-primary size-6" />
                        </button>
                    </div>
                    <Filters ships={ships} />
                </div>
            }
            className="!w-[300px]"
        />
    );
}
