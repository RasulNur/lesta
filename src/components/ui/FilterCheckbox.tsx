import { usePathname, useRouter } from "@/i18n/routing";
import { IFilterCheckboxProps } from "@/types/props/ui.types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

export default function FilterCheckbox({ value, isDisabled, setIsDisabled, paramsName, label }: IFilterCheckboxProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);
    const brandsParams = params.get(paramsName);

    const handleChecked = () => {
        setIsDisabled(true);
        if (brandsParams) {
            const brandsIds = brandsParams.split(",");

            if (brandsIds.includes(value)) {
                const filteredBrandsIds = brandsIds.filter((el) => el !== value);
                if (filteredBrandsIds.length == 0) params.delete(paramsName);
                else params.set(paramsName, filteredBrandsIds.join(","));
            } else {
                brandsIds.push(value);
                params.set(paramsName, brandsIds.join(","));
            }
        } else params.set(paramsName, value);
        params.set("page", `1`);
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        if (brandsParams) {
            const brandsIds = brandsParams.split(",");
            if (brandsIds.includes(value)) {
                setIsChecked(true);
            } else {
                setIsChecked(false);
            }
        } else setIsChecked(false);
        setIsDisabled(false);
    }, [brandsParams]);

    useEffect(() => {
        if (brandsParams) if (brandsParams.includes(value)) setIsChecked(true);
    }, []);

    return <Checkbox handleChecked={handleChecked} isChecked={isChecked} label={label} isDisabled={isDisabled} />;
}
