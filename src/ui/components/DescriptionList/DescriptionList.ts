import clsx from "clsx";
import { html } from "htm/preact";

import { Tooltip } from "../Tooltip/Tooltip";

import { descriptionItemContent } from "./utils/descriptionItemContent";

import cls from "./DescriptionList.module.css";

interface Props {
    description: string[];
    improvements?: string[][];
    degradations?: string[][];
}

export function DescriptionList({
    description,
    improvements,
    degradations,
}: Props) {
    const content = descriptionItemsToContent(description);
    // TODO rethink this structure
    return html`
        <div>
            ${description.map((_, i) => html`
                <div 
                    key=${i} 
                    class=${cls.descriptionListItem} 
                >
                    ${content[i].map(it => {
                        if (!it.className) {
                            return it.cleanContent;
                        }
                        if (it.className) {
                            const title = getTitle({ 
                                content: it, 
                                improvements, 
                                degradations 
                            });

                            if (!title) {
                                return html`
                                    <span class=${clsx(cls[it.className], cls.tooltip)} >
                                        ${it.cleanContent}
                                    </span>
                                `;
                            }

                            return html`
                                <${Tooltip} 
                                    className=${clsx(cls[it.className], cls.tooltip)} 
                                    element=span
                                    title=${title}
                                >
                                    ${it.cleanContent}
                                </${Tooltip}>
                            `;
                        }
                    })}
                </div>
            `)}
        </div>
    `;
}

// TODO extract to separate utils or components
type DescriptionItemContent = ReturnType<typeof descriptionItemsToContent>[number][number];
type GetTitleParams = {
    content: DescriptionItemContent,
    improvements?: string[][],
    degradations?: string[][],
}
function getTitle({
    content,
    improvements,
    degradations,
}: GetTitleParams) {
    if (content.isImprovement) {
        return improvementText(improvements, content.improvementIndex);
    }
    if (content.isDegradation) {
        return degradationText(degradations, content.degradationIndex);
    }
    return undefined;
}

function descriptionItemsToContent(
    description: string[]
) {
    // TODO fix this mutation design
    let improvementIndex = { value: 0 };
    let degradationIndex = { value: 0 };
    return description.map(it => {
        return descriptionItemContent(it, improvementIndex, degradationIndex);
    });
}
// TODO remove copy paste
function improvementText(improvements: string[][] | undefined, index: number) {
    const values = improvements?.map(it => it[index]);

    const hasNumericValues = values?.[0] && /[0-9]/g.test(values?.[0]);
    if (!hasNumericValues) {
        return undefined;
    }

    return values.join(" / ");
}

function degradationText(degradations: string[][] | undefined, index: number) {
    const values = degradations?.map(it => it[index]);

    const hasNumericValues = values?.[0] && /[0-9]/g.test(values?.[0]);
    if (!hasNumericValues) {
        return undefined;
    }

    return values.join(" / ");
}
