import { Talent } from "../../../../../../../../scripts/extractTalents/types";
import { BuilderState } from "../../../types";

export function availableToPreferred(state: BuilderState, talent: Talent): BuilderState {
    const preferredTalent = {
        ...talent,
        preferred: true,
    };

    const preferred = [...state.preferred, preferredTalent];

    return {
        ...state,
        preferred,
    };
}
