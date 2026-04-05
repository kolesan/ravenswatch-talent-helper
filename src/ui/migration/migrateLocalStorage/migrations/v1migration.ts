import { LocalStorage } from "ui/core/LocalStorage";
import { heroes } from "ui/uiData/heroes/heroes";
import { Hero } from "ui/uiData/heroes/types";

import { storageKey as newCursedObjectsKey } from "CursedObjectsPage/hooks/useCursedObjectsBuilder";
import { storageKey as newLegendaryObjectsKey } from "LegendaryObjectsPage/hooks/useLegendaryObjectsBuilder";
import { baseTalentsBuilderStateStorage } from "TalentsPage/utils/talentsBuilderStateStorage/baseTalentsBuilderStateStorage";
import { baseTalentsPageUrlParamsStorage } from "TalentsPage/utils/talentsPageUrlParamsStorage/baseTalentsPageUrlParamsStorage";

const oldTalentsKey = "ravenswatch-run-helper_state";
const oldLegendaryObjectsKey = "ravenswatch-run-helper_legendary-objects-page_state";
const oldCursedObjectsKey = "ravenswatch-run-helper_cursed-objects-page_state";

export function v1migration() {
    migrateLegendaryObjects();
    migrateCursedObjects();
    migrateTalents();
}

function migrateLegendaryObjects() {
    const oldState = LocalStorage.get(oldLegendaryObjectsKey);
    if (oldState) {
        LocalStorage.set(newLegendaryObjectsKey, oldState);
        LocalStorage.remove(oldLegendaryObjectsKey);
    }
}

function migrateCursedObjects() {
    const oldState = LocalStorage.get(oldCursedObjectsKey);
    if (oldState) {
        LocalStorage.set(newCursedObjectsKey, oldState);
        LocalStorage.remove(oldCursedObjectsKey);
    }
}

function migrateTalents() {
    const oldState = LocalStorage.get(oldTalentsKey);
    if (oldState) {
        migrateHeroes(oldState);
        migrateUrl(oldState);
        LocalStorage.remove(oldTalentsKey);
    }
}

function migrateHeroes(oldState: any) {
    heroes.asArray.forEach(migrateHero(oldState));
}
function migrateHero(oldState: any) {
    return function(hero: Hero) {
        const heroCode = hero.code;
        const oldHeroState = oldState.heroes[heroCode];
        if (oldHeroState) {
            baseTalentsBuilderStateStorage.set(heroCode, {
                rank: oldHeroState.rank,
                builderState: oldHeroState.talents,
            });
        }
    }
}

function migrateUrl(oldState: any) {
    baseTalentsPageUrlParamsStorage.set({
        hero: oldState.currentHeroCode,
        view: "builder",
    });
}
