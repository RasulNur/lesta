"use client";

import { ISideMenuWrapperProps } from "@/types/props/ui.types";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function SideMenuWrapper({
    btn,
    content,
    isOpen,
    closeModal,
    className = "",
    position = "right",
}: ISideMenuWrapperProps) {
    return (
        <>
            {btn && btn}

            <Dialog
                open={isOpen}
                onClose={closeModal}
                className={`fixed inset-0 flex w-screen items-start z-[99] ${
                    position == "right" ? "justify-end" : "justify-start"
                }`}>
                <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />

                <DialogPanel
                    transition
                    className={`bg-main shadow-lg w-[400px] z-[1] h-full transition-300 ease-out ${
                        position == "right" ? "data-[closed]:translate-x-full" : "data-[closed]:-translate-x-full"
                    } pt-4 pb-6 px-4 flex flex-col justify-between overflow-y-auto ${className}`}>
                    {content}
                </DialogPanel>
            </Dialog>
        </>
    );
}
