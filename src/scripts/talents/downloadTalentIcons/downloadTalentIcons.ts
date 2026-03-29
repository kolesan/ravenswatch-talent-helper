import { heroesBase } from "../../../data/heroes/heroesBase";
import { downloadIcons } from "../../utils/downloadIcons";

import { getMergedTalents } from "./utils/getMergedTalents";

const baseDir = "public/icons/talents/new";

const heroes = [
    heroesBase.all.merlin
];

for (let i = 0; i < heroes.length; i++) {
    const hero = heroes[i]!;

    const mergedTalents = await getMergedTalents(hero.code);

    console.log();
    console.log("Downloading icons for: ", hero.code);

    await downloadIcons(`${baseDir}/${hero.code}`, mergedTalents);
}
