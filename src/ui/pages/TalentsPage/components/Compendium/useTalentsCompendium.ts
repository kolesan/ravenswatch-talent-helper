import { useMemo, useState } from "preact/hooks";

import { Talent } from "../../../../../scripts/extractTalents/types";

import { TalentsCompendiumActionType, TalentsCompendiumState } from "./types";
import { groupTalentsByType } from "./utils/groupTalentsByType";

type Params = {
    getInitialState: () => TalentsCompendiumState;
    onAction: (state: TalentsCompendiumState, actionType: TalentsCompendiumActionType) => void;
    allHeroTalents: Talent[];
}

export function useTalentsCompendium({
    getInitialState,
    onAction,
    allHeroTalents,
}: Params) {
    // init
    const initialState = useMemo(() => {
        return getInitialState();
    }, []);

    // state
    const [rank, setRank] = useState(initialState.rank);

    // derived state
    const talents = useMemo(() => {
        return groupTalentsByType(rank, allHeroTalents);
    }, [rank, allHeroTalents]);

    return useMemo(() => ({
        rank,
        talents,
        loadState(newState: TalentsCompendiumState) {
            setRank(newState.rank);

            onAction(newState, "load_state");
        },
        applyRank(rank: number) {
            setRank(rank);

            onAction({ rank }, "apply_rank");
        },
    }), [rank, talents]);
}
