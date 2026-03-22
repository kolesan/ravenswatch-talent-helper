import { HeroBase } from "../../data/heroesBase";
import { Talent } from "../../scripts/extractTalents/types";

export type Hero = Omit<HeroBase, "wikiUrl"> & {
    talents: Talent[];
}

export type HeroCode = Hero["code"];

export type HeroRecord = Record<HeroCode, Hero>;
