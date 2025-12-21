import { Hero, HeroCode } from "../../../../../data/heroes";
import { Talent } from "../../../types";

type TalentTransformCb = (talent: Talent) => Talent;

export function applyManualFixes(hero: Hero) {
    return map[hero.code] || noop;
}

const map: Partial<Record<HeroCode, TalentTransformCb>> = {
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
