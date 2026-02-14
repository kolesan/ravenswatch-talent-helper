import { useMemo, useState } from "preact/hooks";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { TalentWithLockedFlag } from "../../types";

import { BuilderState } from "./hooks/useBuilderStateReducer/types";
import { TalentsBuilderActionType } from "./types";
import { useBuilder } from "./useBuilder";
import { applyRank } from "./utils/applyRank";
import { calculateAvailableTalents } from "./utils/calculateAvailableTalents";

type Params = {
    getInitialState: () => TalentsBuilderState;
    onAction: (state: TalentsBuilderState, actionType: TalentsBuilderActionType) => void;
    allHeroTalents: Talent[];
}

type TalentsBuilderState = {
    rank: number;
    builderState: BuilderState;
}

export function useTalentsBuilder({
    getInitialState,
    onAction,
    allHeroTalents,
}: Params) {
    const initialState = useMemo(() => {
        return getInitialState();
    }, []);

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
                rank,
                builderState: newBuilderState
            }, actionType);
        },
    });

    const available = useMemo(() => {
        return calculateAvailableTalents({
            rank, 
            builderState: builder.state, 
            allTalents: allHeroTalents,
        });
    }, [rank, builder, allHeroTalents]);

    return useMemo(() => ({
        rank,
        talents: {
            used: builder.state.used,
            preferred: builder.state.preferred,
            available,
        },
        loadState(newState: TalentsBuilderState) {
            builder.loadState(newState.builderState);
            setRank(newState.rank);

            onAction(newState, "load_state");
        },
        applyRank(rank: number) {
            const newBuilderState = applyRank(builder.state, rank);

            builder.loadState(newBuilderState);
            setRank(rank);

            onAction({
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
    }), [rank, builder, available]);
}
