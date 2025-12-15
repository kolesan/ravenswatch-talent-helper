export type Talent = {
    name: string;
    iconUrl: string | null;
    type: TalentType;
    unlockedAtRank: number;
    description: string[];
    changePerLevel: string[];
}

export type TalentType = 
      "starting" 
    | "standard" 
    | "ultimate" 
    | "final"
    | "unknown_talent_type";
