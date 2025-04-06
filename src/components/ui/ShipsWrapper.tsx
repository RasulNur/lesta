import ShipCard from "./ShipCard";
import Pagination from "./Pagination";
import { IShipsWrapperProps } from "@/types/props/ui.types";

export default function ShipsWrapper({ ships, serverSearchParams }: IShipsWrapperProps) {
    const { level, nation, type, page } = serverSearchParams;
    const currentPage = Number(page) ? Number(page) : 1;
    const itemsPerPage: number = 10;

    const levels = level ? level.split(",") : [];
    const nations = nation ? nation.split(",") : [];
    const types = type ? type.split(",") : [];

    const filteredShips = ships.filter((ship) => {
        const levelMatch = levels.length === 0 || levels.includes(String(ship.level));
        const nationMatch = nations.length === 0 || nations.includes(ship.nation.name);
        const typeMatch = types.length === 0 || types.includes(ship.type.name);

        return levelMatch && nationMatch && typeMatch;
    });

    const currentShips = filteredShips.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="flex flex-col gap-[3.75rem]">
            <div className="flex flex-col gap-10">
                {currentShips.length > 0 ? (
                    currentShips.map((ship, id) => {
                        return <ShipCard key={id} ship={ship} />;
                    })
                ) : (
                    <div className="flex-center py-10">
                        <p className="text-lg">Ничего не найдено</p>
                    </div>
                )}
            </div>

            <Pagination ships={filteredShips} currentPage={currentPage} itemsPerPage={itemsPerPage} />
        </div>
    );
}
