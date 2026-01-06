import { html } from "htm/preact";

import cls from "./ObjectIcon.module.css";

interface Props {
    type: "legendary" | "cursed";
    code: string;
}

export function ObjectIcon({
    type,
    code,
}: Props) {
    const objectSrc = `/icons/objects/new/${type}/${code}.png`;
    const frameSrc = `/icons/objects/new/${type}/frame.png`;

    return html`
        <div class=${cls.imgContainer}>
            <img class=${cls.object} src=${objectSrc} width=192 height=192 />
            <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
        </div>
    `;
}
