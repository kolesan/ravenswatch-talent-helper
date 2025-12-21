import { Hero, heroes } from "../data/heroes";

import { Talent } from "./extractTalents/types";

heroes.asArray.forEach(printTalentCodes);

function printTalentCodes(hero: Hero) {
    import(`../scrapedData/heroTalents/${hero.code}.json`)
        .then(module => {
            console.log("=============================");
            console.log(hero.name);
            console.log("-----------------------------");

            const talents = module.default as Talent[];

            // const noIconTalents = talents
            //     .filter(it => !it.iconUrl);

            console.log(
                JSON.stringify(talents.map(it => it.code), null, "    ") 
            );

            console.log();
            console.log("Total:", talents.length);
            console.log();
            console.log();
        });
    console.log();
}
