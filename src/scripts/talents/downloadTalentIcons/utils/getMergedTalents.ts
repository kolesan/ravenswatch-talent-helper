import { pathToFileURL } from "url";

import { TalentMerged } from "../../../../data/heroes/talents/types";
import { HeroBaseCode } from "../../../../data/heroes/types";

const talentsPath = (heroCode: HeroBaseCode) =>
    `${process.cwd()}/src/data/heroes/talents/merged/${heroCode}`;

export async function getMergedTalents(
    heroCode: HeroBaseCode
): Promise<TalentMerged[]> {
    const moduleUrl = pathToFileURL(talentsPath(heroCode)).href;

    const mergedTalentsFile = await import(moduleUrl);

    return mergedTalentsFile[heroCode];
}
