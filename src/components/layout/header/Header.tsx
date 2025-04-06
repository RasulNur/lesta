import { Link } from "@/i18n/routing";
import NextImage from "../../ui/NextImage";
import HeaderSearch from "./headerSearch/HeaderSearch";

export default function Header() {
    return (
        <header className="bg-main-80 sticky top-0 h-14 border-b border-white-10 z-[90]">
            <div className="container flex items-center justify-between h-full">
                <Link href={"/"}>
                    <NextImage src="/images/logo.svg" height={36} width={143} alt={"Мир кораблей"} />
                </Link>

                <HeaderSearch />
            </div>
        </header>
    );
}
