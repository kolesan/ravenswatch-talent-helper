import { HeroCode } from "../../../../data/heroes";
import { appStateStorage } from "../../../utils/appStateStorage/appStateStorage";

import { defaultAppState } from "./defaultAppState";

export function getInitialState(heroCode: HeroCode | undefined) {
    if (heroCode) {
        return appStateStorage.getHero(heroCode);
    }
    return appStateStorage.getCurrentHero() || defaultAppState;
}
