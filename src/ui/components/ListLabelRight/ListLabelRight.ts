import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./ListLabelRight.module.css";

type Props = {
    className?: string;
    visible?: boolean;
    used: number;
    preferred?: number;
    maxUsed?: number;
}

export function ListLabelRight({
    className,
    visible,
    used,
    preferred,
    maxUsed,
}: Props) {
    const renderedMaxUsed = maxUsed
        ? html` / ${maxUsed}`
        : html``;

    return html`
        <div 
            class=${clsx(cls.listLabelRightRoot, {
                [cls.visible]: visible,
            }, className)}
        >
            <div>Used: ${used}${renderedMaxUsed}</div>
            ${(preferred || preferred === 0) && html`
                <div>Preferred: ${preferred}</div>
            `}
        </div>
    `;
}
