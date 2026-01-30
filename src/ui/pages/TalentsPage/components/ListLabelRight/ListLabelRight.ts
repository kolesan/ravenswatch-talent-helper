import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./ListLabelRight.module.css";

type Props = {
    className?: string;
    used: number;
    preferred?: number;
}

export function ListLabelRight({
    className,
    used,
    preferred,
}: Props) {
    return html`
        <div class=${clsx(cls.listLabelRightRoot, className)}>
            <div>Used: ${used}</div>
            ${preferred && html`
                <div>Preferred: ${preferred}</div>
            `}
        </div>
    `;
}
