import { Hero } from "../../../finalData/finalData";
import { Talent } from "../../../scripts/extractTalents/types";

import { TalentsPageView } from "./talentsPageViews";

export type StorableTalentsPageUrlParamsState = {
    hero: Hero;
    view: TalentsPageView;
}

export type SerializedTalentsPageUrlParamsState = {
    hero: string;
    view: string;
}

export type TalentWithLockedFlag = Talent & {
    locked?: boolean;
}
