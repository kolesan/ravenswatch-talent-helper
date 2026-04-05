import { TalentType } from "data/heroes/talents/types";

export function parseTalentType(tier: number) {
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
