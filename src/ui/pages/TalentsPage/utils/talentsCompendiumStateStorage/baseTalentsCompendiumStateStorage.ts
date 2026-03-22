import { HeroCode } from "../../../../uiData/heroes";
import { LocalStorage } from "../../../../core/LocalStorage";

import { SerializedTalentsCompendiumHeroState } from "./types";

function key(heroCode: HeroCode) {
    return `rrh_talents_compendium_${heroCode}`;
}

export const baseTalentsCompendiumStateStorage = {
    get(heroCode: HeroCode): SerializedTalentsCompendiumHeroState | null {
        return LocalStorage.get(key(heroCode));
    },
    set(heroCode: HeroCode, state: SerializedTalentsCompendiumHeroState) {
        LocalStorage.set(key(heroCode), state);
    }
}
