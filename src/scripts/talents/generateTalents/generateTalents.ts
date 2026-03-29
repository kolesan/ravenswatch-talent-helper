import { heroesBase } from "../../../data/heroes/heroesBase";
import { getParsedPasstechTalents } from "../utils/getParsedPasstechTalents/getParsedPasstechTalents";

import { getManualTalents } from "./utils/getManualTalents";
import { mergePasstechAndManualTalents } from "./utils/mergePasstechAndManualTalents";
import { writeMergedTalentsToFile } from "./utils/writeMergedTalentsToFile";

for (let i = 0; i < heroesBase.asArray.length; i++) {
    const hero = heroesBase.asArray[i]!;

    const manualTalents = await getManualTalents(hero.code);
    const parsedPasstechTalents = await getParsedPasstechTalents(hero.code);

    const mergedTalents = mergePasstechAndManualTalents(
        manualTalents,
        parsedPasstechTalents, 
    );

    await writeMergedTalentsToFile(hero, mergedTalents);
}
