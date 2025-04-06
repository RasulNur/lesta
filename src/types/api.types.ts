export type Locale = "ru" | "uz" | "en";

export type Method = "POST" | "PUT" | "DELETE";

export interface IShip {
    description: string;
    icons: { large: string; medium: string };
    level: number;
    nation: INation;
    title: string;
    type: IType;
}

export interface INation {
    color: string;
    name: string;
    title: string;
    icons: { large: string };
}
export interface IType {
    icons: { default: string };
    name: string;
    title: string;
}
