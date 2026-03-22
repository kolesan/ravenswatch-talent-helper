import { injectManuaOriginHeroesWithCodes } from "./utils/injectManuaOriginHeroesWithCodes";

const heroesWithCodes = injectManuaOriginHeroesWithCodes();

export const heroesBase = {
    all: heroesWithCodes,
    asArray: Object.values(heroesWithCodes),
}
