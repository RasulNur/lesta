import { fetchShips } from "@/api/fetch";
import Filters from "@/components/ui/Filters";
import FiltersMenu from "@/components/ui/FiltersMenu";
import ShipsWrapper from "@/components/ui/ShipsWrapper";
import { IHomePageParams } from "@/types/types";
import { Metadata } from "next";

export default async function HomePage({ searchParams }: IHomePageParams) {
    const ships = await fetchShips();
    const resolvedSearchParams = await searchParams;

    return (
        <>
            <section className="pt-6 pb-20">
                <div className="container">
                    <div className="lg:grid flex flex-col xl:grid-cols-[15rem_1fr] grid-cols-[12.5rem_1fr] gap-5">
                        <div className="lg:block hidden">
                            <Filters ships={ships} />
                        </div>
                        <div className="lg:hidden flex justify-end">
                            <FiltersMenu ships={ships} />
                        </div>

                        <ShipsWrapper ships={ships} serverSearchParams={resolvedSearchParams} />
                    </div>
                </div>
            </section>
        </>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Главная",
        description: "Главная",
        keywords: "Главная",
    };
}
