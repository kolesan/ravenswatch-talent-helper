import { LocalStorage } from "../../../../core/LocalStorage";

import { SerializedCompendiumState } from "./types";

const key = "ravenswatch-run-helper_talents-page_compendium-state"

export const baseCompendiumStateStorage = {
    get(): SerializedCompendiumState | null {
        return LocalStorage.get(key);
    },
    set(state: SerializedCompendiumState) {
        LocalStorage.set(key, state);
    }
}
