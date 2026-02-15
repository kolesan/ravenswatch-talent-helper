import { useMemo, useState } from "preact/hooks";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { TalentWithLockedFlag } from "../../types";

import { TalentsBuilderActionType, TalentsBuilderState } from "./types";
import { useBuilder } from "./useBuilder";
import { applyRank } from "./utils/applyRank";
import { calculateAvailableTalents } from "./utils/calculateAvailableTalents";

type Params = {
    getInitialState: () => TalentsBuilderState;
    onAction: (state: TalentsBuilderState, actionType: TalentsBuilderActionType) => void;
}

export function useTalentsBuilder({
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
    const builder = useBuilder({
        getInitialState: () => {
            return initialState.builderState;
        },
        onAction: (newBuilderState, actionType) => {
            if (actionType === "load_state") {
                return;
            }
            onAction({
                hero,
                rank,
                builderState: newBuilderState
            }, actionType);
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
        loadState(newState: TalentsBuilderState) {
            setHero(newState.hero);
            setRank(newState.rank);
            builder.loadState(newState.builderState);

            onAction(newState, "load_state");
        },
        applyRank(rank: number) {
            const newBuilderState = applyRank(builder.state, rank);

            setRank(rank);
            builder.loadState(newBuilderState);

            onAction({
                hero,
                rank,
                builderState: newBuilderState,
            }, "apply_rank");
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
