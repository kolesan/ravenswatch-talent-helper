import { Talent } from "../../../../uiData/heroes/talents/types";
import { Hero } from "../../../../uiData/heroes/types";

export type TalentsCompendiumType = {
    hero: Hero;
    talents: {
        starting: Talent[];
        standard: Talent[];
        ultimate: Talent[];
        final: Talent[];
    };
};
