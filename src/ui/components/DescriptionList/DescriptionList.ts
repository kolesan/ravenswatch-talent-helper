import { html } from "htm/preact";

import cls from "./DescriptionList.module.css";

interface Props {
    description: string[];
}

export function DescriptionList({
    description 
}: Props) {
    return html`
        <div>
            ${description.map((it, i) => html`
                <div key=${i} class=${cls.descriptionListItem}>
                    ${it}
                </div>
            `)}
        </div>
    `;
}
