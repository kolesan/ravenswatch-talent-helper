import { Hero } from "../../../../../../finalData/finalData";
import { compendiumStateStorage } from "../../../utils/compendiumStateStorage/compendiumStateStorage";
import { StorableCompendiumHeroState } from "../../../utils/compendiumStateStorage/types";

export function saveToStorage(hero: Hero, newState: StorableCompendiumHeroState) {
    compendiumStateStorage.set(hero.code, {
        rank: newState.rank,
    });
}
