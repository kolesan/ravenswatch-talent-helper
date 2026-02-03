import { useEffect } from "preact/hooks";

import { legendaryObjectsPageStateStorage } from "../utils/legendaryObjectsPageStateStorage/legendaryObjectsPageStateStorage";
import { LegendaryObjectsPageState } from "../types";

export function useSaveLegendaryObjectsPageStateToStorage(
    state: LegendaryObjectsPageState
) {
    useEffect(() => {
        legendaryObjectsPageStateStorage.set(state);
    }, [state])
}
