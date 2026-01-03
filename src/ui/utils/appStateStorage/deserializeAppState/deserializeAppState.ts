import { HeroCode } from "../../../../data/heroes";
import { AppState, SerializedAppState } from "../../../pages/talentsPage/types";

import { deserializeHero } from "./utils/deserializeHero";
import { deserializeRank } from "./utils/deserializeRank";
import { deserializeTalents } from "./utils/deserializeTalents";

// TOTO consider moving all state defaulting logic out of this util and its children
// and instead return empty if there is no state stored for requested hero
// and then default at the top where appStateStorage.get method is called

export function deserializeAppState(
    currentStoredState: SerializedAppState | null,
    specificHeroCode?: HeroCode,
): AppState {
    const heroToDeserializeCode = specificHeroCode || currentStoredState?.currentHeroCode;

    const storedHeroState = heroToDeserializeCode
        ? currentStoredState?.heroes?.[heroToDeserializeCode]
        : undefined;

    const hero = deserializeHero(heroToDeserializeCode);
    const rank = deserializeRank(storedHeroState?.rank);
    const talents = deserializeTalents(hero.talents, storedHeroState?.talents);

    return {
        hero,
        rank,
        talents,
    }
}
