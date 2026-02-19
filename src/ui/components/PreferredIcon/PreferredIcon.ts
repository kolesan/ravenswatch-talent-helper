import { html } from "htm/preact";

import { Tooltip } from "../Tooltip/Tooltip";

import cls from "./PreferredIcon.module.css";

type Props = {
    lowerTooltip?: boolean;
}

export function PreferredIcon({
    lowerTooltip,
}: Props) {
    return html`
        <${Tooltip} 
            title=Preferred
            lower=${lowerTooltip}
        >
            <img
                class=${cls.icon}
                src="/icons/feather.webp"
                height=94
                width=94
            />
        </${Tooltip}>
    `;
}
