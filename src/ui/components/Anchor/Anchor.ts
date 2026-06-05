import clsx from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import cls from "./Anchor.module.css";

type Props = {
    className?: string;
    style?: string;
    href: string;
    onPointerUp: () => void;
    children: ComponentChildren;
}

export function Anchor({
    className,
    style,
    href,
    onPointerUp,
    children,
}: Props) {
    return html`
        <a 
            class=${clsx(cls.anchor, className)}
            style=${style}
            href=${href}
            onPointerUp=${(e: PointerEvent) => {
                e.stopPropagation();
                e.preventDefault();

                // This improves how the middle click to open
                // the view in another window is handled
                if (e.button !== 0) {
                    return;
                }

                onPointerUp();
            }}
            onClick=${(e: PointerEvent) => {
                e.preventDefault();
            }}
        >
            ${children}
        </a>
    `;
}
