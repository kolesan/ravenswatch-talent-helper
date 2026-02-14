import { Talent } from "../../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../types";

export function preferredToAvailable(state: BuilderState, talent: Talent): BuilderState {
    const preferred = state.preferred
        .filter(it => it.code !== talent.code);

    return {
        ...state,
        preferred
    };
}
