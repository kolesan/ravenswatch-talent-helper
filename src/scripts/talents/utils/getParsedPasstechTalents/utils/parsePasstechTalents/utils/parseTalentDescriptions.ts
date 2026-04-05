import { parsePasstechDescription } from "scripts/utils/parsePasstechDescription";
import { descriptionKeyMaps } from "utils/descriptionKeyMaps";

import { makeDescriptionTagParser } from "./makeDescriptionTagParser";

const { tags } = descriptionKeyMaps.myTags;

const parseImprovements = makeDescriptionTagParser(tags.improvement);
const parseDegradations = makeDescriptionTagParser(tags.degradation);

export function parseTalentDescriptions(descriptions: string[]) {
    const parsedDescriptions = descriptions.map(parsePasstechDescription);

    const improvements = parsedDescriptions.map(parseImprovements);
    const degradations = parsedDescriptions.map(parseDegradations);

    return {
        description: parsedDescriptions[0] || [],
        improvements,
        degradations,
    }
}
