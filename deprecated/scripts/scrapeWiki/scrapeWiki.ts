import { heroesBase } from "../../heroesBase";
import { runPromiseChain } from "../utils/runPromiseChain";

import { scrapeHeroPage } from "./utils/scrapeHeroPage";

let i = 0;
function getNextHeroPage() {
    return {
        promise: new Promise<void>((res) => {
            const hero = heroesBase.asArray[i++];
            if (hero) {
                scrapeHeroPage(hero);
            }
            res();
        }),
        getPromiseAfterThat: i === heroesBase.asArray.length
            ? undefined
            : getNextHeroPage,
    }
}

const initialTrigger = getNextHeroPage();

runPromiseChain({
    currentPromise: initialTrigger.promise,
    getNextPromise: initialTrigger.getPromiseAfterThat,
    options: {
        delayMs: 3500,
    }
});
