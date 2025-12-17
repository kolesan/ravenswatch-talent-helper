import { Talent } from "../types";

import { getChangePerLevel } from "./getChangePerLevel";
import { getDescription } from "./getDescription";
import { getNameAndIconUrl } from "./getNameAndIconUrl";
import { getType } from "./getType";
import { getUnlockedAtRank } from "./getUnlockedAtRank";

export function parseCommonTable(row: HTMLTableRowElement) {
    const cells = [...row.querySelectorAll("td")];
    
    const { name, iconUrl } = getNameAndIconUrl(cells[0]);
    const type = getType(cells[1]);
    const unlockedAtRank = getUnlockedAtRank(cells[2]);
    const description = getDescription(cells[3]);
    const changePerLevel = getChangePerLevel(cells[4]);

    const talent: Talent = {
        name,
        iconUrl,
        type,
        unlockedAtRank,
        description,
        changePerLevel,
    }

    return talent;
}
