"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { IClearFiltersProps } from "@/types/props/ui.types";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ClearFilters({ isDisabled, setIsDisabled, closeModal }: IClearFiltersProps) {
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();

    useEffect(() => {
        const levels = params.get("level");
        const types = params.get("type");
        const nations = params.get("nation");

        if (!levels && !types && !nations) {
            setIsDisabled(false);
        }
    }, [params]);

    return (
        <button
            type="button"
            onClick={() => {
                const params = new URLSearchParams(searchParams);
                setIsDisabled(true);
                params.delete("level");
                params.delete("type");
                params.delete("nation");
                replace(`${pathname}?${params.toString()}`, { scroll: false });
                if (closeModal) closeModal();
            }}
            disabled={isDisabled}
            className="white-btn w-full">
            Сбросить фильтры
        </button>
    );
}
