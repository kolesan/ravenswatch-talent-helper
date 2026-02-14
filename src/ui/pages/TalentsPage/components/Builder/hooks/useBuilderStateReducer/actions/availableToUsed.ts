import { Talent } from "../../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../../../types";

export function availableToUsed(state: BuilderState, talent: Talent): BuilderState {
    const used = [...state.used, talent];

    return {
        ...state,
        used
    };
}
