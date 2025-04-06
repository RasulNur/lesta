"use client";

import Icon from "./Icon";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { IPaginationProps } from "@/types/props/ui.types";

export default function Pagination({ ships, currentPage, itemsPerPage }: IPaginationProps) {
    const totalPages = Math.ceil(ships.length / itemsPerPage);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClick = ({ page }: { page: number }) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page));
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <>
            {totalPages > 1 && (
                <div className="flex justify-center gap-3 items-center">
                    <button
                        onClick={() => handleClick({ page: 1 })}
                        disabled={currentPage === 1}
                        className="px-2 py-2 bg-gray-300 text-gray-700 rounded">
                        <Icon name="chevron-double" className="text-main rotate-180" />
                    </button>
                    <button
                        onClick={() => currentPage > 1 && handleClick({ page: currentPage - 1 })}
                        disabled={currentPage === 1}
                        className="px-2 py-2 bg-gray-300 text-gray-700 rounded">
                        <Icon name="chevron" className="text-main rotate-180" />
                    </button>

                    <span>
                        Страница {currentPage} из {totalPages}
                    </span>
                    <button
                        onClick={() => currentPage < totalPages && handleClick({ page: currentPage + 1 })}
                        disabled={currentPage === totalPages}
                        className="px-2 py-2 bg-gray-300 text-gray-700 rounded">
                        <Icon name="chevron" className="text-main" />
                    </button>
                    <button
                        onClick={() => handleClick({ page: totalPages })}
                        disabled={currentPage === totalPages}
                        className="px-2 py-2 bg-gray-300 text-gray-700 rounded">
                        <Icon name="chevron-double" className="text-main" />
                    </button>
                </div>
            )}
        </>
    );
}
