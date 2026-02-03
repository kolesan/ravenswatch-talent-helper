import { clsx } from "clsx";
import { html } from "htm/preact";

import { maxUsedTalents } from "../../pages/TalentsPage/consts/maxUsedTalents";

import cls from "./ListLabelRight.module.css";

type Props = {
    className?: string;
    visible?: boolean;
    used: number;
    preferred?: number;
}

export function ListLabelRight({
    className,
    visible,
    used,
    preferred,
}: Props) {
    return html`
        <div 
            class=${clsx(cls.listLabelRightRoot, {
                [cls.visible]: visible,
            }, className)}
        >
            <div>Used: ${used} / ${maxUsedTalents}</div>
            ${(preferred || preferred === 0) && html`
                <div>Preferred: ${preferred}</div>
            `}
        </div>
    `;
}
