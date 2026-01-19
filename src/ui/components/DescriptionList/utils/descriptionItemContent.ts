import { descriptionKeyMaps } from "../../../../utils/descriptionKeyMaps";

const splitter = descriptionKeyMaps.myTagWithBreakPlaceholder.breakPlaceholder;

export function descriptionItemContent(description: string) {
    return applySplitterToTags(description)
        .split(splitter)
        .map(mapDescriptionPart);
}

function applySplitterToTags(description: string) {
    return descriptionKeyMaps.myTagWithBreakPlaceholder.apply(description);
}

function mapDescriptionPart(descriptionPart: string) {
    const containedTag = descriptionKeyMaps.myTags.findContained(descriptionPart);
    
    if (containedTag) {
        const cleanContent = descriptionPart
            .replace(containedTag, "")
            .replace(descriptionKeyMaps.myTags.tags.endTag, "");
        const className = containedTag.replaceAll(/[\{\}]/g, "");
        return {
            cleanContent,
            className,
        };
    }

    return {
        cleanContent: descriptionPart,
        className: undefined,
    };
}
