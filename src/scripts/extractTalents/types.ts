export type Talent = {
    code: string;
    name: string;
    iconUrl: string | null;
    type: TalentType;
    unlockedAtRank: number;
    description: string[];
    changePerLevel: string[];
    isUnavailableDuringSoloPlay?: boolean;
}

export type TalentType = 
      "starting" 
    | "standard" 
    | "ultimate" 
    | "final"
    | "unknown_talent_type";
