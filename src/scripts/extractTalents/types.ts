export type Talent = {
    code: string;
    name: string;
    iconUrl: string | null;
    type: TalentType;
    unlockedAtRank: number;
    description: string[];
    changePerLevel: string[];
    multiplayerOnly?: boolean;
}

export type TalentType = 
      "starting" 
    | "standard" 
    | "ultimate" 
    | "final"
    | "unknown_talent_type";
