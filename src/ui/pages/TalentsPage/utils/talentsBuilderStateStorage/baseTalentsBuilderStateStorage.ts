import { HeroCode } from "../../../../../data/heroes";
import { LocalStorage } from "../../../../core/LocalStorage";

import { SerializedHeroState } from "./types";

function key(heroCode: HeroCode) {
    return `rrh_talents_builder_${heroCode}`;
}

export const baseTalentsBuilderStateStorage = {
    get(heroCode: HeroCode): SerializedHeroState | null {
        return LocalStorage.get(key(heroCode));
    },
    set(heroCode: HeroCode, heroState: SerializedHeroState) {
        LocalStorage.set(key(heroCode), heroState);
    }
}
