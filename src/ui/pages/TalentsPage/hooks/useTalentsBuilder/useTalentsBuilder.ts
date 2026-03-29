import { useMemo, useState } from "preact/hooks";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { useBuilder } from "../../../../components/Builder/useBuilder";
import { Hero } from "../../../../uiData/heroes/types";
import { markIfLocked } from "../../utils/markIfLocked";

import { applyRank } from "./utils/applyRank";
import { loadFromStorage } from "./utils/loadFromStorage";
import { saveToStorage } from "./utils/saveToStorage";

type Params = {
    initialHero: Hero;
}

export function useTalentsBuilder({
    initialHero,
}: Params) {
    const initialHeroState = useMemo(() => {
        return loadFromStorage(initialHero);
    }, []);

    const [hero, setHero] = useState(initialHero);
    const [rank, setRank] = useState(initialHeroState.rank);
    const builder = useBuilder<Talent>({
        getInitialState: () => {
            return initialHeroState.builderState;
        },
        onAction: (newBuilderState, actionType) => {
            if (actionType === "load_state") {
                return;
            }
            saveToStorage(hero, {
                rank: rank,
                builderState: newBuilderState
            });
        },
        allItems: hero.talents
            .filter(it => it.type === "standard")
            .map(markIfLocked(rank)),
    });

    return useMemo(() => ({
        hero,
        rank,
        actions: {
            loadHero(newHero: Hero) {
                if (newHero.code === hero.code) {
                    return;
                }
                
                const newHeroStoredState = loadFromStorage(newHero);

                setHero(newHero);
                setRank(newHeroStoredState.rank);
                builder.actions.loadState(newHeroStoredState.builderState);
            },
            applyRank(newRank: number) {
                const newBuilderState = applyRank(builder.state, newRank);

                setRank(newRank);
                builder.actions.loadState(newBuilderState);

                saveToStorage(hero, { 
                    rank: newRank, 
                    builderState: newBuilderState 
                });
            },
        },
        builder: {
            ...builder,
            actions: {
                ...builder.actions,
                availableToUsed(talent: Talent) {
                    if (talent.locked) {
                        return;
                    }
                    builder.actions.availableToUsed(talent);
                },
                availableToPreferred(talent: Talent) {
                    if (talent.locked) {
                        return;
                    }
                    builder.actions.availableToPreferred(talent);
                },
            }
        },
    }), [hero, rank, builder.state]);
}
