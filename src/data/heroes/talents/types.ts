export type TalentManual = {
    code: string;
    unlockedAtRank: number;
    multiplayerOnly?: boolean;
}

export type TalentMerged = {
    code: string;
    name: string;
    iconUrl: string;
    type: TalentType;
    unlockedAtRank: number;
    multiplayerOnly?: boolean;
    description: string[];
    improvements: string[][];
    degradations: string[][];
}

export type TalentType = 
      "starting" 
    | "standard" 
    | "ultimate" 
    | "final";
