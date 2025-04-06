"use client";

import Filter from "./Filter";
import { useState } from "react";
import ClearFilters from "./ClearFilters";
import { IFiltersProps } from "@/types/props/ui.types";

export default function Filters({ ships }: IFiltersProps) {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const allLevels = ships.map((el) => ({ name: String(el.level), title: `${el.level} уровень` }));
    const uniqueLevels = allLevels
        .filter((item, index, arr) => index === arr.findIndex((t) => t.name === item.name))
        .sort((a, b) => Number(a.name) - Number(b.name));

    const allNations = ships.map((el) => ({ name: el.nation.name, title: el.nation.title }));
    const uniqueNations = allNations
        .filter((item, index, arr) => index === arr.findIndex((t) => t.name === item.name))
        .sort((a, b) => a.title.localeCompare(b.title, "ru"));

    const allTypes = ships.map((el) => ({ name: el.type.name, title: el.type.title }));
    const uniqueTypes = allTypes
        .filter((item, index, arr) => index === arr.findIndex((t) => t.name === item.name))
        .sort((a, b) => a.title.localeCompare(b.title, "ru"));

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <Filter
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                    title="Уровни"
                    paramsName="level"
                    data={uniqueLevels}
                />
                <Filter
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                    title="Нации"
                    paramsName="nation"
                    data={uniqueNations}
                />
                <Filter
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                    title="Типы"
                    paramsName="type"
                    data={uniqueTypes}
                />
            </div>

            <ClearFilters isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
        </div>
    );
}
