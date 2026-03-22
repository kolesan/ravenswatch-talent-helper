import { heroesManualOrigin } from "../heroesManualOrigin";
import { HeroBase, HeroBaseCode, HeroBaseRecord } from "../types";

export function injectManuaOriginHeroesWithCodes() {
    return Object.entries(heroesManualOrigin).reduce((acc, [k, v]) => {
        const heroCode = k as HeroBaseCode;
        const hero: HeroBase = {
            code: heroCode,
            name: v.name,
            wikiUrl: v.wikiUrl,
        };
        return {
            ...acc,
            [heroCode]: hero,
        };
    }, {} as Partial<HeroBaseRecord>) as HeroBaseRecord;
}
