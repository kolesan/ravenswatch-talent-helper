import { heroesBase } from "data/heroes/heroesBase";
import { TalentManual } from "data/heroes/talents/types";

import { getParsedPasstechTalents } from "../utils/getParsedPasstechTalents/getParsedPasstechTalents";

import { unlockedAtExample } from "./consts/unlockedAtExample";
import { writeManualTalentsToFile } from "./utils/writeManualTalentsToFile";

const hero = heroesBase.all.merlin;

const parsedPasstechTalents = await getParsedPasstechTalents(hero.code);

const manualTalents: TalentManual[] = parsedPasstechTalents.map((it, i) => ({
    code: it.code,
    unlockedAtRank: unlockedAtExample[i]?.unlockedAtRank || 0,
}))

await writeManualTalentsToFile(hero, manualTalents);
