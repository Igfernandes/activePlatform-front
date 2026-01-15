import i18n from "@configs/i18n";
import { useRef } from "react";

type Props = {
    is:  "ACTIVE" | "INACTIVE" | "PUBLISHED" | "DRAFT" | "ARCHIVED";
}

export function Status({ is }: Props) {
    const status = useRef({
        ACTIVE: "bg-success",
        INACTIVE: "bg-error",
        PUBLISHED: "bg-success",
        DRAFT: "bg-warning",
        ARCHIVED: "bg-danger",
        PAID: "bg-success",
        PENDING: "bg-warning",
        CANCELED: "bg-error",
    });

    return (
        <span className={`${status.current[is]} py-1 px-2 rounded-md text-white`}>
            {i18n(`Words.${is.toLowerCase()}`)}
        </span>
    )
}