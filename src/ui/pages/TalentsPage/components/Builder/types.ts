import { Talent } from "../../../../../scripts/extractTalents/types";

import { useTalentsBuilder } from "./useTalentsBuilder";

export type BuilderState = {
    used: Talent[];
    preferred: Talent[];
}

export type TalentsBuilder = ReturnType<typeof useTalentsBuilder>;
