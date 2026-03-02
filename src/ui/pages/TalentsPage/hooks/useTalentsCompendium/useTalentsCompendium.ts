import { useMemo, useState } from "preact/hooks";

import { Hero } from "../../../../../finalData/finalData";
import { markIfLocked } from "../../utils/markIfLocked";

import { groupTalentsByType } from "./utils/groupTalentsByType";
import { loadFromStorage } from "./utils/loadFromStorage";
import { saveToStorage } from "./utils/saveToStorage";

type Params = {
    initialHero: Hero;
}

export function useTalentsCompendium({
    initialHero,
}: Params) {
    // init
    const initialState = useMemo(() => {
        return loadFromStorage(initialHero);
    }, []);

    // state
    const [hero, setHero] = useState(initialHero);
    const [rank, setRank] = useState(initialState.rank);

    // derived state
    const talents = useMemo(() => {
        const talentsWithLockedFlag = hero.talents.map(markIfLocked(rank));
        return groupTalentsByType(talentsWithLockedFlag);
    }, [rank, hero.talents]);

    return useMemo(() => ({
        hero,
        rank,
        talents,
        actions: {
            loadHero(newHero: Hero) {
                if (newHero.code === hero.code) {
                    return;
                }
                
                const newHeroStoredState = loadFromStorage(newHero);
                
                setHero(newHero);
                setRank(newHeroStoredState.rank);
            },
            applyRank(newRank: number) {
                setRank(newRank);

                saveToStorage(hero, {
                    rank: newRank,
                });
            },
        }
    }), [hero, rank, talents]);
}
