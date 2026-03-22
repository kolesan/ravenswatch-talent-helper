import { HeroCode } from "../../../../ui_data/heroes";
import { LocalStorage } from "../../../../core/LocalStorage";

import { SerializedTalentsBuilderHeroState } from "./types";

function key(heroCode: HeroCode) {
    return `rrh_talents_builder_${heroCode}`;
}

export const baseTalentsBuilderStateStorage = {
    get(heroCode: HeroCode): SerializedTalentsBuilderHeroState | null {
        return LocalStorage.get(key(heroCode));
    },
    set(heroCode: HeroCode, heroState: SerializedTalentsBuilderHeroState) {
        LocalStorage.set(key(heroCode), heroState);
    }
}
