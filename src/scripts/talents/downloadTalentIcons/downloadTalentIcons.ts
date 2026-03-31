import { heroesBase } from "../../../data/heroes/heroesBase";
import { downloadIcons } from "../../utils/downloadIcons";
import { baseTalentIconsNewDir } from "../consts";

import { getMergedTalents } from "./utils/getMergedTalents";

const baseDir = baseTalentIconsNewDir;

const heroes = [
    heroesBase.all.merlin,
    heroesBase.all.beowulf,
];

for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i]!;

    const mergedTalents = await getMergedTalents(hero.code);

    console.log();
    console.log("Downloading icons for: ", hero.code);

    await downloadIcons(`${baseDir}/${hero.code}`, mergedTalents.slice(-3));
}
