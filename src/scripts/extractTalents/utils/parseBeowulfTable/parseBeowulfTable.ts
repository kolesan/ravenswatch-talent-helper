import { Talent } from "../../types";
import { getChangePerLevel } from "../getChangePerLevel";
import { getDescription } from "../getDescription";
import { getType } from "../getType";
import { getUnlockedAtRank } from "../getUnlockedAtRank";

import { getIconUrl } from "./utils/getIconUrl";
import { getName } from "./utils/getName";

export function parseBeowulfTable(row: HTMLTableRowElement) {
    const cells = [...row.querySelectorAll("td")];
    
    const iconUrl = getIconUrl(cells[0]);
    const name = getName(cells[1]);
    const type = getType(cells[2]);
    const unlockedAtRank = getUnlockedAtRank(cells[3]);
    const description = getDescription(cells[4]);
    const changePerLevel = getChangePerLevel(cells[5]);

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
