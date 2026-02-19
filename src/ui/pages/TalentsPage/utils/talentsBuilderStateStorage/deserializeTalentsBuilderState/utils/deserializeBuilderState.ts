import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { isTruthy } from "../../../../../../utils/isTruthy";
import { BuilderState } from "../../../../components/Builder/hooks/useBuilderStateReducer/types";
import { defaultBuilderState } from "../../../defaultBuilderState";
import { SerializedBuilderState, SerializedTalentState } from "../../types";

export function deserializeBuilderState(
    allHeroTalents: Talent[],
    storedBuilderState: SerializedBuilderState | undefined,
): BuilderState<Talent> {
    if (!storedBuilderState) {
        return defaultBuilderState;
    }

    // TODO extract an util for such common deserialization actions
    const normalizedBuilderState: Partial<SerializedBuilderState> = 
        typeof storedBuilderState === "object"
            ? storedBuilderState || {} // additional check for null
            : {};

    const storedUsed = normalizedBuilderState.used;
    const storedPreferred = normalizedBuilderState.preferred;

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
    return function(storedTalent: SerializedTalentState): Talent | undefined {
        const talent = allHeroTalents
            .find(it => it.code === storedTalent.code);

        return talent && {
            ...talent,
            preferred: storedTalent.preferred,
        }
    }
}
