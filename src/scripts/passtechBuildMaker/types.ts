import { Talent } from "../extractTalents/types";

export type PasstechTalent = {
    id: string;
    name: string;
    tier: number;
    icon: string;
    descriptions: string[];
};

export type ParsedPasstechTalent = Omit<Talent, "unlockedAtRank">;

export type PasstechItem = {
    id: string;
    name: string;
    description: string;
    effect: string | null;
    quality: number;
    quality_name: "Common" | "Rare" | "Epic" | "Legendary" | "Cursed";
    icon: string;
}

export type ParsedPasstechItem = {
    name: string;
    code: string;
    type: "legendary" | "cursed";
    description: string[];
};
