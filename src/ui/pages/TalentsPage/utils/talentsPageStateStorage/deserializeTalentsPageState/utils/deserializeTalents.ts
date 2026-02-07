import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { isTruthy } from "../../../../../../utils/isTruthy";
import { SerializedTalent, SerializedTalentsState, TalentsState } from "../../../../types";
import { defaultBuilderState } from "../../../defaultBuilderState";

export function deserializeTalents(
    allHeroTalents: Talent[],
    storedTalentsState: SerializedTalentsState | undefined,
): TalentsState {
    if (!storedTalentsState) {
        return defaultBuilderState;
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
    return function(storedTalent: SerializedTalent): Talent | undefined {
        const talent = allHeroTalents
            .find(it => it.code === storedTalent.code);

        return talent && {
            ...talent,
            preferred: storedTalent.preferred,
        }
    }
}
