import { heroesManualOrigin } from "./heroesManualOrigin";

export type HeroBaseCode = keyof typeof heroesManualOrigin;

export type HeroBase = {
    code: HeroBaseCode;
    name: typeof heroesManualOrigin[HeroBaseCode]["name"];
};

export type HeroBaseRecord = Record<HeroBaseCode, HeroBase>;
