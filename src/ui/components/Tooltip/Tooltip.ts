import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./Tooltip.module.css";

type Props = {
    className?: string;
    element?: string;
    title?: string | boolean;
    lower?: boolean;
    children: ComponentChildren;
}

export function Tooltip({
    className,
    element = "div",
    title,
    lower,
    children
}: Props) {
    return html`
        <${element} 
            class=${clsx({ 
                [cls.tooltip]: true,
                [cls.tooltipHidden]: !title,
                [cls.tooltipLower]: lower,
                [className]: !!className,
            })}
            data-tooltip=${title || undefined}
        >
            ${children}
        </${element} >
    `;
}
