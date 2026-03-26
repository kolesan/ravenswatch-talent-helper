import { Hero } from "./types";
import { injectBaseHeroesWithTalents } from "./utils/injectBaseHeroesWithTalents";

const heroesWithTalents = injectBaseHeroesWithTalents();

export const heroes = {
    all: heroesWithTalents.asObj,
    asArray: heroesWithTalents.asArray,
    utils: {
        findByCode(code: string): Hero | undefined {
            return heroes.asArray.find(it => it.code === code);
        }
    }
};
