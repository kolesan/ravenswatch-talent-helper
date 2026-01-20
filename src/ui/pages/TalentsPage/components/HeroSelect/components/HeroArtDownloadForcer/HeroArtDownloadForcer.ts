import { html } from "htm/preact";

import { heroCodes } from "../../../../../../../data/heroes";

const style = (name) => `background-image: url("/art/newResampled/${name}.webp");`

export function HeroArtDownloadForcer() {
    return html`
        <div style="visibility: hidden">
            ${heroCodes.map(it => html`
                <div style=${style(it)}>
                </div>
            `)}
        </div>
    `;
}
