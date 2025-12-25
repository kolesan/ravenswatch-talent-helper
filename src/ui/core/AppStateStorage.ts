import { AppState } from "../types";

import { LocalStorage } from "./LocalStorage";

const key = "ravenswatch-run-helper_state"

export const appStateStorage = {
    get(): AppState | null {
        return LocalStorage.get(key);
    },
    set(appState: AppState) {
        LocalStorage.set(key, appState);
    }
}
