import { Talent } from "../../../../../../scripts/extractTalents/types";

import { markIfLocked } from "./markIfLocked";

export function getDerivedTalentsState(
    rank: number,
    allTalents: Talent[],
) {    
    const withLockedMarked = allTalents.map(markIfLocked(rank));

    const starting = withLockedMarked.filter(it => it.type === "starting");
    const standard = withLockedMarked.filter(it => it.type === "standard");
    const final = withLockedMarked.filter(it => it.type === "final");

    return {
        starting,
        standard,
        final,
    }
}
