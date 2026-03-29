import { pathToFileURL } from "url";

import { HeroBaseCode } from "../../../../data/heroes/types";
import { PasstechTalent } from "../../../../data/passtechResponses/types";

const talentsPath = (heroCode: HeroBaseCode) =>
    `${process.cwd()}/src/data/passtechResponses/heroes/talents/${heroCode}`;

export async function getPasstechTalents(
    heroCode: HeroBaseCode
): Promise<PasstechTalent[]> {
    const moduleUrl = pathToFileURL(talentsPath(heroCode)).href;

    const passtechTalentsFile = await import(moduleUrl);
    
    return passtechTalentsFile[heroCode];
}
