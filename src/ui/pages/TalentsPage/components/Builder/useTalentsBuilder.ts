import { useState } from "preact/hooks";

import { Talent } from "../../../../../scripts/extractTalents/types";
import { TalentWithLockedFlag } from "../../types";

import { BuilderState } from "./types";
import { useBuilder } from "./useBuilder";
import { applyRank } from "./utils/applyRank";
import { calculateAvailableTalents } from "./utils/calculateAvailableTalents";

type Params = {
    initialState: TalentsBuilderState;
    allHeroTalents: Talent[];
    onNewState: (state: TalentsBuilderState) => void;
}

type TalentsBuilderState = {
    rank: number;
    builderState: BuilderState;
}

export function useTalentsBuilder({
    initialState,
    allHeroTalents,
    onNewState,
}: Params) {
    const [rank, setRank] = useState(initialState.rank);

    const builder = useBuilder({
        initialState: initialState.builderState,
        onNewState: newBuilderState => {
            onNewState({
                rank,
                builderState: newBuilderState
            })
        },
    });

    const available = calculateAvailableTalents(
        rank, 
        allHeroTalents, 
        builder.state
    );

    return {
        rank,
        talents: {
            ...builder.state,
            available,
        },
        loadStateWithoutNewStateCb(newState: TalentsBuilderState) {
            builder.loadStateWithoutNewStateCb(newState.builderState);
            setRank(newState.rank);
        },
        setRank(rank: number) {
            const newBuilderState = applyRank(builder.state, rank);

            builder.loadStateWithoutNewStateCb(newBuilderState);
            setRank(rank);

            onNewState({
                rank,
                builderState: newBuilderState,
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
    }
}
