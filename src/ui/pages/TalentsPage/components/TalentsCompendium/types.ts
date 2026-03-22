import { Hero } from "../../../../uiData/types";
import { TalentWithLockedFlag } from "../../types";

export type TalentsCompendiumType = {
    hero: Hero;
    talents: {
        starting: TalentWithLockedFlag[];
        standard: TalentWithLockedFlag[];
        ultimate: TalentWithLockedFlag[];
        final: TalentWithLockedFlag[];
    };
};
