import { useEffect } from "preact/hooks";

import { legendaryItemsPageStateStorage } from "../../../utils/legendaryItemsPageStateStorage/legendaryItemsPageStateStorage";
import { LegendaryItemsPageState } from "../types";

export function useSaveLegendaryItemsPageStateToStorage(
    state: LegendaryItemsPageState
) {
    useEffect(() => {
        legendaryItemsPageStateStorage.set(state);
    }, [state])
}
