import { Talent } from "../../../../scripts/extractTalents/types";
import { BuilderState } from "../components/Builder/hooks/useBuilderStateReducer/types";

export const defaultBuilderState: BuilderState<Talent> = {
    used: [],
    preferred: [],
}
