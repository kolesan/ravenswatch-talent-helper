import { readFileSync } from "fs";

import { Hero, heroes } from "../../data/heroes";
import { Talent } from "../extractTalents/types";
import { heroTalentsFileName } from "../utils/heroTalentsFileName";
import { runPromiseChain } from "../utils/runPromiseChain";

import { fetchAndSaveIcon } from "./utils/fetchAndSaveIcon";

const heroesToDownloadIconsFor = [
    heroes.all.romeo,
    heroes.all.juliet
]

// ============================================================

let i = 0;
function getNextPromise() {
    const hero = heroesToDownloadIconsFor[i];
    console.log(`${i + 1}/${heroesToDownloadIconsFor.length} hero ${hero.name}`);
    i++;
    return {
        promise: downloadHeroTalentIcons(hero),
        getPromiseAfterThat: i < heroesToDownloadIconsFor.length
            ? getNextPromise
            : undefined,
    }
}

const currentPromise = getNextPromise();

runPromiseChain({
    currentPromise: currentPromise.promise,
    getNextPromise: currentPromise.getPromiseAfterThat,
    options: {
        delayMs: 3500,
    }
});

// ============================================================

function downloadHeroTalentIcons(hero: Hero) {
    const fileName = heroTalentsFileName(hero);
    const fileText = readFileSync(fileName, 'utf-8');

    const talents = JSON.parse(fileText) as Talent[];

    let i = 0;
    function getNextPromise() {
        const talent = talents[i];
        console.log(`${i + 1}/${talents.length} talent '${talent.name}'`);
        i++;
        return {
            promise: fetchAndSaveIcon(hero, talent),
            getPromiseAfterThat: i < talents.length
                ? getNextPromise
                : undefined,
        }
    }

    const currentPromise = getNextPromise();

    return runPromiseChain({
        currentPromise: currentPromise.promise,
        getNextPromise: currentPromise.getPromiseAfterThat,
        options: {
            delayMs: 3500,
        }
    });
}

// function test(hero: Hero, talent: Talent) {
//     return Promise.resolve("Test" + hero.name + talent.name);
// }