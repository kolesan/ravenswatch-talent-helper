import { TalentType } from "data/heroes/talents/types";

export type ParsedPasstechTalent = {
    code: string;
    name: string;
    iconUrl: string;
    type: TalentType;
    description: string[];
    improvements: string[][];
    degradations: string[][];
}
