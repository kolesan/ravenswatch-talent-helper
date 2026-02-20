import { clsx } from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { noop } from "../../utils/noop";
import { holder } from "../../utils/onHold";

import cls from "./ListItem.module.css";

interface Props {
    className?: string;
    name: string;
    tools: ComponentChildren;
    iconElement: ComponentChildren;
    descriptionElement: ComponentChildren;
    onClick?: () => void;
    onAltClick?: () => void;
    onHold?: () => void;
}

export function ListItem({
    className,
    name,
    tools,
    iconElement,
    descriptionElement,
    onClick,
    onAltClick,
    onHold,
}: Props) {
    const hld = holder({ 
        onHold: onHold || noop,
    });

    return html`
        <div 
            class=${clsx(cls.root, className)}
            onClick=${(e: any) => {
                if (hld.getHolding()) {
                    return;
                }

                if (e.altKey) {
                    onAltClick?.();
                } else {
                    onClick?.();
                }
            }}
            onPointerDown=${hld.onPointerDown}
            onPointerUp=${hld.onPointerUp}
            onPointerCancel=${hld.onPointerUp}
            onPointerMove=${hld.onPointerMove}
        >
            <div class=${cls.iconContainer}>
                ${iconElement}
            </div>
            <div class=${cls.textContainer}>
                <div class=${cls.header}>
                    <div class=${cls.name}>${name}</div>
                    ${tools}
                </div>
                ${descriptionElement}
            </div>
        </li>
    `;
}
