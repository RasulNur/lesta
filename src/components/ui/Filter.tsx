import FilterCheckbox from "./FilterCheckbox";
import { IFilterProps } from "@/types/props/ui.types";
import Icon from "./Icon";
import { useState } from "react";

export default function Filter({ data, paramsName, title, isDisabled, setIsDisabled }: IFilterProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <div className="flex flex-col">
            <button
                className={`group flex justify-between items-center w-full text-start ${isOpen ? "mb-4" : ""}`}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}>
                <span className="font-medium group-hover:text-secondary2 leading-150">{title}</span>
                <Icon
                    name="chevron"
                    className={`text-primary group-hover:text-secondary2 !size-5 ${
                        isOpen ? "-rotate-90" : "rotate-90"
                    }`}
                />
            </button>

            <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-2`}>
                {data.map((el, id) => (
                    <FilterCheckbox
                        key={id}
                        isDisabled={isDisabled}
                        paramsName={paramsName}
                        setIsDisabled={setIsDisabled}
                        value={el.name}
                        label={el.title}
                    />
                ))}
            </div>
        </div>
    );
}
