import { Hero } from "../../../../data/heroes";
import { Talent } from "../../types";

import { aladdinOrder } from "./consts/aladdinOrder";
import { beowulfOrder } from "./consts/beowulfOrder";
import { carmillaOrder } from "./consts/carmillaOrder";
import { geppettoOrder } from "./consts/geppettoOrder";
import { julietOrder } from "./consts/julietOrder";
import { melusineOrder } from "./consts/melusineOrder";
import { piperOrder } from "./consts/piperOrder";
import { romeoOrder } from "./consts/romeoOrder";
import { scarletOrder } from "./consts/scarletOrder";
import { snowQueenOrder } from "./consts/snowQueenOrder";
import { wukongOrder } from "./consts/wukongOrder";

const orderMap: Partial<Record<Hero["code"], string[]>> = {
    scarlet: scarletOrder,
    piper: piperOrder,
    beowulf: beowulfOrder,
    snowQueen: snowQueenOrder,
    aladdin: aladdinOrder,
    melusine: melusineOrder,
    geppetto: geppettoOrder,
    wukong: wukongOrder,
    carmilla: carmillaOrder,
    romeo: romeoOrder,
    juliet: julietOrder,
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
