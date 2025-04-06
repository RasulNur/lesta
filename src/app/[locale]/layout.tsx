import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { notFound } from "next/navigation";
import ProgressBar from "@/components/ui/ProgressBar";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ScrollUp from "@/components/layout/ScrollUp";
import { IRootLayoutProps } from "@/types/props/layout.types";

const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    preload: true,
    display: "swap",
});

export default async function RootLayout({ children, params }: Readonly<IRootLayoutProps>) {
    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }
    const messages = await getMessages();

    return (
        <html className={`${roboto.className}`} lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <div className="min-h-screen h-full flex flex-col justify-between">
                        <Header />

                        <main className="grow h-full transition-all duration-500">{children}</main>

                        <Footer />

                        <ScrollUp />
                    </div>
                </NextIntlClientProvider>
                <ProgressBar />
            </body>
        </html>
    );
}
