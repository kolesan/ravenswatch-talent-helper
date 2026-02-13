import { Talent } from "../../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../../../types";

export function preferredToUsed(state: BuilderState, talent: Talent): BuilderState {
    const used = [...state.used, talent];
    const preferred = state.preferred
        .filter(it => it.code !== talent.code);

    return {
        used,
        preferred,
    };
}
