import { Talent } from "../extractTalents/types";

export type PasstechTalent = {
    id: string;
    name: string;
    tier: number;
    icon: string;
    descriptions: string[];
};

export type ParsedPasstechTalent = Omit<Talent, "unlockedAtRank">;
