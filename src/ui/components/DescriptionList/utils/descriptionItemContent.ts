import { descriptionKeyMaps } from "../../../../utils/descriptionKeyMaps";

const splitter = descriptionKeyMaps.myTagWithBreakPlaceholder.breakPlaceholder;

export function descriptionItemContent(
    description: string, 
    improvementIndex: { value: number },
    degradationIndex: { value: number },
) {
    return applySplitterToTags(description)
        .split(splitter)
        .map(it => mapDescriptionPart(it, improvementIndex, degradationIndex));
}

function applySplitterToTags(description: string) {
    return descriptionKeyMaps.myTagWithBreakPlaceholder.apply(description);
}

function mapDescriptionPart(
    descriptionPart: string, 
    improvementIndex: { value: number },
    degradationIndex: { value: number },
) {
    const containedTag = descriptionKeyMaps.myTags.findContained(descriptionPart);
    
    if (containedTag) {
        const cleanContent = descriptionPart
            .replace(containedTag, "")
            .replace(descriptionKeyMaps.myTags.tags.endTag, "");
        const className = containedTag.replaceAll(/[\{\}]/g, "");
        const isImprovement = containedTag === descriptionKeyMaps.myTags.tags.improvement;
        const isDegradation = containedTag === descriptionKeyMaps.myTags.tags.degradation;
        const currentImprovementIndex = improvementIndex.value;
        const currentDegradationIndex = degradationIndex.value;
        if (isImprovement) {
            improvementIndex.value++;
        }
        if (isDegradation) {
            degradationIndex.value++;
        }
        return {
            cleanContent,
            isImprovement,
            isDegradation,
            improvementIndex: currentImprovementIndex,
            degradationIndex: currentDegradationIndex,
            className,
        };
    }

    return {
        cleanContent: descriptionPart,
        className: undefined,
    };
}
