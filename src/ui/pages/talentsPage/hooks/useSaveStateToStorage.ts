import { useEffect } from "preact/hooks";

import { appStateStorage } from "../../../core/AppStateStorage";
import { AppState } from "../types";

export function useSaveStateToStorage(state: AppState) {
    useEffect(() => {
        appStateStorage.set(state);
    }, [state])
}
