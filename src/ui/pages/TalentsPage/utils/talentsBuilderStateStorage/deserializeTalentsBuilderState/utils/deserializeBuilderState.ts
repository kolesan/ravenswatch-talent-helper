import { Talent } from "../../../../../../../scripts/extractTalents/types";
import { isTruthy } from "../../../../../../utils/isTruthy";
import { BuilderState } from "../../../../components/Builder/types";
import { SerializedBuilderState, SerializedTalent } from "../../../../types";
import { defaultBuilderState } from "../../../defaultBuilderState";

export function deserializeBuilderState(
    allHeroTalents: Talent[],
    storedBuilderState: SerializedBuilderState | undefined,
): BuilderState {
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
    return function(storedTalent: SerializedTalent): Talent | undefined {
        const talent = allHeroTalents
            .find(it => it.code === storedTalent.code);

        return talent && {
            ...talent,
            preferred: storedTalent.preferred,
        }
    }
}
