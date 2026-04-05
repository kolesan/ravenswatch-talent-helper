import { TalentManual, TalentMerged } from "data/heroes/talents/types";
import { isTruthy } from "ui/utils/isTruthy";

import { ParsedPasstechTalent } from "../../types";

export function mergePasstechAndManualTalents(
    manualTalents: TalentManual[],
    passtechTalents: ParsedPasstechTalent[], 
): TalentMerged[] {
    return manualTalents
        .map(toMerged(passtechTalents))
        .filter(isTruthy);
}

function toMerged(passtechTalents: ParsedPasstechTalent[]) {
    return function(manualTalent: TalentManual) {
        const passtechTalent = passtechTalents
            .find(it => it.code === manualTalent.code);

        return passtechTalent 
            && merge(manualTalent, passtechTalent);
    }
}

function merge(
    manual: TalentManual,
    passtech: ParsedPasstechTalent
): TalentMerged {
    return {
        code: passtech.code,
        name: passtech.name,
        iconUrl: passtech.iconUrl,
        type: passtech.type,
        unlockedAtRank: manual.unlockedAtRank,
        multiplayerOnly: manual.multiplayerOnly,
        description: passtech.description,
        improvements: passtech.improvements,
        degradations: passtech.degradations,
    }
}
