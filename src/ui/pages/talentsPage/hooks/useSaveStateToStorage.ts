import { useEffect } from "preact/hooks";

import { appStateStorage } from "../../../utils/appStateStorage/appStateStorage";
import { AppState } from "../types";

export function useSaveStateToStorage(state: AppState) {
    useEffect(() => {
        appStateStorage.set(state);
    }, [state])
}
