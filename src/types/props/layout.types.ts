import { Locale } from "../api.types";

export interface IRootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}
