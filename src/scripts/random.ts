import { Hero, heroes } from "../data/heroes";

import { Talent } from "./extractTalents/types";

// [
//     heroes.all.scarlet,
//     heroes.all.piper
// ]

heroes.asArray.slice(0, 3).forEach(printTalentCodes);

function printTalentCodes(hero: Hero) {
    import(`../scrapedData/heroTalents/${hero.code}.json`)
        .then(module => {
            console.log("=============================");
            console.log(hero.name);
            console.log("-----------------------------");

            const talents = module.default as Talent[];

            const noIconTalents = talents
                // .filter(it => !it.iconUrl);

            // console.log();

            noIconTalents
                .map(it => it.code)
                .forEach(it => console.log(it));

            console.log();
            console.log("Total:", noIconTalents.length);
            console.log();
            console.log();
        });
    console.log();
}
