import { parsePasstechDescription } from "scripts/utils/parsePasstechDescription";
import { descriptionKeyMaps } from "utils/descriptionKeyMaps";

import { parseTalentDescriptionTags } from "./parseTalentDescriptionTags";

const { tags } = descriptionKeyMaps.myTags;

const parseImprovements = parseTalentDescriptionTags(tags.improvement);
const parseDegradations = parseTalentDescriptionTags(tags.degradation);

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
