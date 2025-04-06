import { ImageProps } from "next/image";
import { SVGProps } from "react";
import { IFilterSearchParams, ParamsName, SetState } from "../types";
import { IShip } from "../api.types";

export interface IIconProps extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
    name: SpritesName;
    className?: string;
}

export type SpritesName = "chevron" | "chevron-double" | "search" | "x";

export interface INextImageProps extends ImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export interface IFiltersProps {
    ships: IShip[];
}

export interface IFiltersMenuProps {
    ships: IShip[];
}
export interface IFilterCheckboxProps {
    value: string;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
    paramsName: ParamsName;
    label: string;
}
export interface IFilterProps {
    data: { name: string; title: string }[];
    paramsName: ParamsName;
    title: string;
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
}
export interface ICheckboxProps {
    label: string;
    isChecked: boolean;
    handleChecked: () => void;
    isDisabled?: boolean;
}
export interface IClearFiltersProps {
    isDisabled: boolean;
    setIsDisabled: SetState<boolean>;
    closeModal?: () => void;
}
export interface ISideMenuWrapperProps {
    btn: React.ReactNode;
    content: React.ReactNode;
    isOpen: boolean;
    closeModal: () => void;
    className?: string;
    position?: "right" | "left";
}
export interface IPaginationProps {
    ships: IShip[];
    currentPage: number;
    itemsPerPage: number;
}
export interface IShipCardProps {
    ship: IShip;
}
export interface IShipInfoCardProps {
    title: string;
    info: string;
}
export interface IShipsWrapperProps {
    ships: IShip[];
    serverSearchParams: IFilterSearchParams;
}
