export type PasstechHero = {
    name: string;
    raw_name: string;
    description: string;
    icon: string;
    bw_icon: string;
    illustration: string;
};

export type PasstechTalent = {
    id: string;
    name: string;
    tier: number;
    icon: string;
    descriptions: string[];
};

export type PasstechItem = {
    id: string;
    name: string;
    description: string;
    effect: string | null;
    quality: number;
    quality_name: "Common" | "Rare" | "Epic" | "Legendary" | "Cursed";
    icon: string;
};
