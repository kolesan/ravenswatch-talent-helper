import { html } from "htm/preact";

import "./DescriptionList.css";

interface Props {
    description: string[];
}

export function DescriptionList({
    description 
}: Props) {
    return description.map((it, i) => html`
        <div key=${i} class=description-list-item>
            ${it}
        </div>
    `);
}
