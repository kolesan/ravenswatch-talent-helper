import { html } from "htm/preact";

import { HeroCode } from "../../../../../../../uiData/heroes/types";

type Props = {
    heroCode: HeroCode;
}

/**
 * This component triggers the download of current hero art asap,
 * in order to reduce the time when the user can see flicker 
 * if he hovers over hero select quickly 
 * (when it's the first page load and none of the art is in memory yet)
 */
export function HeroArtPreloader({
    heroCode,
}: Props) {
    return html`
        <img
            style=${`
                visibility: hidden;
                pointer-events: none;
                overflow: hidden;
            `}
            src=${`/art/${heroCode}.webp`}
            height=0
            width=0
            decoding="async"
            fetchpriority="low"
        />
    `;
}
