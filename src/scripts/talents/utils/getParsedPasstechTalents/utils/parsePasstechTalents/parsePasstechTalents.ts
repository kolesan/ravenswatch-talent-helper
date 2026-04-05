import { PasstechTalent } from "data/passtechResponses/types";
import { ParsedPasstechTalent } from "scripts/talents/types";
import { nameCleanup } from "scripts/utils/nameCleanup";
import { nameToCode } from "scripts/utils/nameToCode";

import { parseTalentDescriptions } from "./utils/parseTalentDescriptions";
import { parseTalentType } from "./utils/parseTalentType";

export function parsePasstechTalents(
    passtechTalents: PasstechTalent[]
): ParsedPasstechTalent[] {
    return passtechTalents.map(parseTalent);
}

function parseTalent(talent: PasstechTalent): ParsedPasstechTalent {
    const name = nameCleanup(talent.name);
    const {
        description,
        improvements,
        degradations,
    } = parseTalentDescriptions(talent.descriptions);

    return {
        code: nameToCode(name),
        name,
        iconUrl: talent.icon,
        type: parseTalentType(talent.tier),
        description,
        improvements,
        degradations,
    };
}
