import { clsx } from "clsx";
import { html } from "htm/preact";

import { Tooltip } from "../../../../components/Tooltip/Tooltip";

import cls from "./MultiplayerOnlyTag.module.css";

type Props = {
    className?: string;
}

export function MultiplayerOnlyTag({
    className,
}: Props) {
    return html`
        <${Tooltip} title="Multiplayer only">
            <div class=${clsx(cls.root, className)}>
                MPO
            </div>
        </${Tooltip}>
    `;
}
