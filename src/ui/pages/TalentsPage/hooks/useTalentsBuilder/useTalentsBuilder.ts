import { useMemo, useState } from "preact/hooks";

import { Hero } from "../../../../../finalData/finalData";
import { Talent } from "../../../../../scripts/extractTalents/types";
import { useBuilder } from "../../components/Builder/useBuilder";
import { applyRank } from "../../components/Builder/utils/applyRank";
import { calculateAvailableTalents } from "../../components/Builder/utils/calculateAvailableTalents";
import { TalentWithLockedFlag } from "../../types";

import { loadFromStorage } from "./utils/loadFromStorage";
import { saveToStorage } from "./utils/saveToStorage";

type Params = {
    initialHero: Hero;
}

export function useTalentsBuilder({
    initialHero,
}: Params) {
    // init
    const initialHeroState = useMemo(() => {
        return loadFromStorage(initialHero);
    }, []);

    // state
    const [hero, setHero] = useState(initialHero);
    const [rank, setRank] = useState(initialHeroState.rank);
    const builder = useBuilder({
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
    });

    // derived state
    const available = useMemo(() => {
        return calculateAvailableTalents({
            rank, 
            builderState: builder.state, 
            allTalents: hero.talents,
        });
    }, [rank, builder.state, hero.talents]);

    return useMemo(() => ({
        hero,
        rank,
        talents: {
            used: builder.state.used,
            preferred: builder.state.preferred,
            available,
        },
        loadHero(newHero: Hero) {
            const newHeroStoredState = loadFromStorage(newHero);

            setHero(newHero);
            setRank(newHeroStoredState.rank);
            builder.loadState(newHeroStoredState.builderState);
        },
        applyRank(newRank: number) {
            const newBuilderState = applyRank(builder.state, newRank);

            setRank(newRank);
            builder.loadState(newBuilderState);

            saveToStorage(hero, { 
                rank: newRank, 
                builderState: newBuilderState 
            });
        },
        clearUsed() {
            builder.clearUsed();
        },
        clearPreferred() {
            builder.clearPreferred();
        },
        removeFromUsed(talent: Talent) {
            builder.removeFromUsed(talent);
        },
        preferredToUsed(talent: Talent) {
            builder.preferredToUsed(talent);
        },
        preferredToAvailable(talent: Talent) {
            builder.preferredToAvailable(talent);
        },
        availableToUsed(talent: TalentWithLockedFlag) {
            builder.availableToUsed(talent);
        },
        availableToPreferred(talent: TalentWithLockedFlag) {
            builder.availableToPreferred(talent);
        },
    }), [hero, rank, builder.state, available]);
}
