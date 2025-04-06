import { fetchShips } from "@/api/fetch";
import Filters from "@/components/ui/Filters";
import FiltersMenu from "@/components/ui/FiltersMenu";
import ShipsWrapper from "@/components/ui/ShipsWrapper";
import { ISearchPageParams } from "@/types/types";
import { Metadata } from "next";

export default async function SearchPage({ searchParams }: ISearchPageParams) {
    const ships = await fetchShips();
    const resolvedSearchParams = await searchParams;
    const newShips = ships.filter((ship) => {
        if (resolvedSearchParams.keyword) {
            return ship.title.toLowerCase().includes(resolvedSearchParams.keyword?.toLowerCase());
        } else return true;
    });

    return (
        <>
            <section className="pt-6 pb-20">
                <div className="container">
                    <div className="lg:grid flex flex-col xl:grid-cols-[15rem_1fr] grid-cols-[12.5rem_1fr] gap-5">
                        <div className="lg:block hidden">
                            <Filters ships={newShips} />
                        </div>
                        <div className="lg:hidden flex justify-end">
                            <FiltersMenu ships={newShips} />
                        </div>

                        <ShipsWrapper ships={newShips} serverSearchParams={resolvedSearchParams} />
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
