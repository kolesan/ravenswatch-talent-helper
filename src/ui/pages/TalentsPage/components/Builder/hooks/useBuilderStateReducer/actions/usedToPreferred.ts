import { Talent } from "../../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../types";

export function usedToPreferred(state: BuilderState, talent: Talent) {
    const used = state.used
        .filter(it => it.code !== talent.code);
    const preferred = [...state.preferred, talent];

    return {
        used,
        preferred,
    };
}
