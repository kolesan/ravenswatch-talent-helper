import {
    SerializedTalentsPageUrlParamsState,
    StorableTalentsPageUrlParamsState,
} from "../../../types";

import { deserializeHero } from "./utils/deserializeHero";
import { deserializeView } from "./utils/deserializeView";

export function deserializeTalentsPageUrlParams(
    storedState: SerializedTalentsPageUrlParamsState | null,
): StorableTalentsPageUrlParamsState {
    const hero = deserializeHero(storedState?.hero);
    const view = deserializeView(storedState?.view);

    return {
        hero,
        view,
    }
}
