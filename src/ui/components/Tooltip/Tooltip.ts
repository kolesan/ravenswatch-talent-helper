import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./Tooltip.module.css";

type Props = {
    title?: string;
    lower?: boolean;
    children: ComponentChildren;
}

export function Tooltip({
    title,
    lower,
    children
}: Props) {
    return html`
        <div 
            class=${clsx({ 
                [cls.tooltip]: true,
                [cls.tooltipHidden]: !title,
                [cls.tooltipLower]: lower,
            })}
            data-tooltip=${title}
        >
            ${children}
        </div>
    `;
}
