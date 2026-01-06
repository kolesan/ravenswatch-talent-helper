import { useEffect } from "preact/hooks";

import { cursedItemsPageStateStorage } from "../../../utils/cursedItemsPageStateStorage/cursedItemsPageStateStorage";
import { CursedItemsPageState } from "../types";

export function useSaveCursedItemsPageStateToStorage(
    state: CursedItemsPageState
) {
    useEffect(() => {
        cursedItemsPageStateStorage.set(state);
    }, [state])
}
