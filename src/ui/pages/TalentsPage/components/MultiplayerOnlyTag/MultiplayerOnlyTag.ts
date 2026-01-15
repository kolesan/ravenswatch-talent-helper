import { clsx } from "clsx";
import { html } from "htm/preact";

import cls from "./MultiplayerOnlyTag.module.css";

type Props = {
    className?: string;
}

export function MultiplayerOnlyTag({
    className,
}: Props) {
    return html`
        <div 
            class=${clsx(cls.root, cls.tooltip, className)} 
            data-tooltip="Multiplayer only"
        >
            MPO
        </div>
    `;
}
