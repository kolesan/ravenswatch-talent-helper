import { heroesBase } from "../../../data/heroes/heroesBase";

import { getManualTalents } from "./utils/getManualTalents";
import { getPasstechTalents } from "./utils/getPasstechTalents";
import { mergePasstechAndManualTalents } from "./utils/mergePasstechAndManualTalents";
import { parsePasstechTalents } from "./utils/parsePasstechTalents";
import { writeTalentsToFile } from "./utils/writeTalentsToFile";

for (let i = 0; i < heroesBase.asArray.length; i++) {
    const hero = heroesBase.asArray[i]!;

    const manualTalents = await getManualTalents(hero.code);
    const passtechTalents = await getPasstechTalents(hero.code);

    const parsedPasstechTalents = parsePasstechTalents(passtechTalents);

    const mergedTalents = mergePasstechAndManualTalents(
        manualTalents,
        parsedPasstechTalents, 
    );

    await writeTalentsToFile(hero, mergedTalents);
}
