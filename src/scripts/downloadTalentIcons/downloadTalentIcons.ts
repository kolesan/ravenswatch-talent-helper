import { readFileSync } from "fs";

import { heroes } from "../../data/heroes";
import { Talent } from "../extractTalents/types";
import { heroTalentsFileName } from "../utils/heroTalentsFileName";
import { runPromiseChain } from "../utils/runPromiseChain";

import { fetchAndSaveIcon } from "./utils/fetchAndSaveIcon";

const hero = heroes.all.piper;

const fileName = heroTalentsFileName(hero);
const fileText = readFileSync(fileName, 'utf-8');

const talents = JSON.parse(fileText) as Talent[];

console.log(hero.name);

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

runPromiseChain({
    currentPromise: currentPromise.promise,
    getNextPromise: currentPromise.getPromiseAfterThat,
    options: {
        delayMs: 3500,
    }
});
