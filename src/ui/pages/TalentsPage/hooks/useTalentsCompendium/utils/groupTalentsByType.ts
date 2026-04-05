import { Talent } from "ui/uiData/heroes/talents/types";

export function groupTalentsByType(allTalents: Talent[]) {
    const starting = allTalents.filter(it => it.type === "starting");
    const standard = allTalents.filter(it => it.type === "standard");
    const ultimate = allTalents.filter(it => it.type === "ultimate");
    const final = allTalents.filter(it => it.type === "final");

    return {
        starting,
        standard,
        ultimate,
        final,
    }
}
