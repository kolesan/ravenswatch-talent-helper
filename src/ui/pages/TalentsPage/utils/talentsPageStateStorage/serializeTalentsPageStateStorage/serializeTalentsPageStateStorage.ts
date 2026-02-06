import { HeroCode } from "../../../../../../data/heroes";
import { TalentsPageView } from "../../../talentsPageViews";
import { ReactiveTalentsPageState, SerializedTalentsPageState } from "../../../types";

import { serializeHero } from "./utils/serializeHero";

type Params = {
    heroCode: HeroCode;
    view: TalentsPageView;
    reactiveState: ReactiveTalentsPageState;
    currentStoredState: SerializedTalentsPageState | null,
}

export function serializeTalentsPageStateStorage({
    heroCode,
    view,
    reactiveState,
    currentStoredState,
}: Params): SerializedTalentsPageState {
    return {
        currentHeroCode: heroCode,
        currentView: view,
        heroes: {
            ...currentStoredState?.heroes,
            [heroCode]: serializeHero(reactiveState),
        }
    }
}
