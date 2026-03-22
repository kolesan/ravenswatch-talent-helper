import { heroesManualOrigin } from "./heroesManualOrigin";

export type HeroBaseCode = keyof typeof heroesManualOrigin;

export type HeroBase = {
    code: HeroBaseCode;
    name: typeof heroesManualOrigin[HeroBaseCode]["name"];
    wikiUrl: typeof heroesManualOrigin[HeroBaseCode]["wikiUrl"];
};

export type HeroBaseRecord = Record<HeroBaseCode, HeroBase>;
