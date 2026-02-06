import { useEffect } from "preact/hooks";

import { StorableTalentsPageState } from "../types";
import { talentsPageStateStorage } from "../utils/talentsPageStateStorage/talentsPageStateStorage";

export function useSaveTalentsPageStateToStorage({
    heroCode,
    view,
    reactiveState
}: StorableTalentsPageState) {
    useEffect(() => {
        talentsPageStateStorage.set({ 
            heroCode,
            view, 
            reactiveState 
        });
    }, [heroCode, view, reactiveState])
}
