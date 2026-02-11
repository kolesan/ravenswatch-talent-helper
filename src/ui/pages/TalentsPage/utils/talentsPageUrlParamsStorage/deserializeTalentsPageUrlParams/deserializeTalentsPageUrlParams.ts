import {
    SerializedTalentsPageUrlParamsState,
    StorableTalentsPageUrlParamsState,
} from "../../../types";

import { deserializeHero } from "./utils/deserializeHero";
import { deserializeView } from "./utils/deserializeView";

export function deserializeTalentsPageUrlParams(
    currentStoredState: SerializedTalentsPageUrlParamsState | null,
): StorableTalentsPageUrlParamsState {
    const hero = deserializeHero(currentStoredState?.hero);
    const view = deserializeView(currentStoredState?.view);

    return {
        hero,
        view,
    }
}
