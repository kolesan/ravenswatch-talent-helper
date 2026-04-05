import { HeroBase } from "data/heroes/types";

import { Talent } from "./talents/types";

export type Hero = HeroBase & {
    talents: Talent[];
}

export type HeroCode = Hero["code"];

export type HeroRecord = Record<HeroCode, Hero>;
