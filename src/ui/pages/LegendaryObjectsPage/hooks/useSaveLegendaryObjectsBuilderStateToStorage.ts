import { useEffect } from "preact/hooks";

import { legendaryObjectsBuilderStateStorage } from "../utils/legendaryObjectsBuilderStateStorage/legendaryObjectsBuilderStateStorage";
import { StorableLegendaryObjectsBuilderState } from "../types";

export function useSaveLegendaryObjectsBuilderStateToStorage(
    state: StorableLegendaryObjectsBuilderState
) {
    useEffect(() => {
        legendaryObjectsBuilderStateStorage.set(state);
    }, [state])
}
