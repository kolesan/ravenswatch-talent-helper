import { HeroBase } from "../../data/heroes/types";
import { Talent } from "../../scripts/extractTalents/types";

export type Hero = Omit<HeroBase, "wikiUrl"> & {
    talents: Talent[];
}

export type HeroCode = Hero["code"];

export type HeroRecord = Record<HeroCode, Hero>;
