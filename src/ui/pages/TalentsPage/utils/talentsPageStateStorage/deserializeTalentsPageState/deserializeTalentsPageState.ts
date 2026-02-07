import { HeroCode } from "../../../../../../data/heroes";
import { SerializedTalentsPageState, StorableTalentsPageState } from "../../../types";

import { deserializeHero } from "./utils/deserializeHero";
import { deserializeRank } from "./utils/deserializeRank";
import { deserializeTalents } from "./utils/deserializeTalents";
import { deserializeView } from "./utils/deserializeView";

// TODO consider moving all state defaulting logic out of this util and its children
// and instead return empty if there is no state stored for requested hero
// and then default at the top where appStateStorage.get method is called

export function deserializeTalentsPageState(
    currentStoredState: SerializedTalentsPageState | null,
    specificHeroCode?: HeroCode,
): StorableTalentsPageState {
    const heroToDeserializeCode = specificHeroCode || currentStoredState?.currentHeroCode;

    const storedHeroState = heroToDeserializeCode
        ? currentStoredState?.heroes?.[heroToDeserializeCode]
        : undefined;

    const hero = deserializeHero(heroToDeserializeCode);
    const view = deserializeView(currentStoredState?.currentView);
    const rank = deserializeRank(storedHeroState?.rank);
    const talents = deserializeTalents(hero.talents, storedHeroState?.talents);

    return {
        heroCode: hero.code,
        view,
        rank,
        builderState: talents,
    }
}
