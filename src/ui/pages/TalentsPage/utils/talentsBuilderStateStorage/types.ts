import { Talent } from "../../../../uiData/heroes/talents/types";
import { BuilderState } from "../../../../components/Builder/hooks/useBuilderStateReducer/types";
import { SerializedBuilderState } from "../../../../components/Builder/utils/builderStateStorage/types";

export type StorableTalentsBuilderHeroState = {
    rank: number;
    builderState: BuilderState<Talent>;
}

export type SerializedTalentsBuilderHeroState = {
    rank: number;
    builderState: SerializedBuilderState;
}
