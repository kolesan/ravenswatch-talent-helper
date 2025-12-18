import fs from "fs/promises";

import { heroes } from "../../data/heroes";
import { heroTalentsFileName } from "../utils/heroTalentsFileName";
import { readFileSync } from "fs";
import { runPromiseChain } from "../utils/runPromiseChain";
import { Talent } from "../extractTalents/types";
import { fetchAndSaveIcon } from "./utils/fetchAndSaveIcon";

const hero = heroes.all.beowulf;

const fileName = heroTalentsFileName(hero);
const fileText = readFileSync(fileName, 'utf-8');

const talents = JSON.parse(fileText) as Talent[];

let i = 0;
function getNextPromise() {
    return {
        promise: fetchAndSaveIcon(hero, talents[i++]),
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
