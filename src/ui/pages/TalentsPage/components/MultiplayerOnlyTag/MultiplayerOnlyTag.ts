import { clsx } from "clsx";
import { html } from "htm/preact";

import { Tooltip } from "../../../../components/Tooltip/Tooltip";

import cls from "./MultiplayerOnlyTag.module.css";

type Props = {
    className?: string;
    lowerTooltip?: boolean;
}

export function MultiplayerOnlyTag({
    className,
    lowerTooltip,
}: Props) {
    return html`
        <${Tooltip} 
            title="Multiplayer only"
            lower=${lowerTooltip}
        >
            <div class=${clsx(cls.root, className)}>
                MPO
            </div>
        </${Tooltip}>
    `;
}
