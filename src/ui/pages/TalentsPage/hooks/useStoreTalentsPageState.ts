import { useEffect } from "preact/hooks";

import { StorableTalentsPageState } from "../types";
import { talentsPageStateStorage } from "../utils/talentsPageStateStorage/talentsPageStateStorage";

export function useStoreTalentsPageState({
    heroCode,
    view,
    rank,
    builderState
}: StorableTalentsPageState) {
    useEffect(() => {
        talentsPageStateStorage.set({ 
            heroCode,
            view,
            rank,
            builderState
        });
    }, [heroCode, view, rank, builderState])
}
