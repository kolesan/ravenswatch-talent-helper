import { html } from "htm/preact";

import { Tooltip } from "../../../../../../components/Tooltip/Tooltip";

import cls from "./PreferredIcon.module.css";

export function PreferredIcon() {
    return html`
        <${Tooltip} title=Preferred>
            <img
                class=${cls.icon}
                src="/icons/feather.webp"
                height=94
                width=94
            />
        </${Tooltip}>
    `;
}
