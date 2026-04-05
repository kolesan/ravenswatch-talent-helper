import { TalentType } from "data/heroes/talents/types";
import { PasstechTalent } from "data/passtechResponses/types";
import { ParsedPasstechTalent } from "scripts/talents/types";
import { descriptionKeyMaps } from "utils/descriptionKeyMaps";

export function parsePasstechTalents(
    passtechTalents: PasstechTalent[]
): ParsedPasstechTalent[] {
    return passtechTalents.map(parseTalent);
}

function parseTalent(talent: PasstechTalent): ParsedPasstechTalent {
    const {
        description,
        improvements,
        degradations,
    } = parseDescriptions(talent.descriptions);
    return {
        code: nameToCode(talent.name),
        name: talent.name.trim(),
        iconUrl: talent.icon,
        type: parseType(talent.tier),
        description,
        improvements,
        degradations,
    };
}

function nameToCode(name: string) {
    return name.trim().replaceAll(" ", "_").replaceAll("/", "or").toLowerCase();
}

function parseType(tier: number) {
    const map: Record<number, TalentType> = {
        0: "starting",
        1: "standard",
        2: "ultimate",
        3: "final",
    }

    const type = map[tier];

    if (!type) {
        throw new Error(`Talent parse error: Unknown talent type '${type}'`);
    }

    return type
}

function parseDescriptions(descriptions: string[]) {
    const parsedDescriptions = descriptions.map(parseDescription);
    const improvements = parsedDescriptions.map(parseDescriptionTags(improvementTag()));
    const degradations = parsedDescriptions.map(parseDescriptionTags(degradationTag()));
    return {
        description: descriptions[0]
            ? parseDescription(descriptions[0])
            : [],
        improvements,
        degradations,
    }
}
function parseDescription(description: string) {
    const initialCleanup = description
        .split("• ")
        .filter(Boolean)
        .map(it => it.replaceAll(/ \(currently: .*?\)/g, ""))
        .map(it => it.replaceAll("\n", ""))

    return initialCleanup
        .map(descriptionKeyMaps.passtechToMyTag.apply);
}


function improvementTag() { 
    return descriptionKeyMaps.myTags.tags.improvement
        .replaceAll(/[\{\}]/g, "");
};
function degradationTag() { 
    return descriptionKeyMaps.myTags.tags.degradation
        .replaceAll(/[\{\}]/g, "");
};


function parseDescriptionTags(tag: string) {
    const parseFn = parseDescriptionTag(tag);
    return function(description: string[]) {
        return parseFn(description.join(" "));
    }
}
function parseDescriptionTag(tag: string) {
    return function(description: string) {
        const parsed = description
            .matchAll(new RegExp(`{${tag}}.*?{/s}`, "g")).toArray()
            .map(it => it[0])
            .filter(it => !it.includes("+0%"))
            .map(it => it.replace(new RegExp(`{${tag}}`), "").replace(/\{\/s\}/g, ""));
        return parsed;
    }
}
