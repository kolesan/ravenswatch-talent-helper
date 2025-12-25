import { Talent } from "../../scripts/extractTalents/types";

import { isLocked } from "./isLocked";

export function isNotLocked(rank: number) {
    return function(talent: Talent) {
        return !isLocked(rank)(talent);
    }
}
