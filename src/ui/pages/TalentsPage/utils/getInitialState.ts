import { HeroCode } from "../../../../data/heroes";
import { ReactiveTalentsPageState } from "../types";

import { defaultReactiveTalentsPageState } from "./defaultReactiveTalentsPageState";
import { talentsPageStateStorage } from "./talentsPageStateStorage/talentsPageStateStorage";

export function getInitialState(heroCode: HeroCode | undefined): ReactiveTalentsPageState {
    if (heroCode) {
        return talentsPageStateStorage.getHero(heroCode).reactiveState;
    }
    return talentsPageStateStorage.getCurrentHero().reactiveState || defaultReactiveTalentsPageState;
}
