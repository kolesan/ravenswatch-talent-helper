import { serializeBuilderState } from "ui/components/Builder/utils/builderStateStorage/serializeBuilderState/serializeBuilderState";

import { SerializedTalentsBuilderHeroState, StorableTalentsBuilderHeroState } from "../types";

export function serializeTalentsBuilderState({
    rank,
    builderState,
}: StorableTalentsBuilderHeroState): SerializedTalentsBuilderHeroState {
    return {
        rank,
        builderState: serializeBuilderState(builderState),
    };
}
