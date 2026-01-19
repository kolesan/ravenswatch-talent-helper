export type Talent = {
    code: string;
    name: string;
    iconUrl: string | null;
    type: TalentType;
    unlockedAtRank: number;
    description: string[];
    improvements?: string[][];
    changePerLevel?: string[];
    multiplayerOnly?: boolean;
    preferred?: boolean;
}

export type TalentType = 
      "starting" 
    | "standard" 
    | "ultimate" 
    | "final"
    | "unknown_talent_type";
