"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
    return (
        <AppProgressBar height="0.25rem" color="var(--color-main)" options={{ showSpinner: false }} shallowRouting />
    );
}
