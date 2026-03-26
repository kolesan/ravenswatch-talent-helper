import { html } from "htm/preact";

import { MagicalObject } from "../../uiData/objects/types";

import cls from "./ObjectIcon.module.css";

interface Props {
    object: MagicalObject;
}

export function ObjectIcon({
    object,
}: Props) {
    const objectSrc = `/icons/objects/${object.type}/${object.code}.webp`;
    const frameSrc = `/icons/objects/${object.type}/frame.webp`;

    return html`
        <div class=${cls.imgContainer}>
            <img class=${cls.object} src=${objectSrc} width=192 height=192 />
            <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
        </div>
    `;
}
