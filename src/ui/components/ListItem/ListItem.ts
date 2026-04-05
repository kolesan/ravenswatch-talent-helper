import { clsx } from "clsx";
import { html } from "htm/preact";
import { ComponentChildren } from "preact";

import { holder } from "ui/utils/holder";

import cls from "./ListItem.module.css";

const hld = holder();

interface Props {
    classes?: {
        root?: string;
        interactive?: string;
    };
    name: string;
    interactive?: boolean;
    tools: ComponentChildren;
    iconElement: ComponentChildren;
    descriptionElement: ComponentChildren;
    onClick?: () => void;
    onAltClick?: () => void;
    onHold?: () => void;
}

export function ListItem({
    classes,
    name,
    interactive,
    tools,
    iconElement,
    descriptionElement,
    onClick,
    onAltClick,
    onHold,
}: Props) {

    return html`
        <div 
            class=${clsx(cls.root, {
                [cls.interactive!]: interactive,
                [classes?.interactive || ""]: interactive,
            }, classes?.root)}
            onContextMenu=${(e: PointerEvent) => { 
                if (e.pointerType === "touch") {
                    e.preventDefault(); 
                }
            }}
            onPointerDown=${hld.onPointerDown({ 
                onHold 
            })}
            onPointerUp=${hld.onPointerUp({ 
                onClick: e => {
                    if (e.altKey) {
                        onAltClick?.();
                    } else {
                        onClick?.();
                    }
                }
            })}
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
