import { useEffect } from "preact/hooks";

import { CursedObjectsPageState } from "../types";
import { cursedObjectsPageStateStorage } from "../utils/cursedObjectsPageStateStorage/cursedObjectsPageStateStorage";

export function useSaveCursedObjectsPageStateToStorage(
    state: CursedObjectsPageState
) {
    useEffect(() => {
        cursedObjectsPageStateStorage.set(state);
    }, [state])
}
