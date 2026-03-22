import { html } from "htm/preact";

import { MagicalObjectType } from "../../../types";

import cls from "./ObjectIcon.module.css";

interface Props {
    type: MagicalObjectType;
    code: string;
}

export function ObjectIcon({
    type,
    code,
}: Props) {
    const objectSrc = `/icons/objects/${type}/${code}.webp`;
    const frameSrc = `/icons/objects/${type}/frame.webp`;

    return html`
        <div class=${cls.imgContainer}>
            <img class=${cls.object} src=${objectSrc} width=192 height=192 />
            <img class=${cls.frame} src=${frameSrc} width=256 height=256 />
        </div>
    `;
}
