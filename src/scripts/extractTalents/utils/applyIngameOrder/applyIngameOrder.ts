import { Hero } from "../../../../data/heroes";
import { Talent } from "../../types";
import { beowulfOrder } from "./consts/beowulfOrder";
import { piperOrder } from "./consts/piperOrder";

import { scarletOrder } from "./consts/scarletOrder";

const orderMap: Partial<Record<Hero["code"], string[]>> = {
    scarlet: scarletOrder,
    piper: piperOrder,
    beowulf: beowulfOrder,
}

export function applyIngameOrder(hero: Hero) {
    const order = orderMap[hero.code];
    
    if (!order) {
        return noop;
    }

    return function(acc: Talent[], it: Talent) {
        const correctIndex = order?.indexOf(it.code);
        acc[correctIndex || 0] = it;
        return acc;
    }
}

function noop(acc: Talent[], it: Talent) {
    acc.push(it);
    return acc;
}
