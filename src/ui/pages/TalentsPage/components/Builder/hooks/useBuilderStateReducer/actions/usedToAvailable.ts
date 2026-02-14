import { Talent } from "../../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../types";

export function usedToAvailable(state: BuilderState, talent: Talent): BuilderState {
    const used = state.used
        .filter(it => it.code !== talent.code);

    return {
        ...state,
        used,
    };
}
