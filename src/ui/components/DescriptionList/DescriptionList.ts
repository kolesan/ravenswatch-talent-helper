import { html } from "htm/preact";

import cls from "./DescriptionList.module.css";
import { descriptionItemContent } from "./utils/descriptionItemContent";

interface Props {
    description: string[];
    improvements: string[][];
}

export function DescriptionList({
    description,
    improvements,
}: Props) {
    return html`
        <div>
            ${description.map((descriptionItem, i) => html`
                <div 
                    key=${i} 
                    class=${cls.descriptionListItem} 
                >
                    ${descriptionItemContent(descriptionItem)
                        .map(it => it.className 
                            ? html`
                                <span class=${cls[it.className]}>
                                    ${it.cleanContent}
                                </span>
                            ` : it.cleanContent
                        )}
                </div>
            `)}
        </div>
    `;
}
