import { pathToFileURL } from "url";

import { TalentManual } from "../../../../data/heroes/talents/types";
import { HeroBaseCode } from "../../../../data/heroes/types";

const talentsPath = (heroCode: HeroBaseCode) =>
    `${process.cwd()}/src/data/heroes/talents/manual/${heroCode}`;

export async function getManualTalents(
    heroCode: HeroBaseCode
): Promise<TalentManual[]> {
    const moduleUrl = pathToFileURL(talentsPath(heroCode)).href;

    const manualTalentsFile = await import(moduleUrl);

    return manualTalentsFile[heroCode];
}
