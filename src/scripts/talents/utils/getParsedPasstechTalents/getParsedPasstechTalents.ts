import { HeroBaseCode } from "../../../../data/heroes/types";
import { ParsedPasstechTalent } from "../../types";

import { getPasstechTalents } from "./utils/getPasstechTalents";
import { parsePasstechTalents } from "./utils/parsePasstechTalents";

export async function getParsedPasstechTalents(
    heroCode: HeroBaseCode
): Promise<ParsedPasstechTalent[]> {
    const passtechTalents = await getPasstechTalents(heroCode);
    
    return parsePasstechTalents(passtechTalents);
}
