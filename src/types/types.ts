import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type ParamsName = "type" | "nation" | "level";

export interface IFilterSearchParams {
    level?: string;
    type?: string;
    nation?: string;
    page?: string;
}

export interface ISearchPageSearchParams extends IFilterSearchParams {
    keyword?: string;
}

export interface IHomePageParams {
    searchParams: Promise<IFilterSearchParams>;
}
export interface ISearchPageParams {
    searchParams: Promise<ISearchPageSearchParams>;
}
