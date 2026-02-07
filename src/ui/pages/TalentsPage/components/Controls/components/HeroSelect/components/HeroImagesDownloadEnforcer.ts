import { html } from "htm/preact";

import { heroCodes } from "../../../../../../../../data/heroes";

const style = (name: string) => `background-image: url("/art/newResampled/${name}.webp");`

export function HeroImagesDownloadEnforcer() {
    return html`
        <div style="visibility: hidden; height: 0; width: 0;">
            ${heroCodes.map(it => html`
                <div style=${style(it)}>
                </div>
            `)}
            ${heroCodes.map(it => html`
                <img src=${`/icons/heroes/optimized/${it}.webp`} height=0 />
            `)}
        </div>
    `;
}
