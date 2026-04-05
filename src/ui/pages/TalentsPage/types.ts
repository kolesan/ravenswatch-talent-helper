import { Hero } from "ui/uiData/heroes/types";

import { TalentsPageView } from "./talentsPageViews";

export type StorableTalentsPageUrlParamsState = {
    hero: Hero;
    view: TalentsPageView;
}

export type SerializedTalentsPageUrlParamsState = {
    hero: string;
    view: string;
}
