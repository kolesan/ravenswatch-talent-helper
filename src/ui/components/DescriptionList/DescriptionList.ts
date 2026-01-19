import clsx from "clsx";
import { html } from "htm/preact";

import { Tooltip } from "../Tooltip/Tooltip";

import { descriptionItemContent } from "./utils/descriptionItemContent";

import cls from "./DescriptionList.module.css";

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
                                <${Tooltip} 
                                    className=${clsx(cls[it.className], cls.tooltip)} 
                                    element=span
                                    title=${it.isImprovement && 
                                        improvementText(improvements, it.improvementIndex)
                                    }
                                >
                                    ${it.cleanContent}
                                </${Tooltip}>
                            ` : it.cleanContent
                        )}
                </div>
            `)}
        </div>
    `;
}

function improvementText(improvements: string[][], index: number) {
    return improvements.map(it => it[index]).join(" / ");
}
