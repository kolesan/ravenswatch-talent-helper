import { clsx } from "clsx";
import { html } from "htm/preact";

import { Tooltip } from "../../../../components/Tooltip/Tooltip";

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
            <${Tooltip} 
                title=${`Used talents ${used}`}
                left
            >
                U${used}
            </${Tooltip}>
            ${preferred && html`
                <${Tooltip} 
                    title=${`Preferred talents ${preferred}`}
                    left
                >
                    P${preferred}
                </${Tooltip}>
            `}
        </div>
    `;
}
