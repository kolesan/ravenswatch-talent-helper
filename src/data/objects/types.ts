export type MagicalObject = {
    type: MagicalObjectType;
    code: string;
    name: string;
    description: string[];
    iconUrl: string;
};

export type MagicalObjectType = "legendary" | "cursed";
