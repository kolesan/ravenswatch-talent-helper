import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./Tooltip.module.css";

type Props = {
    title?: string;
    children: ComponentChildren;
}

export function Tooltip({
    title,
    children
}: Props) {
    return html`
        <div 
            class=${clsx({ 
                [cls.tooltip]: true,
                [cls.tooltipHidden]: !title
            })}
            data-tooltip=${title}
        >
            ${children}
        </div>
    `;
}
