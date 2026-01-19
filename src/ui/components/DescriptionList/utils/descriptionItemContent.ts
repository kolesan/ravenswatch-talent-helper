import { descriptionKeyMaps } from "../../../../utils/descriptionKeyMaps";

const splitter = descriptionKeyMaps.myTagWithBreakPlaceholder.breakPlaceholder;

export function descriptionItemContent(description: string) {
    // TODO fix this
    let improvementIndex = 0;
    return applySplitterToTags(description)
        .split(splitter)
        .map(it => mapDescriptionPart(it, improvementIndex));
}

function applySplitterToTags(description: string) {
    return descriptionKeyMaps.myTagWithBreakPlaceholder.apply(description);
}

function mapDescriptionPart(descriptionPart: string, improvementIndex: number) {
    const containedTag = descriptionKeyMaps.myTags.findContained(descriptionPart);
    
    if (containedTag) {
        const cleanContent = descriptionPart
            .replace(containedTag, "")
            .replace(descriptionKeyMaps.myTags.tags.endTag, "");
        const className = containedTag.replaceAll(/[\{\}]/g, "");
        const isImprovement = containedTag === descriptionKeyMaps.myTags.tags.improvement;
        const currentIndex = improvementIndex;
        if (isImprovement) {
            improvementIndex++;
        }
        return {
            cleanContent,
            isImprovement,
            improvementIndex: currentIndex,
            className,
        };
    }

    return {
        cleanContent: descriptionPart,
        className: undefined,
    };
}
