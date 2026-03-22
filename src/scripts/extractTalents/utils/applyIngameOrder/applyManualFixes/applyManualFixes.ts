import { HeroBase, HeroBaseCode } from "../../../../../data/heroes/types";
import { Talent } from "../../../types";

type TalentTransformCb = (talent: Talent) => Talent;

export function applyManualFixes(hero: HeroBase) {
    return map[hero.code] || noop;
}

const map: Partial<Record<HeroBaseCode, TalentTransformCb>> = {
    beowulf,
}

function beowulf(talent: Talent): Talent {
    if (talent.code === "furious_blow") {
        console.log("Applying manual fixes for Beowulf's", talent.code);
        return {
            ...talent,
            code: "furious_blows",
            name: "Furious Blows",
        }
    }

    return talent;
}

function noop(talent: Talent) {
    return talent;
}
