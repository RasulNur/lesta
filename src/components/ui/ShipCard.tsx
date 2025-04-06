import NextImage from "./NextImage";
import ShipInfoCard from "./ShipInfoCard";
import { IShipCardProps } from "@/types/props/ui.types";

export default function ShipCard({ ship }: IShipCardProps) {
    return (
        <div className="@container flex flex-col gap-6 group">
            <div className="flex sm:flex-row flex-col gap-x-6 gap-y-3">
                <div className="relative xl:min-w-[25rem] md:min-w-[20rem] sm:min-w-[15rem] xl:w-[25rem] md:w-[20rem] sm:w-[15rem] w-full xl:h-[15.625rem] md:h-[12.5rem] sm:h-[8.75rem] min-[560px]:h-[20rem] min-[460px]:h-[18rem] min-[360px]:h-[15rem] h-[12rem] flex-center ">
                    {ship.icons.large && ship.icons.large.length > 0 && (
                        <NextImage
                            src={ship.icons.large}
                            alt=""
                            height={250}
                            width={400}
                            className="absolute-center size-full z-[2] object-contain sm:object-center object-left"
                        />
                    )}

                    {ship.nation.icons.large && ship.nation.icons.large.length > 0 && (
                        <NextImage
                            src={ship.nation.icons.large}
                            alt=""
                            height={250}
                            width={400}
                            className="absolute-center lg:opacity-0 opacity-30 group-hover:opacity-30 transition-300 size-full z-[1] object-contain sm:object-center object-left"
                        />
                    )}

                    {ship.type.icons.default && ship.type.icons.default.length > 0 && (
                        <NextImage
                            src={ship.type.icons.default}
                            alt=""
                            height={80}
                            width={80}
                            className="absolute right-0 top-0 md:size-20 size-14"
                        />
                    )}
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <ShipInfoCard info={String(ship.title)} title="Название" />
                        <ShipInfoCard info={String(ship.level)} title="Уровень" />
                        <ShipInfoCard info={String(ship.nation.title)} title="Нация" />
                        <ShipInfoCard info={String(ship.type.title)} title="Тип" />
                    </div>
                    <p>{ship.description}</p>
                </div>
            </div>
        </div>
    );
}
