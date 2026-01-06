import { html } from "htm/preact";

import cls from "./ItemIcon.module.css";

interface Props {
    type: "legendary" | "cursed";
    code: string;
}

export function ItemIcon({
    type,
    code,
}: Props) {
    const itemSrc = `/icons/items/new/${type}/${code}.png`;
    const frameSrc = `/icons/items/new/${type}/frame.png`;

    return html`
        <div class=${cls.imgContainer}>
            <img class=${cls.item} src=${itemSrc} width=192 height=192 />
            <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
        </div>
    `;
}
