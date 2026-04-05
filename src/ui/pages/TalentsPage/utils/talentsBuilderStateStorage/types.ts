import { Talent } from "ui/uiData/heroes/talents/types";
import { BuilderState } from "ui/components/Builder/hooks/useBuilderStateReducer/types";
import { SerializedBuilderState } from "ui/components/Builder/utils/builderStateStorage/types";

export type StorableTalentsBuilderHeroState = {
    rank: number;
    builderState: BuilderState<Talent>;
}

export type SerializedTalentsBuilderHeroState = {
    rank: number;
    builderState: SerializedBuilderState;
}
