import { useMemo, useState } from "preact/hooks";

import { TalentsCompendiumActionType, TalentsCompendiumState } from "./types";
import { groupTalentsByType } from "./utils/groupTalentsByType";

type Params = {
    getInitialState: () => TalentsCompendiumState;
    onAction: (state: TalentsCompendiumState, actionType: TalentsCompendiumActionType) => void;
}

export function useTalentsCompendium({
    getInitialState,
    onAction,
}: Params) {
    // init
    const initialState = useMemo(() => {
        return getInitialState();
    }, []);

    // state
    const [hero, setHero] = useState(initialState.hero);
    const [rank, setRank] = useState(initialState.rank);

    // derived state
    const talents = useMemo(() => {
        return groupTalentsByType(rank, hero.talents);
    }, [rank, hero.talents]);

    return useMemo(() => ({
        hero,
        rank,
        talents,
        loadState(newState: TalentsCompendiumState) {
            setHero(newState.hero);
            setRank(newState.rank);

            onAction(newState, "load_state");
        },
        applyRank(newRank: number) {
            setRank(newRank);

            onAction({ 
                hero,
                rank: newRank, 
            }, "apply_rank");
        },
    }), [hero, rank, talents]);
}
