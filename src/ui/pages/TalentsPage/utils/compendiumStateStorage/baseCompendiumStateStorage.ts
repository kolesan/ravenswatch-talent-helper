import { HeroCode } from "../../../../../data/heroes";
import { LocalStorage } from "../../../../core/LocalStorage";

import { SerializedCompendiumHeroState } from "./types";

function key(heroCode: HeroCode) {
    return `rrh_talents_compendium_${heroCode}`;
}

export const baseCompendiumStateStorage = {
    get(heroCode: HeroCode): SerializedCompendiumHeroState | null {
        return LocalStorage.get(key(heroCode));
    },
    set(heroCode: HeroCode, state: SerializedCompendiumHeroState) {
        LocalStorage.set(key(heroCode), state);
    }
}
