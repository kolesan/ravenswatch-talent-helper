import { Talent } from "../../../../../scripts/extractTalents/types";
import { SerializedTalentsState, TalentsState } from "../../../../pages/TalentsPage/types";
import { defaultAppState } from "../../../../pages/TalentsPage/utils/defaultAppState";
import { isTruthy } from "../../../isTruthy";

export function deserializeTalents(
    allHeroTalents: Talent[],
    storedTalentsState: SerializedTalentsState | undefined,
): TalentsState {
    if (!storedTalentsState) {
        return defaultAppState.talents;
    }

    // TODO extract an util for such common deserialization actions
    const normalizedTalentState: Partial<SerializedTalentsState> = 
        typeof storedTalentsState === "object"
            ? storedTalentsState || {} // additional check for null
            : {};

    const storedUsed = normalizedTalentState.used;
    const storedPreferred = normalizedTalentState.preferred;

    const normalizedUsed = Array.isArray(storedUsed)
        ? storedUsed
        : [];
    const normalizedPreferred = Array.isArray(storedPreferred)
        ? storedPreferred
        : [];

    return {
        used: normalizedUsed
            .map(deserializeTalent(allHeroTalents))
            .filter(isTruthy),
        preferred: normalizedPreferred
            .map(deserializeTalent(allHeroTalents))
            .filter(isTruthy),
    };
}

function deserializeTalent(allHeroTalents: Talent[]) {
    return function(storedTalentCode: unknown): Talent | undefined {
        return allHeroTalents.find(it => it.code === storedTalentCode);
    }
}
