import { IShipInfoCardProps } from "@/types/props/ui.types";

export default function ShipInfoCard({ title, info }: IShipInfoCardProps) {
    return (
        <div className="flex items-center gap-1">
            <h4 className="font-medium">{title}:</h4>
            <p>{info}</p>
        </div>
    );
}
