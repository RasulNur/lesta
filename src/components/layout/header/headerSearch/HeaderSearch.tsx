"use client";

import Icon from "@/components/ui/Icon";
import { useRouter } from "@/i18n/routing";
import { FormEventHandler, useEffect, useRef, useState } from "react";

export default function HeaderSearch() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const { push } = useRouter();
    const params = new URLSearchParams("");
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        params.set("keyword", searchValue);

        push(`/search?${params.toString()}`, { scroll: false });
        setSearchValue("");
        setIsOpen(false);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (inputRef.current && isOpen) {
                inputRef.current.focus();
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                className="size-[var(--btn-height)] flex-center"
                onClick={(e) => {
                    e.stopPropagation();

                    setIsOpen((prev) => !prev);
                }}>
                <Icon name={isOpen ? "x" : "search"} className="text-white size-6" />
            </button>

            <div
                ref={ref}
                className={`fixed top-14 left-0 w-full bg-main-80 lg:py-10 py-5 border-t border-white-10 ${
                    isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
                } transition-300`}>
                <div className="container h-full items-center">
                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            type="search"
                            value={searchValue}
                            className="w-full border-b border-secondary focus:border-secondary2 transition-300 outline-none text-secondary placeholder-secondary text-[1.75rem] pb-2 px-2 pr-11"
                            placeholder="Поиск..."
                            onChange={(e) => setSearchValue(e.target.value)}
                            minLength={3}
                            maxLength={255}
                            autoFocus
                            ref={inputRef}
                        />
                        <button type="submit" className="absolute-center-y right-2 size-7 flex-center">
                            <Icon name="search" className="text-secondary size-6" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
