import { Hero } from "../../../../data/heroes";
import { Talent } from "../../types";

import { scarletOrder } from "./utils/scarletOrder";

const orderMap: Partial<Record<Hero["code"], string[]>> = {
    scarlet: scarletOrder,
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
